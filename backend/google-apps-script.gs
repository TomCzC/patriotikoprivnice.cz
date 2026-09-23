// Google Apps Script – přijímání podnětů a zápis do Google Dokumentu
//
// 1. Vytvořte projekt na https://script.google.com/
// 2. Vložte tento kód.
// 3. Projekt musí běžet jako váš Google účet (Nasadit → Webová aplikace → Spouštět jako Já).
// 4. Dokument s podněty je určený tímto ID:
//      1X717oRzsptmtRyJ29uEGWX9Qn5mYhEqHxclah84t_ac
// 5. Nasazení nastavte na: Kdo má přístup → Kdokoli.
// 6. Zkopírujte URL /exec a vložte ji do data-endpoint u #feedback-form v index.html.
//
// Není potřeba GitHub token. Skript zapisuje přímo do Google Dokumentu pod vaším účtem.

const DOCUMENT_ID = "1X717oRzsptmtRyJ29uEGWX9Qn5mYhEqHxclah84t_ac";

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

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const doc = DocumentApp.openById(DOCUMENT_ID);
    const body = doc.getBody();

    body.appendParagraph("----------------------------------------");
    body.appendParagraph("Datum: " + formatDate_());
    body.appendParagraph("Jméno: " + name);
    body.appendParagraph("");
    body.appendParagraph("Podnět:");
    body.appendParagraph(message);
    body.appendParagraph("----------------------------------------");
    body.appendParagraph("");

    doc.saveAndClose();

    return ContentService.createTextOutput("OK");
  } catch (error) {
    console.error(error);
    return ContentService.createTextOutput("ERROR");
  } finally {
    lock.releaseLock();
  }
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
