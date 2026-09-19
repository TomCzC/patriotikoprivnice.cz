// Google Apps Script – přijímání podnětů a zápis do GitHubu
//
// 1. Vytvořte projekt na https://script.google.com/
// 2. Vložte tento kód.
// 3. V Nastavení projektu → Vlastnosti skriptu přidejte:
//      GITHUB_TOKEN = váš GitHub Fine-grained Personal Access Token
// 4. Nasadit → Nové nasazení → Webová aplikace.
//      Spouštět jako: Já
//      Kdo má přístup: Kdokoli
// 5. Zkopírujte URL /exec a vložte ji do data-endpoint u #feedback-form v index.html.
//
// Token se nikdy nevkládá do webu ani do tohoto souboru.
// Do GitHubu se zapisuje soubor podnety.txt v repozitáři patriotikoprivnice.cz.

const GITHUB_OWNER = "TomCzC";
const GITHUB_REPO = "patriotikoprivnice.cz";
const GITHUB_FILE = "podnety.txt";
const GITHUB_BRANCH = "main";
const GITHUB_API = "https://api.github.com";

function doGet() {
  return ContentService.createTextOutput("OK");
}

function doPost(e) {
  const p = e && e.parameter ? e.parameter : {};
  const name = clean_(p.name, 80);
  const message = clean_(p.message, 3000);
  const honeypot = clean_(p.website, 100);

  if (honeypot || !name || !message || p.consent !== "ano") {
    return ContentService.createTextOutput("INVALID");
  }

  const token = PropertiesService.getScriptProperties().getProperty("GITHUB_TOKEN");
  if (!token) {
    return ContentService.createTextOutput("ERROR");
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const entry =
      "----------------------------------------\n" +
      "Datum: " + formatDate_() + "\n" +
      "Jméno: " + name + "\n\n" +
      "Podnět:\n" + message + "\n" +
      "----------------------------------------\n\n";

    for (let attempt = 0; attempt < 3; attempt++) {
      const file = githubGet_(token);
      const current = Utilities.newBlob(
        Utilities.base64Decode(file.content.replace(/\s/g, ""))
      ).getDataAsString("UTF-8");

      const content = Utilities.base64Encode(
        Utilities.newBlob(current + entry, "text/plain", GITHUB_FILE).getBytes()
      );

      const result = githubPut_(token, content, file.sha);

      if (result.ok) {
        return ContentService.createTextOutput("OK");
      }

      // Při souběhu jiného zápisu znovu načteme aktuální SHA a zkusíme znovu.
      if (result.code !== 409) {
        return ContentService.createTextOutput("ERROR");
      }
    }

    return ContentService.createTextOutput("ERROR");
  } finally {
    lock.releaseLock();
  }
}

function githubGet_(token) {
  const url =
    GITHUB_API +
    "/repos/" + GITHUB_OWNER +
    "/" + GITHUB_REPO +
    "/contents/" + encodeURIComponent(GITHUB_FILE) +
    "?ref=" + encodeURIComponent(GITHUB_BRANCH);

  const response = UrlFetchApp.fetch(url, {
    method: "get",
    headers: githubHeaders_(token),
    muteHttpExceptions: true
  });

  const code = response.getResponseCode();
  if (code !== 200) {
    throw new Error("GitHub GET failed: " + code);
  }

  return JSON.parse(response.getContentText());
}

function githubPut_(token, content, sha) {
  const url =
    GITHUB_API +
    "/repos/" + GITHUB_OWNER +
    "/" + GITHUB_REPO +
    "/contents/" + encodeURIComponent(GITHUB_FILE);

  const response = UrlFetchApp.fetch(url, {
    method: "put",
    contentType: "application/json",
    headers: githubHeaders_(token),
    payload: JSON.stringify({
      message: "Nový podnět z webu",
      content: content,
      sha: sha,
      branch: GITHUB_BRANCH
    }),
    muteHttpExceptions: true
  });

  const code = response.getResponseCode();
  return { ok: code >= 200 && code < 300, code: code };
}

function githubHeaders_(token) {
  return {
    "Authorization": "Bearer " + token,
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  };
}

function formatDate_() {
  return Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone() || "Europe/Prague",
    "dd. MM. yyyy HH:mm:ss"
  );
}

function clean_(value, max) {
  return String(value || "")
    .replace(/[\\r\\n\\t]+/g, " ")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim()
    .slice(0, max);
}
