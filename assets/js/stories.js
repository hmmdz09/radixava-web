/* =========================================================
   RADIXAVA — Cerita Konsumen (storage + render)
   Mode 1 (default): tersimpan di browser (localStorage) — untuk demo.
   Mode 2: isi RX.config.storyEndpoint dengan URL Google Apps Script
           (lihat google-apps-script.gs) supaya data masuk Google Sheets
           dan bisa dibaca semua pengunjung.
   ========================================================= */
(function () {
  "use strict";
  const KEY = "radixava_stories_v1";
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

  const local = () => { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { return []; } };
  const saveLocal = (arr) => { try { localStorage.setItem(KEY, JSON.stringify(arr)); return true; } catch (e) { return false; } };

  async function list() {
    const RX = window.RX; const C = RX.config;
    let remote = [];
    if (C.storyEndpoint) {
      try {
        const r = await fetch(C.storyEndpoint + "?action=list", { cache: "no-store" });
        const j = await r.json();
        if (Array.isArray(j.stories)) remote = j.stories;
      } catch (e) { console.warn("Gagal memuat cerita dari server:", e); }
    }
    const mine = local();
    const ids = new Set(remote.map((s) => s.id));
    let all = remote.concat(mine.filter((s) => !ids.has(s.id)));
    all.sort((a, b) => String(b.date).localeCompare(String(a.date)));
    if (C.showSampleStories) all = all.concat(RX.sampleStories);
    return all;
  }

  async function add(story) {
    const C = window.RX.config;
    story.id = "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    story.date = new Date().toISOString();
    let remoteOk = false;
    if (C.storyEndpoint) {
      try {
        // text/plain menghindari preflight CORS di Apps Script
        await fetch(C.storyEndpoint, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(story) });
        remoteOk = true;
      } catch (e) { console.warn("Gagal kirim ke server, disimpan lokal:", e); }
    }
    const arr = local(); arr.unshift(story);
    if (!saveLocal(arr)) { story.photo = ""; arr[0] = story; saveLocal(arr); }
    return { ok: true, remote: remoteOk, story };
  }

  const fmtDate = (d) => { try { return new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }); } catch (e) { return ""; } };

  function card(s) {
    const RX = window.RX;
    const v = RX.variants.find((x) => x.slug === s.variant) || RX.variants[0];
    const stars = "★★★★★".slice(0, s.rating || 0) + "☆☆☆☆☆".slice(0, 5 - (s.rating || 0));
    return `
      <article class="story${s.sample ? " is-sample" : ""}" style="--c:${v.color};--cs:${v.soft}" data-variant="${esc(v.slug)}">
        ${s.sample ? '<span class="sample-label">Contoh</span>' : ""}
        <div class="story-head">
          <span class="avatar" aria-hidden="true">${esc(s.mood || "😋")}</span>
          <span><b>${esc(s.name || "Sobat Radixava")}</b><small>${esc(s.city || "")}${s.city ? " • " : ""}${fmtDate(s.date)}</small></span>
        </div>
        <span class="vbadge"><i></i>${esc(v.name)}</span>
        <div class="stars" aria-label="Rating ${s.rating} dari 5">${stars}</div>
        ${s.photo ? `<img class="photo" src="${esc(s.photo)}" alt="Foto dari ${esc(s.name || "konsumen")}" loading="lazy">` : ""}
        <p>${esc(s.text)}</p>
        ${(s.tags || []).length ? `<div class="tags">${s.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
      </article>`;
  }

  function stats(all) {
    const real = all.filter((s) => !s.sample);
    const base = real.length ? real : all;
    const n = base.length || 1;
    const avg = base.reduce((a, s) => a + (+s.rating || 0), 0) / n;
    const crunch = base.reduce((a, s) => a + (+s.crunch || 0), 0) / n;
    const again = base.filter((s) => s.again === "ya").length / n * 100;
    const cnt = {}; base.forEach((s) => (cnt[s.variant] = (cnt[s.variant] || 0) + 1));
    const favSlug = Object.keys(cnt).sort((a, b) => cnt[b] - cnt[a])[0];
    const fav = window.RX.variants.find((v) => v.slug === favSlug);
    return { total: real.length, avg, crunch, again, fav, isSample: !real.length };
  }

  function toCSV(all) {
    const cols = ["date", "name", "city", "variant", "rating", "crunch", "again", "price", "moment", "where", "tags", "text", "suggest"];
    const q = (v) => `"${String(Array.isArray(v) ? v.join("; ") : v ?? "").replace(/"/g, '""')}"`;
    return [cols.join(",")].concat(all.filter((s) => !s.sample).map((s) => cols.map((c) => q(s[c])).join(","))).join("\n");
  }

  // kompres foto -> dataURL kecil
  function compress(file, max = 720, q = 0.72) {
    return new Promise((res, rej) => {
      if (!file || !/^image\//.test(file.type)) return rej(new Error("Bukan gambar"));
      const img = new Image(); const url = URL.createObjectURL(file);
      img.onload = () => {
        const k = Math.min(1, max / Math.max(img.width, img.height));
        const c = document.createElement("canvas"); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url); res(c.toDataURL("image/jpeg", q));
      };
      img.onerror = () => { URL.revokeObjectURL(url); rej(new Error("Gagal membaca gambar")); };
      img.src = url;
    });
  }

  window.RXStories = { list, add, card, stats, toCSV, compress, local };
})();
