// Google Apps Script – ukládání podnětů z webu Patrioti pro Kopřivnici
// 1. Vytvořte nový projekt na https://script.google.com/
// 2. Vložte tento kód.
// 3. Nasadit > Nové nasazení > Webová aplikace.
// 4. Spouštět jako: Já. Kdo má přístup: Kdokoli.
// 5. Zkopírujte URL /exec a vložte ji do data-endpoint u #feedback-form v index.html.
//
// Skript vytvoří v Google Drive soubor "podnety.txt" a další podněty do něj připisuje.
// Soubor není veřejně publikovaný na webu.

const FILE_NAME = "podnety.txt";

function doGet() {
  return ContentService.createTextOutput("OK");
}

function doPost(e) {
  const p = e && e.parameter ? e.parameter : {};
  const name = clean_(p.name, 80);
  const message = clean_(p.message, 3000);
  const honeypot = clean_(p.website, 100);

  // Jednoduchá ochrana proti automatickému spamu.
  if (honeypot || !name || !message || p.consent !== "ano") {
    return ContentService.createTextOutput("INVALID");
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const files = DriveApp.getFilesByName(FILE_NAME);
    const file = files.hasNext()
      ? files.next()
      : DriveApp.createFile(FILE_NAME, "", MimeType.PLAIN_TEXT);

    const stamp = Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone() || "Europe/Prague",
      "dd. MM. yyyy HH:mm:ss"
    );

    const entry =
      "----------------------------------------\n" +
      "Datum: " + stamp + "\n" +
      "Jméno: " + name + "\n\n" +
      "Podnět:\n" + message + "\n" +
      "----------------------------------------\n\n";

    const current = file.getBlob().getDataAsString("UTF-8");
    file.setContent(current + entry);

    return ContentService.createTextOutput("OK");
  } finally {
    lock.releaseLock();
  }
}

function clean_(value, max) {
  return String(value || "")
    .replace(/[\\r\\n\\t]+/g, " ")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim()
    .slice(0, max);
}
