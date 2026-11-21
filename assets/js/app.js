/* =========================================================
   RADIXAVA — App (layout bersama + fitur interaktif)
   ========================================================= */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");
  const RX = window.RX;
  const C = RX.config;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const IMG = "assets/img/";
  const vBySlug = (s) => RX.variants.find((v) => v.slug === s);

  /* ---------------- Icons ---------------- */
  const I = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l1 13H5z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
    hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 14l2 2a2 2 0 0 0 3-3l-3-3"/><path d="M3 11l4-4 5 1 3-2 6 6-4 4"/><path d="M7 7l-4 4 6 6 2-2"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    tt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.4 7.4 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>',
    shop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9l1-5h14l1 5"/><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0"/><path d="M5 11v9h14v-9"/></svg>',
    flip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg>',
    recycle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7L5 13"/><path d="M11 19h8.2a1.8 1.8 0 0 0 1.6-2.7L19 13"/><path d="M14 16l-3 3 3 3"/><path d="M8.3 6.6L10.4 3a1.8 1.8 0 0 1 3.2 0l1.9 3.3"/><path d="M14.5 2.9l1 4.1-4.1 1"/><path d="M4.4 9.9L6 13l3.3-1.5"/></svg>',
    flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7 15h10"/></svg>',
    tri: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l9.5 17h-19z"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 13h6M9 17h6"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/></svg>',
    store: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10h18M5 10v10h14V10M4 10l2-6h12l2 6M10 20v-5h4v5"/></svg>',
    mega: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4h4l6 4V6L7 10z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/></svg>',
    factory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V10l6 4V10l6 4V5h6v16z"/><path d="M7 17h2M12 17h2M17 17h2"/></svg>'
  };
  window.RXI = I;

  /* ---------------- Links ---------------- */
  const L = {
    ig: C.instagram ? `https://instagram.com/${C.instagram}` : "",
    tt: C.tiktok ? `https://www.tiktok.com/@${C.tiktok}` : "",
    wa: (msg) => (C.whatsapp ? `https://wa.me/${C.whatsapp}${msg ? "?text=" + encodeURIComponent(msg) : ""}` : ""),
    mail: (sub, body) => (C.email ? `mailto:${C.email}?subject=${encodeURIComponent(sub || "")}&body=${encodeURIComponent(body || "")}` : "")
  };
  window.RXL = L;

  /* ---------------- Layout: header, drawer, tabbar, footer ---------------- */
  const page = document.body.dataset.page || "";
  const NAV = [
    { id: "home", href: "index.html", t: "Beranda", d: "Kenalan sama Radixava" },
    { id: "produk", href: "produk.html", t: "Produk", d: "5 varian Tri-Crunch" },
    { id: "onggok", href: "onggok.html", t: "Edukasi", d: "Onggok & fun fact bahan" },
    { id: "cerita", href: "cerita.html", t: "Cerita Konsumen", d: "Bagikan pengalamanmu" },
    { id: "legalitas", href: "legalitas.html", t: "Legalitas", d: "Izin & keamanan pangan" },
    { id: "kerjasama", href: "kerja-sama.html", t: "Kerja Sama", d: "Reseller & mitra" },
    { id: "kontak", href: "kontak.html", t: "Kontak", d: "Hubungi tim kami" }
  ];
  const cur = (id) => (id === page ? ' aria-current="page"' : "");
  const logo = `<a class="brand" href="index.html" aria-label="Radixava — Beranda"><img src="${IMG}logo-emblem.png" alt="" width="46" height="35"><span>RADIXAVA<small>TRI-CRUNCH • UPCYCLED</small></span></a>`;

  const socialLinks = () => [
    L.ig && `<a class="social" href="${L.ig}" target="_blank" rel="noopener" aria-label="Instagram @${esc(C.instagram)}">${I.ig}</a>`,
    L.tt && `<a class="social" href="${L.tt}" target="_blank" rel="noopener" aria-label="TikTok @${esc(C.tiktok)}">${I.tt}</a>`,
    C.whatsapp && `<a class="social" href="${L.wa("Halo Radixava!")}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a>`,
    C.email && `<a class="social" href="${L.mail("Halo Radixava")}" aria-label="Email">${I.mail}</a>`
  ].filter(Boolean).join("");

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="container">
      ${logo}
      <nav class="nav" aria-label="Navigasi utama">
        ${NAV.filter((n) => n.id !== "kontak").map((n) => `<a href="${n.href}"${cur(n.id)}>${n.t}</a>`).join("")}
      </nav>
      <a class="btn btn--sm header-cta" href="kontak.html">Hubungi Kami</a>
      <button class="menu-btn" type="button" aria-label="Buka menu" aria-expanded="false" aria-controls="drawer"><span></span></button>
    </div>`;
  document.body.prepend(header);
  const skip = document.createElement("a");
  skip.className = "skip"; skip.href = "#main"; skip.textContent = "Lewati ke konten";
  document.body.prepend(skip);

  const drawer = document.createElement("div");
  drawer.className = "drawer"; drawer.id = "drawer";
  drawer.setAttribute("aria-hidden", "true");
  drawer.innerHTML = `
    <nav aria-label="Menu seluler">
      ${NAV.map((n) => `<a class="drawer-link" href="${n.href}"${cur(n.id)}>${n.t}<small>${n.d}</small></a>`).join("")}
    </nav>
    <div class="drawer-social socials">${socialLinks()}</div>`;
  header.after(drawer);

  const menuBtn = $(".menu-btn", header);
  const setMenu = (open) => {
    document.body.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    drawer.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  menuBtn.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  window.addEventListener("resize", () => { if (window.innerWidth > 960) setMenu(false); });

  const tabbar = document.createElement("nav");
  tabbar.className = "tabbar"; tabbar.setAttribute("aria-label", "Navigasi cepat");
  const tabs = [
    { id: "home", href: "index.html", t: "Beranda", i: I.home },
    { id: "produk", href: "produk.html", t: "Produk", i: I.bag },
    { id: "cerita", href: "cerita.html", t: "Cerita", i: I.chat, main: true },
    { id: "onggok", href: "onggok.html", t: "Edukasi", i: I.leaf },
    { id: "legalitas", href: "legalitas.html", t: "Legal", i: I.shield }
  ];
  tabbar.innerHTML = tabs.map((t) => `<a href="${t.href}" class="${t.main ? "tab-main" : ""}"${cur(t.id)}>${t.i}<span>${t.t}</span></a>`).join("");
  document.body.append(tabbar);

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <svg class="footer-wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 60V30c120-20 240-30 360-20s240 30 360 30 240-20 360-30 240 0 360 20v30z"/></svg>
    <div class="container">
      <div class="footer-grid">
        <div>
          ${logo}
          <p>${esc(C.tagline)}. Keripik Tri-Crunch dari onggok (ampas singkong) — camilan renyah untuk ekonomi sirkular.</p>
          <div class="socials">${socialLinks()}</div>
        </div>
        <div>
          <h4>Jelajahi</h4>
          <ul>
            <li><a href="produk.html">Produk</a></li>
            <li><a href="onggok.html">Edukasi Onggok</a></li>
            <li><a href="onggok.html#funfact">Fun Fact Bahan</a></li>
            <li><a href="cerita.html">Cerita Konsumen</a></li>
          </ul>
        </div>
        <div>
          <h4>Informasi</h4>
          <ul>
            <li><a href="legalitas.html">Legalitas & Keamanan</a></li>
            <li><a href="kerja-sama.html">Kerja Sama</a></li>
            <li><a href="kerja-sama.html#reseller">Jadi Reseller</a></li>
            <li><a href="kontak.html">Kontak</a></li>
          </ul>
        </div>
        <div>
          <h4>Hubungi</h4>
          <ul>
            <li>${esc(C.location)}</li>
            ${C.instagram ? `<li><a href="${L.ig}" target="_blank" rel="noopener">@${esc(C.instagram)}</a></li>` : ""}
            ${C.whatsapp ? `<li><a href="${L.wa("Halo Radixava!")}" target="_blank" rel="noopener">WhatsApp</a></li>` : ""}
            ${C.email ? `<li><a href="mailto:${esc(C.email)}">${esc(C.email)}</a></li>` : ""}
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Tim Radixava • UPI Bumi Siliwangi, Bandung</span>
        <span>Dibuat dengan 🌱 untuk bumi</span>
      </div>
    </div>`;
  document.body.append(footer);

  if (C.whatsapp) {
    const waFab = document.createElement("a");
    waFab.className = "wa-fab";
    waFab.href = L.wa("Halo Radixava! Saya mau tanya soal produk.");
    waFab.target = "_blank"; waFab.rel = "noopener";
    waFab.setAttribute("aria-label", "Chat WhatsApp Radixava");
    waFab.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.44 9.44zm8.03-17.47A11.3 11.3 0 0 0 12.05.7C5.79.7.7 5.79.7 12.04c0 2 .52 3.95 1.52 5.67L.6 23.3l5.72-1.5a11.3 11.3 0 0 0 5.73 1.46h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02z"/></svg><span>Chat WA</span>';
    document.body.append(waFab);
  }

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------------- Toast ---------------- */
  const toastEl = document.createElement("div");
  toastEl.className = "toast"; toastEl.setAttribute("role", "status"); toastEl.setAttribute("aria-live", "polite");
  document.body.append(toastEl);
  let tt;
  const toast = (msg) => { toastEl.textContent = msg; toastEl.classList.add("show"); clearTimeout(tt); tt = setTimeout(() => toastEl.classList.remove("show"), 3200); };
  window.RXtoast = toast;

  /* Tautan yang belum diisi (WA/email/marketplace kosong) */
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-pending]");
    if (a) { e.preventDefault(); toast(a.dataset.pending || "Segera hadir — tautan sedang disiapkan tim kami."); }
  });

  /* ---------------- Reveal on scroll ---------------- */
  const io = "IntersectionObserver" in window ? new IntersectionObserver((ents) => {
    ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }) : null;
  const observe = (root = document) => $$(".reveal:not(.in)", root).forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
  window.RXobserve = observe;

  /* ---------------- Shared renderers ---------------- */
  const vStyle = (v) => `--c:${v.color};--cs:${v.soft};--cd:${v.deep}`;
  const productCard = (v, i = 0) => `
    <article class="p-card reveal" data-d="${i % 4}" style="${vStyle(v)}">
      ${v.soon ? '<span class="soon">Segera</span>' : ""}
      <div class="p-img"><img src="${IMG}${v.front}.webp" srcset="${IMG}${v.front}.webp 520w, ${IMG}${v.front}@2x.webp 1100w" sizes="(max-width:620px) 45vw, 25vw" alt="Kemasan Radixava ${esc(v.name)}" width="520" height="780" loading="lazy"></div>
      <div class="p-body">
        <span class="p-short">${esc(v.short)}</span>
        <h3><a class="stretched" href="varian.html?v=${v.slug}">${esc(v.name)}</a></h3>
        <p class="p-tag">${esc(v.tagline)}</p>
        <div class="p-foot"><span class="p-price">${esc(C.price)} <small>/ ${esc(C.netto)}</small></span><span class="go" aria-hidden="true">${I.arrow}</span></div>
      </div>
    </article>`;
  window.RXproductCard = productCard;

  $$("[data-products]").forEach((el) => {
    const lim = parseInt(el.dataset.products, 10) || RX.variants.length;
    el.innerHTML = RX.variants.slice(0, lim).map(productCard).join("");
  });

  $$("[data-socials]").forEach((el) => (el.innerHTML = socialLinks()));

  // Fun-fact flip cards (generic)
  const factCard = (f, color, label, i) => `
    <button type="button" class="fact reveal" data-d="${i % 3}" style="--c:${color}" aria-pressed="false">
      <span class="fact-inner">
        <span class="fact-face fact-front">
          <span class="q">${esc(label || "Tahukah kamu?")}</span>
          <h3>${esc(f.t)}</h3>
          <span class="hint">${I.flip} Ketuk untuk buka</span>
        </span>
        <span class="fact-face fact-back"><b>${esc(f.t)}</b><p>${esc(f.d)}</p></span>
      </span>
    </button>`;
  window.RXfactCard = factCard;
  document.addEventListener("click", (e) => {
    const f = e.target.closest(".fact");
    if (!f) return;
    const on = !f.classList.contains("is-flipped");
    f.classList.toggle("is-flipped", on);
    f.setAttribute("aria-pressed", String(on));
  });

  $$("[data-onggok-facts]").forEach((el) => {
    el.innerHTML = RX.onggok.facts.map((f, i) => factCard(f, "#2F6B2F", "Fakta Onggok", i)).join("");
  });

  // Circular flow
  $$("[data-flow]").forEach((el) => {
    el.innerHTML = RX.onggok.steps.map((s, i) => `
      <div class="flow-step reveal" data-d="${i % 4}"><div class="n">${s.n}</div><div><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></div></div>`).join("");
  });

  // Ingredient explorer (edukasi per varian)
  const explorer = $("[data-explorer]");
  if (explorer) {
    const list = $(".explorer-list", explorer);
    const panel = $(".explorer-panel", explorer);
    list.innerHTML = RX.variants.map((v, i) => `
      <button type="button" class="ex-btn" role="tab" id="ex-tab-${v.slug}" aria-controls="ex-panel" aria-selected="${i === 0}" style="--c:${v.color}" data-v="${v.slug}">
        <img src="${IMG}${v.front}.webp" alt="" width="46" height="46" loading="lazy">
        <span><b>${esc(v.hero)}</b><small>${esc(v.name)}</small></span>
      </button>`).join("");
    const show = (slug, focus) => {
      const v = vBySlug(slug);
      $$(".ex-btn", list).forEach((b) => b.setAttribute("aria-selected", String(b.dataset.v === slug)));
      panel.innerHTML = `
        <div class="ex-panel" id="ex-panel" role="tabpanel" aria-labelledby="ex-tab-${v.slug}" style="${vStyle(v)}">
          <div class="ex-head">
            <div>
              <span class="eyebrow" style="color:${v.color}">Bahan khas • ${esc(v.name)}</span>
              <p class="big">${esc(v.hero)}</p>
            </div>
          </div>
          <div class="ex-q"><span class="hand">${esc(v.question)}</span><p>${esc(v.answer)}</p></div>
          <div class="facts">${v.facts.map((f, i) => factCard(f, v.color, "Fun fact", i)).join("")}</div>
          <p style="margin:22px 0 0"><a class="link-arrow" style="color:${v.color}" href="varian.html?v=${v.slug}">Lihat produk ${esc(v.name)} ${I.arrow}</a></p>
        </div>`;
      $$(".reveal", panel).forEach((r) => r.classList.add("in"));
      if (focus) history.replaceState(null, "", "#bahan-" + slug);
    };
    list.addEventListener("click", (e) => { const b = e.target.closest(".ex-btn"); if (b) show(b.dataset.v, true); });
    list.addEventListener("keydown", (e) => {
      const btns = $$(".ex-btn", list); const i = btns.indexOf(document.activeElement);
      if (i < 0) return;
      const n = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
      if (!n) return; e.preventDefault();
      const nb = btns[(i + n + btns.length) % btns.length]; nb.focus(); show(nb.dataset.v, true);
    });
    const hash = location.hash.replace("#bahan-", "");
    show(vBySlug(hash) ? hash : RX.variants[0].slug, false);
  }

  // SDGs
  $$("[data-sdgs]").forEach((el) => {
    el.innerHTML = RX.onggok.sdgs.map((s, i) => `
      <div class="card reveal" data-d="${i}" style="border-top:6px solid ${s.c}">
        <div class="ico" style="background:${s.c};color:#fff;font-family:var(--font-display);font-weight:800;font-size:1.3rem">${s.n}</div>
        <h3>SDG ${s.n}</h3><p class="muted">${esc(s.t)}</p>
      </div>`).join("");
  });

  // Team
  $$("[data-team]").forEach((el) => {
    el.innerHTML = RX.team.map((m, i) => `
      <div class="card member reveal" data-d="${i}">
        <div class="ph">${esc(m.name.split(" ").map((w) => w[0]).slice(0, 2).join(""))}</div>
        <b>${esc(m.name)}</b><span>NIM ${esc(m.nim)}</span><br><span class="role">${esc(m.role)}</span>
      </div>`).join("");
  });

  // Legal
  const legalIcon = { nib: I.doc, pirt: I.shield, halal: I.moon, merek: I.tri, lab: I.flask, gizi: I.info };
  const stLabel = { ok: "Terdaftar", proses: "Dalam proses", rencana: "Direncanakan" };
  $$("[data-legal]").forEach((el) => {
    el.innerHTML = RX.legal.map((l, i) => `
      <article class="legal-card reveal" data-d="${i % 3}">
        <div class="top"><span class="seal">${legalIcon[l.k] || I.doc}</span><span class="status status--${l.status}">${stLabel[l.status]}</span></div>
        <h3>${esc(l.t)}</h3>
        <span class="by">Penerbit: ${esc(l.by)}</span>
        <p class="muted" style="margin:0;font-size:.92rem">${esc(l.d)}</p>
        <span class="num">${l.num ? "No. " + esc(l.num) : "Nomor: akan diumumkan"}</span>
      </article>`).join("");
  });

  // Contact list
  $$("[data-contacts]").forEach((el) => {
    const item = (href, ico, title, sub, pendingMsg) => href
      ? `<a class="contact-item" href="${href}" ${href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}><span class="ico">${ico}</span><span><b>${title}</b><small>${sub}</small></span><span class="arrow">${I.arrow}</span></a>`
      : `<a class="contact-item is-pending" href="#" data-pending="${pendingMsg}"><span class="ico">${ico}</span><span><b>${title}</b><small>Segera hadir</small></span><span class="arrow">${I.arrow}</span></a>`;
    el.innerHTML = [
      item(L.wa("Halo Radixava! Saya mau tanya soal produk."), I.wa, "WhatsApp", "Chat langsung dengan tim", "Nomor WhatsApp resmi sedang disiapkan. Sementara, DM Instagram kami ya!"),
      item(L.ig, I.ig, "Instagram", "@" + esc(C.instagram), ""),
      item(L.tt, I.tt, "TikTok", "@" + esc(C.tiktok), ""),
      item(L.mail("Halo Radixava"), I.mail, "Email", esc(C.email || ""), "Email resmi sedang disiapkan."),
      item(C.shopee, I.shop, "Shopee", "Belanja online", "Toko Shopee segera dibuka!"),
      item(C.tokopedia, I.store, "Tokopedia", "Belanja online", "Toko Tokopedia segera dibuka!"),
      `<div class="contact-item"><span class="ico">${I.pin}</span><span><b>Lokasi</b><small>${esc(C.location)}</small></span></div>`
    ].join("");
  });

  // Buy buttons (WA)
  $$("[data-buy]").forEach((a) => {
    const v = vBySlug(a.dataset.buy);
    const url = L.wa(`Halo Radixava! Saya mau pesan Tri-Crunch${v ? " varian " + v.name : ""}.`);
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
    else { a.href = L.ig || "#"; if (L.ig) { a.target = "_blank"; a.rel = "noopener"; } else a.dataset.pending = "Kanal pemesanan segera dibuka!"; }
  });

  /* ---------------- Marquee duplicate ---------------- */
  $$(".marquee-track").forEach((t) => (t.innerHTML += t.innerHTML));

  /* ---------------- Count up ---------------- */
  const countIO = "IntersectionObserver" in window ? new IntersectionObserver((ents) => {
    ents.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target; countIO.unobserve(el);
      const to = parseFloat(el.dataset.count); const dec = (el.dataset.count.split(".")[1] || "").length;
      const t0 = performance.now(); const dur = 1200;
      const tick = (t) => { const p = Math.min(1, (t - t0) / dur); el.textContent = (to * (1 - Math.pow(1 - p, 3))).toFixed(dec) + (el.dataset.suffix || ""); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 }) : null;
  $$("[data-count]").forEach((el) => (countIO ? countIO.observe(el) : (el.textContent = el.dataset.count + (el.dataset.suffix || ""))));

  // run page scripts registered before
  (window.RXpage || []).forEach((fn) => { try { fn({ $, $$, esc, I, L, RX, C, vBySlug, vStyle, productCard, factCard, toast, observe }); } catch (err) { console.error(err); } });
  observe();
})();
