/* =========================================================
   RADIXAVA — DATA & KONFIGURASI
   Semua teks/konten utama ada di sini supaya gampang diedit.
   Bagian bertanda  TODO  = isi dengan data asli tim.
   ========================================================= */

window.RX = {
  config: {
    brand: "Radixava",
    tagline: "Camilan Lezat, Langkah Nyata untuk Bumi",
    instagram: "radixava_upi",          // dari kemasan
    tiktok: "radixava_upi",             // dari kemasan
    whatsapp: "6289652388905",          // 0896-5238-8905 (format 62, tanpa + / spasi)
    email: "",                          // TODO: contoh "radixava.upi@gmail.com"
    shopee: "",                         // TODO: link toko Shopee
    tokopedia: "",                      // TODO: link toko Tokopedia
    location: "Bandung, Jawa Barat — UPI Bumi Siliwangi",
    price: "Rp8.000",
    netto: "100 g",

    // OPSIONAL: URL Web App Google Apps Script supaya cerita konsumen
    // tersimpan ke Google Sheets (lihat file google-apps-script.gs).
    // Kalau kosong, cerita disimpan di browser (localStorage) saja.
    storyEndpoint: "",

    // Tampilkan kartu contoh di dinding cerita (berlabel "Contoh").
    // Set false kalau sudah ada cerita asli.
    showSampleStories: true
  },

  variants: [
    {
      slug: "singkong-crunch",
      name: "Singkong Crunch",
      short: "Original",
      tagline: "Gurih rempah dari bumbu pilihan",
      color: "#B8732A", deep: "#7A4A18", soft: "#F6E2C6",
      front: "front-singkong-crunch", back: "back-singkong-crunch",
      taste: ["Gurih", "Rempah", "Original"],
      desc: "Keripik Tri-Crunch berbahan onggok dengan cita rasa gurih rempah dari bumbu pilihan. Gurihnya alami dan lezat — varian paling jujur untuk kenalan sama rasa asli singkong.",
      composition: "Tepung terigu, tepung onggok, tepung tapioka, minyak nabati, air, telur, perisa ayam, lada, dan garam.",
      allergen: "Mengandung gluten (terigu) dan telur.",
      hero: "Singkong",
      question: "Kok bisa ampas singkong jadi keripik serenyah ini?",
      answer: "Onggok yang tadinya ampas basah dipres, dikeringkan terkontrol, digiling, lalu diayak jadi tepung halus. Tepung onggok ini dicampur tepung terigu dan tapioka, sehingga adonannya tetap kalis, bisa dicetak tipis berbentuk segitiga, dan renyah saat digoreng.",
      facts: [
        { t: "Singkong itu pendatang", d: "Singkong (Manihot esculenta) aslinya berasal dari Amerika Selatan. Sekarang Indonesia termasuk salah satu produsen singkong terbesar di dunia." },
        { t: "Akarnya yang dimakan", d: "Bagian singkong yang kita olah adalah umbi akarnya. Nama Radixava sendiri terinspirasi dari “radix” (bahasa Latin: akar) + cassava." },
        { t: "Kenapa harus diuji HCN?", d: "Singkong secara alami mengandung senyawa sianogenik (linamarin). Pengeringan dan pengolahan yang benar menurunkannya — makanya Radixava merencanakan uji kadar HCN secara berkala." }
      ]
    },
    {
      slug: "purple-savory",
      name: "Purple Savory",
      short: "Ubi Ungu",
      tagline: "Ungu yang Beda, Gurihnya Juara!",
      color: "#7A2A8C", deep: "#4E1660", soft: "#EEDDF3",
      front: "front-purple-savory", back: "back-purple-savory",
      taste: ["Gurih legit", "Ubi ungu", "Warna alami"],
      desc: "Keripik Tri-Crunch berbahan onggok dengan cita rasa gurih legit dari ubi ungu. Warna ungunya alami — tanpa pewarna buatan.",
      composition: "Tepung terigu, tepung onggok, tepung tapioka, minyak nabati, air, ubi ungu, telur, perisa ayam, lada, dan garam.",
      allergen: "Mengandung gluten (terigu) dan telur.",
      hero: "Ubi Ungu",
      question: "Warna ungunya punya rahasia alami, lho!",
      answer: "Warna ungu berasal dari antosianin, pigmen alami di ubi ungu. Antosianin termasuk senyawa yang sensitif terhadap pH: di suasana asam cenderung lebih kemerahan, di suasana basa bisa bergeser ke biru-kehijauan. Jadi ungunya bukan dari pewarna — ini warna asli dari alam.",
      facts: [
        { t: "Pigmen yang bisa “berubah”", d: "Antosianin bisa berubah warna tergantung tingkat keasaman. Coba teteskan perasan jeruk ke air rebusan ubi ungu — warnanya bergeser!" },
        { t: "Antioksidan alami", d: "Antosianin dikenal sebagai senyawa antioksidan, sama seperti pigmen pada buah berry dan kubis ungu." },
        { t: "Tanpa pewarna buatan", d: "Seluruh warna ungu pada varian ini datang dari bahan, sesuai klaim “Tanpa Pewarna Buatan” di kemasan." }
      ]
    },
    {
      slug: "golden-herb",
      name: "Golden Herb",
      short: "Labu & Peterseli",
      tagline: "Gurih Rempah, Mood Makin Cerah!",
      color: "#E8761A", deep: "#A44C08", soft: "#FCE6CC",
      front: "front-golden-herb", back: "back-golden-herb",
      taste: ["Gurih rempah", "Labu kuning", "Herby"],
      desc: "Keripik Tri-Crunch berbahan onggok dengan cita rasa gurih rempah dari labu kuning dan peterseli. Rasanya akrab dan lezat, cocok buat nemenin waktu santai.",
      composition: "Tepung terigu, tepung onggok, tepung tapioka, minyak nabati, air, labu kuning, peterseli, telur, perisa ayam, lada, dan garam.",
      allergen: "Mengandung gluten (terigu) dan telur.",
      hero: "Labu Kuning",
      question: "Psst, keripik ini dibuat dari ampas singkong, lho!",
      answer: "Bahan utamanya adalah onggok — ampas padat sisa ekstraksi pati di pabrik tapioka. Daripada terbuang dan mencemari lingkungan, Radixava mengolahnya jadi tepung, lalu dipadukan dengan labu kuning dan peterseli supaya warnanya cerah dan aromanya segar.",
      facts: [
        { t: "Oranye = beta-karoten", d: "Warna oranye labu kuning berasal dari beta-karoten, senyawa yang oleh tubuh bisa diubah menjadi vitamin A." },
        { t: "Labu itu buah", d: "Secara botani, labu kuning termasuk buah karena berkembang dari bunga dan menyimpan biji." },
        { t: "Peterseli bukan cuma hiasan", d: "Daun peterseli menyumbang aroma segar khas herba dan dikenal kaya vitamin K serta vitamin C." }
      ]
    },
    {
      slug: "brown-aren",
      name: "Brown Aren",
      short: "Gula Aren & Cokelat",
      tagline: "Manis Aren, Kriuknya Bikin Senang!",
      color: "#6B3A20", deep: "#45220F", soft: "#F1E0D2",
      front: "front-brown-aren", back: "back-brown-aren",
      taste: ["Manis legit", "Gula aren", "Cokelat"],
      desc: "Keripik Tri-Crunch berbahan onggok yang memadukan manis gula aren dan sentuhan cokelat. Rasanya akrab dan legit, pas buat yang lagi pengen ngemil manis.",
      composition: "Tepung terigu, tepung onggok, tepung tapioka, minyak nabati, air, gula aren, cokelat, telur, dan garam.",
      allergen: "Mengandung gluten (terigu) dan telur.",
      hero: "Gula Aren",
      question: "Tahu dari mana gula aren mendapatkan rasa manisnya?",
      answer: "Gula aren dibuat dari nira — cairan manis yang disadap dari tangkai bunga pohon aren (Arenga pinnata). Nira dimasak lama sampai airnya menguap dan gulanya mengental. Selama pemanasan terjadi karamelisasi dan reaksi Maillard, yang menghasilkan warna cokelat dan aroma karamel khas gula aren.",
      facts: [
        { t: "Dari pohon, bukan tebu", d: "Berbeda dari gula pasir (tebu), gula aren berasal dari nira pohon aren yang disadap petani setiap hari." },
        { t: "Aroma karamel alami", d: "Aroma “smoky-karamel” gula aren muncul dari proses pemanasan nira yang lama, bukan dari perisa tambahan." },
        { t: "Cokelat itu hasil fermentasi", d: "Biji kakao harus difermentasi dan disangrai dulu sebelum aroma cokelatnya muncul." }
      ]
    },
    {
      slug: "seaweed",
      name: "Seaweed Umami",
      short: "Rumput Laut & Wijen",
      tagline: "Umami-nya datang dari laut",
      color: "#2E7D3E", deep: "#1B4D26", soft: "#DCEFD9",
      front: "back-seaweed", back: "back-seaweed",
      taste: ["Umami", "Rumput laut", "Wijen"],
      soon: true,
      desc: "Keripik Tri-Crunch berbahan onggok dengan cita rasa gurih umami dari rumput laut dan wijen. Rasanya akrab dan lezat, cocok buat nemenin waktu santai.",
      composition: "Tepung terigu, tepung onggok, tepung tapioka, minyak nabati, air, rumput laut, wijen, telur, perisa ayam, lada, dan garam.",
      allergen: "Mengandung gluten (terigu), telur, dan wijen.",
      hero: "Rumput Laut",
      question: "Umami-nya datang dari laut. Kenapa rasanya bikin nagih?",
      answer: "Rumput laut secara alami mengandung asam glutamat bebas — senyawa yang memberi rasa umami (gurih “dalam”). Rasa umami bahkan pertama kali diidentifikasi tahun 1908 oleh ilmuwan Jepang Kikunae Ikeda dari kaldu rumput laut kombu. Ditambah wijen sangrai, rasanya jadi gurih, harum, dan bikin pengen nambah.",
      facts: [
        { t: "Umami = rasa dasar ke-5", d: "Selain manis, asin, asam, dan pahit, lidah kita punya reseptor khusus untuk umami (glutamat)." },
        { t: "Indonesia raja rumput laut", d: "Indonesia termasuk produsen rumput laut terbesar di dunia, terutama jenis Eucheuma dan Gracilaria." },
        { t: "Wijen kecil tapi wangi", d: "Aroma kacang khas wijen makin keluar saat disangrai karena reaksi pemanasan pada minyak dan proteinnya." }
      ]
    }
  ],

  // Edukasi Onggok
  onggok: {
    steps: [
      { n: "01", t: "Singkong dipanen", d: "Singkong segar dari petani dikirim ke pabrik tapioka." },
      { n: "02", t: "Pati diekstraksi", d: "Singkong diparut dan disaring. Patinya jadi tepung tapioka." },
      { n: "03", t: "Onggok tersisa", d: "Ampas padat yang tertinggal — onggok — biasanya bernilai rendah atau terbuang." },
      { n: "04", t: "Diolah Radixava", d: "Sortasi, pengepresan, pengeringan terkontrol, penggilingan, dan pengayakan jadi tepung." },
      { n: "05", t: "Jadi Tri-Crunch", d: "Tepung onggok (formulasi 10–30%) dicetak segitiga, digoreng, dikemas, dan dicatat per batch." }
    ],
    facts: [
      { t: "Onggok itu apa?", d: "Onggok adalah ampas padat hasil samping industri tepung tapioka, setelah pati singkong diekstraksi." },
      { t: "Kaya serat", d: "Onggok masih mengandung sisa pati dan serat pangan yang cukup tinggi — sayang kalau cuma dibuang." },
      { t: "Cepat basi kalau dibiarkan", d: "Onggok basah berkadar air tinggi sehingga mudah asam dan berbau. Penumpukan onggok bisa jadi masalah lingkungan di sekitar pabrik." },
      { t: "Diuji sebelum dipakai", d: "Bahan Radixava melewati pengeringan terkontrol dan direncanakan diuji lab (sianogenik/HCN & mikroba) sebelum produksi." },
      { t: "Mitra lokal", d: "Onggok berasal dari pabrik tapioka mitra di Leuwigajah (Cimahi Selatan) dan Sumurbandung (Cipatat, Bandung Barat)." },
      { t: "Dicatat per batch", d: "Dampak sirkular dicatat per batch: berapa kg onggok yang terserap menjadi produk jadi." }
    ],
    sdgs: [
      { n: 8, t: "Pekerjaan Layak & Pertumbuhan Ekonomi", c: "#A21942" },
      { n: 9, t: "Industri, Inovasi & Infrastruktur", c: "#FD6925" },
      { n: 12, t: "Konsumsi & Produksi yang Bertanggung Jawab", c: "#BF8B2E" }
    ]
  },

  // Legalitas — status: "ok" | "proses" | "rencana". Isi "num" kalau nomor sudah terbit.
  legal: [
    { k: "nib", t: "NIB (Nomor Induk Berusaha)", by: "OSS RBA", status: "proses", num: "", d: "Identitas resmi pelaku usaha yang terdaftar di sistem OSS." },
    { k: "pirt", t: "SPP-IRT / P-IRT", by: "Dinas Kesehatan / OSS", status: "proses", num: "", d: "Izin edar pangan olahan industri rumah tangga." },
    { k: "halal", t: "Sertifikat Halal", by: "BPJPH Kemenag", status: "proses", num: "", d: "Kemasan saat ini mencantumkan: Halal — dalam proses sertifikasi." },
    { k: "merek", t: "Pendaftaran Merek", by: "DJKI Kemenkumham", status: "rencana", num: "", d: "Perlindungan merek RADIXAVA & Tri-Crunch." },
    { k: "lab", t: "Uji Lab Keamanan Pangan", by: "Laboratorium uji", status: "proses", num: "", d: "Uji kadar HCN (sianogenik) dan mikrobiologi bahan & produk." },
    { k: "gizi", t: "Informasi Nilai Gizi", by: "Laboratorium uji", status: "proses", num: "", d: "Tabel gizi per 100 g sedang dalam proses uji laboratorium." }
  ],

  team: [
    { name: "Wildan Abdul Hakim", role: "CEO", nim: "2500170" },
    { name: "Putri Nurhasanah", role: "CFO", nim: "2406959" },
    { name: "Nadira Nurdiani", role: "CMO", nim: "2521303" }
  ],

  // Contoh tampilan dinding cerita (BUKAN data asli — diberi label "Contoh")
  sampleStories: [
    { name: "Contoh • Mahasiswa", city: "Bandung", variant: "purple-savory", rating: 5, crunch: 5, again: "ya", price: "pas", mood: "🤩", tags: ["Renyah", "Gurih pas"], text: "Ini contoh tampilan cerita konsumen. Cerita asli dari pembeli akan muncul di sini setelah mereka scan QR dan mengisi form.", sample: true, date: "2026-11-01" },
    { name: "Contoh • Pekerja muda", city: "Cimahi", variant: "brown-aren", rating: 4, crunch: 4, again: "mungkin", price: "pas", mood: "😋", tags: ["Manis", "Cocok buat ngopi"], text: "Contoh: suka manis aren-nya, pengen ada ukuran yang lebih besar buat stok di kantor.", sample: true, date: "2026-11-03" },
    { name: "Contoh • Reseller", city: "Bandung Barat", variant: "golden-herb", rating: 5, crunch: 4, again: "ya", price: "murah", mood: "🥰", tags: ["Aromanya enak", "Unik"], text: "Contoh: teman-teman kaget waktu tahu keripiknya dari ampas singkong.", sample: true, date: "2026-11-05" }
  ]
};
