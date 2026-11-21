/**
 * RADIXAVA — Backend opsional cerita konsumen (Google Sheets)
 * -----------------------------------------------------------
 * Tujuan: supaya cerita konsumen dari semua HP tersimpan di 1 Google Sheet
 *         (untuk validasi pasar) dan tampil di Dinding Cerita.
 *
 * Cara pasang (±5 menit):
 * 1. Buat Google Sheet baru, beri nama "Cerita Radixava".
 * 2. Menu Ekstensi > Apps Script. Hapus isi Code.gs, tempel seluruh file ini.
 * 3. Klik Deploy > New deployment > pilih tipe "Web app".
 *      Execute as : Me
 *      Who has access : Anyone
 *    Klik Deploy, izinkan akses, lalu salin "Web app URL".
 * 4. Buka assets/js/data.js, isi:  storyEndpoint: "URL_YANG_DISALIN"
 * 5. Selesai. Setiap cerita baru masuk ke sheet "Stories".
 *
 * Moderasi: ubah kolom "approved" jadi FALSE untuk menyembunyikan cerita.
 * Catatan: foto disimpan sebagai data URL kecil (sudah dikompres di browser).
 */

const SHEET = "Stories";
const COLS = ["id", "date", "name", "city", "variant", "where", "rating", "crunch", "price", "again", "mood", "tags", "text", "suggest", "photo", "consent", "approved"];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET);
  if (!sh) { sh = ss.insertSheet(SHEET); sh.appendRow(COLS); sh.setFrozenRows(1); }
  return sh;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents || "{}");
    const clean = (v, n) => String(v == null ? "" : v).slice(0, n || 500);
    const photo = String(d.photo || "").indexOf("data:image/") === 0 && String(d.photo).length < 45000 ? d.photo : "";
    sheet_().appendRow([
      clean(d.id, 40), new Date().toISOString(), clean(d.name, 40), clean(d.city, 40), clean(d.variant, 40),
      clean(d.where, 60), Number(d.rating) || 0, Number(d.crunch) || 0, clean(d.price, 10), clean(d.again, 10),
      clean(d.mood, 8), (d.tags || []).join("; ").slice(0, 300), clean(d.text, 500), clean(d.suggest, 200),
      photo, d.consent !== false, true
    ]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally { lock.releaseLock(); }
}

function doGet(e) {
  const rows = sheet_().getDataRange().getValues();
  const head = rows.shift();
  const stories = rows.map(r => {
    const o = {}; head.forEach((h, i) => (o[h] = r[i]));
    o.tags = String(o.tags || "").split("; ").filter(String);
    return o;
  }).filter(o => o.approved === true && o.consent === true)
    .reverse().slice(0, 200);
  return json_({ stories });
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
