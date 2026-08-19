# PRD — Landing Page (Dynamic Template)

Dokumen ini adalah referensi standar section untuk landing page, digunakan berdampingan dengan `design.md`. Tujuannya: setiap kali membuat landing page baru (jasa, produk, travel, umroh, atau pemerintahan/desa), tinggal pilih kategori di bawah lalu susun section sesuai urutan yang direkomendasikan.

---
## 0. Penulisan code harus mencapai SEO friendly
 - penggunaan tags yang mengkedepankan SEO
 - kompres image untuk peforma
 - rekomendasi penerapan lain untuk mencapai SEO hight

## 1. Global Requirements (berlaku di semua kategori)

### 1.1 Navigasi
- Navbar **fixed/sticky** di top viewport.
- Jumlah menu navbar = jumlah section yang dipakai di halaman (1 menu → 1 section).
- Klik menu → **smooth scroll** ke section terkait (anchor link + `scroll-behavior: smooth`, atau JS `scrollIntoView({behavior:'smooth'})`).
- Active state: menu ter-highlight otomatis sesuai section yang sedang terlihat di viewport (scrollspy, pakai `IntersectionObserver`).
- Mobile: navbar berubah jadi hamburger menu dengan drawer/dropdown.

### 1.2 Tema (Dark/Light Mode)
- Default mode: **Light**.
- Toggle switch (icon matahari/bulan) tersedia di navbar, biasanya di ujung kanan sebelum/sejajar CTA button.
- Preferensi tema disimpan di local state selama sesi (tidak wajib persist, opsional pakai localStorage kalau bukan di artifact Claude).
- Semua section wajib punya token warna untuk kedua mode (bukan cuma invert warna asal-asalan — tetap jaga kontras & keterbacaan).

### 1.3 Floating WhatsApp Button
- Posisi: **fixed, bottom-right**.
- Redirect ke `https://wa.me/62XXXXXXXXXX?text=...` (pesan pre-filled sesuai konteks halaman, misal "Halo, saya ingin tanya soal [nama layanan/paket]").
- Selalu terlihat (di atas semua konten, z-index tinggi), tapi tidak menutupi CTA penting di mobile.
- Opsional: tooltip singkat muncul saat idle beberapa detik ("Ada pertanyaan? Chat kami").

### 1.4 Scroll Reveal Effect
- Konten tiap section muncul perlahan (fade-in + slight translate-Y) saat section masuk viewport saat discroll.
- Gunakan `IntersectionObserver`, trigger sekali per elemen (tidak berulang saat scroll naik-turun, agar tidak mengganggu).
- Durasi animasi wajar: **250–400ms**, easing tegas (`cubic-bezier(0.16, 1, 0.3, 1)` atau `ease-out`) — jangan berlebihan/lebay, dan jangan terlalu lambat karena akan terkesan kurang profesional/kurang responsif.

### 1.5 Responsive & Mobile QA (WAJIB dicek tiap generate)

Landing page **wajib** dites tampilannya di lebar mobile (≤767px) sebelum dianggap selesai, bukan cuma di-generate lalu diasumsikan otomatis rapi. Checklist wajib:

- [ ] Section padding vertikal & horizontal memakai nilai mobile dari `design.md` 4.2, **bukan** nilai desktop yang diwariskan apa adanya.
- [ ] Tidak ada gap kosong berlebih antar elemen di mobile (indikasi umum: card/grid yang didesain 3-4 kolom di desktop tapi gap-nya tidak ikut mengecil saat berubah jadi 1 kolom).
- [ ] Heading & elemen besar pakai `clamp()` atau breakpoint font-size, bukan ukuran fixed yang sama dengan desktop.
- [ ] Hero section dicek khusus — pola signature (bento grid, split-screen, dsb) sering perlu layout berbeda total di mobile (misal split-screen desktop → stack vertikal di mobile), bukan sekadar di-scale mengecil.
- [ ] Floating WA button tidak menutupi CTA penting atau konten di layar kecil.
- [ ] Navbar berubah ke hamburger menu, tidak memaksakan semua menu tetap horizontal di layar sempit.

Kalau hasil generate masih terlihat ada gap janggal di mobile, cek dulu apakah komponen tersebut sudah mengikuti tabel responsive spacing di `design.md` 4.2 — kalau developer/AI generate tidak menyebutkan breakpoint sama sekali di CSS-nya, itu tandanya section tersebut kemungkinan besar sumber masalahnya.

### 1.6 Hero Section — Prinsip Signature

Hero adalah "tesis" halaman — satu-satunya tempat yang boleh dan sebaiknya diberi treatment berbeda dari section lain. Section lain (fitur, testimoni, FAQ, dst) tetap pakai layout standar (grid/list/card) supaya mudah dipahami; jangan disamaratakan "berani"-nya dengan hero, nanti halaman jadi berisik.

Hindari pola hero generik: headline besar center + subheadline + 2 tombol + gambar kanan/kiri. Pilih **satu** pola berikut sesuai karakter kategori & audiens (jangan campur banyak pola sekaligus):

| Pola | Deskripsi | Cocok untuk |
|------|-----------|--------------|
| Split-screen / diagonal-split | Layar dibagi teks vs visual, garis pembatas miring/asimetris | Jasa/produk modern, portofolio |
| Bento grid hero | Headline + beberapa kotak kecil (stat/fitur/foto) tersusun asimetris | Produk dengan banyak fitur/angka pencapaian |
| Kinetic typography | Huruf besar jadi elemen visual utama, muncul bertahap per kata saat load | Personal brand, agency kreatif |
| Editorial/masthead | Gaya majalah: garis tipis, label kecil di pojok, tipografi besar tapi rapi, minim treatment pada gambar | Travel, brand yang ingin kesan premium/curated tapi tenang |
| Cinematic Vignette Masthead | Foto full-bleed statis + overlay gradient bertingkat (vertical vignette gelap di atas-bawah, radial vignette di pinggir) yang menarik fokus ke subjek tengah; label kecil + headline besar center + accent color di satu kata kunci | Umroh/Haji, travel spiritual/religius, hospitality premium — momen di mana satu foto ikonik (co: Ka'bah, landmark) harus jadi pusat emosi |
| Mask-reveal | Gambar/video muncul dari balik bentuk (clip-path) yang membesar perlahan | Destinasi wisata, produk visual kuat |
| Parallax layered | Background, elemen tengah, foreground bergerak beda kecepatan saat scroll | Travel, storytelling perjalanan |
| Documentary/photojournalistic | Foto asli apa adanya jadi elemen utama, **tanpa** vignette berat, teks minim menumpang di atas | Desa/pemerintahan, NGO, konten yang butuh kesan jujur/otentik/tanpa polesan |
| Split-Text Line Reveal | Teks muncul per baris dari balik mask (`clip-path`/`overflow:hidden` + translateY), staggered halus antar baris — lebih tenang & elegan dibanding Kinetic Typography | Umroh (versi halus), Bisnis/Jasa premium, proyek yang butuh kesan "premium tapi tenang" |
| Cursor-Reactive Blob / Magnetic | Gradient blob mengikuti pergerakan mouse dengan delay/easing, CTA button magnetic saat di-hover | Produk digital, portofolio, agency kreatif |
| Color-Blocked Asymmetric | Blok warna solid besar dibagi asimetris (bukan 50/50 rapi), overlapping layer untuk kontras dinamis | Produk consumer/lifestyle, brand yang mau kesan energik/muda |
| Curiosity Peek | Elemen visual (produk/ilustrasi) cuma "mengintip" sebagian dari tepi layar, memancing rasa penasaran & dorongan scroll | Produk premium/eksklusif, portofolio minimalis |
| Depth Tilt (Mouse-Move Parallax) | Beberapa layer bergeser tipis dengan kecepatan berbeda mengikuti posisi cursor (bukan scroll) — ilusi kedalaman tanpa render 3D | Showcase produk, travel/destinasi yang mau kesan "hidup" |
| Cinematic Video/Loop Backdrop | Video pendek looping muted sebagai background, overlay duotone tipis hitam dramatis | Travel, Umroh (footage suasana ibadah/perjalanan yang tenang), hospitality |
| Interactive-Tool Hero | Hero berupa alat interaktif langsung (search bar, kalkulator harga, form cek jadwal) — bukan visual pasif | Travel/booking, Umroh (cek jadwal keberangkatan langsung) |

> - **Cinematic Vignette Masthead** vs **Editorial/masthead** — keduanya sama-sama "tenang & premium", tapi Editorial/masthead nyaris tanpa overlay (gambar terang, garis tipis jadi elemen utama), sedangkan Vignette Masthead sengaja menggelapkan gambar secara dramatis agar teks & subjek foto jadi fokus emosional.
> - **Cinematic Vignette Masthead** vs **Documentary/photojournalistic** — Vignette Masthead sengaja "dipoles" (overlay berat, tipografi besar-kontras); Documentary sengaja dibiarkan mentah/apa adanya, nyaris tanpa overlay.
> - **Cinematic Vignette Masthead** vs **Cinematic Video/Loop Backdrop** — beda medium: satu foto statis + gradient, satu lagi video loop + duotone. Pilih foto kalau butuh 1 momen ikonik yang kuat; pilih video kalau butuh suasana/gerakan.

**Cara memilih pola (14 pilihan di atas):** rekomendasi per kategori di setiap tabel section di bawah (baris Hero) adalah **titik awal/baseline**, bukan aturan kaku. AI agent wajib membaca brief proyek (tone yang diminta klien, karakter audiens, ada-tidaknya aset seperti video/foto berkualitas) sebelum memutuskan — kalau salah satu dari 14 pola di atas lebih cocok dengan tema/brief spesifik dibanding rekomendasi default kategori, pola itu boleh dipakai sebagai gantinya. Contoh: proyek Umroh biasanya direkomendasikan Mask-reveal, tapi kalau klien punya footage video suasana ibadah yang bagus, Cinematic Video/Loop Backdrop bisa jadi pilihan lebih kuat — tetap dalam koridor "tenang & khidmat" yang jadi prinsip kategori tersebut (lihat bagian 4).

**Aturan wajib kalau Hero tidak pakai foto/video (palet warna & tipografi saja):**

Beberapa pola di atas (Editorial/masthead, Cinematic Vignette Masthead, Mask-reveal, Parallax layered, Documentary, Cinematic Video Backdrop) **mengharuskan** ada foto/video sebagai elemen utama. Kalau brief/aset klien tidak menyediakan foto berkualitas — atau kategori proyek memang lebih cocok hero berbasis warna/tipografi (co: Bisnis/Jasa/SaaS-style) — AI **wajib** menambahkan **Abstract Geometric Watermark** sebagai pengisi ruang kosong, bukan membiarkan hero jadi flat/kosong begitu saja.

**Definisi:** bentuk geometris abstrak (potongan diagonal, lipatan sudut, blob organik, atau pecahan garis — sesuaikan dengan shape logo/identitas brand kalau ada) diletakkan di salah satu sisi hero (biasanya kanan atau belakang elemen visual utama seperti card/mockup), warna sangat pudar (tint dari warna brand di atas background, bukan abu-abu generik), tanpa mengganggu keterbacaan headline.

**Kapan wajib dipakai (fallback):**
- Hero tidak punya foto/video sama sekali (murni tipografi + warna + elemen UI seperti card/mockup produk).
- Kategori Bisnis/Jasa/Produk digital yang default heronya Split-screen atau Bento grid tapi tidak ada foto produk — watermark ini mengisi sisi yang "kosong" tersebut.

**Kapan TIDAK dipakai:**
- Hero yang sudah pakai foto/video full-bleed (Cinematic Vignette Masthead, Documentary, dst) — watermark geometris akan bentrok dengan foto, jangan ditumpuk.
- Kategori Umroh & Desa/Pemerintahan — kedua kategori ini secara prinsip *butuh* foto asli (dokumenter/khidmat), abstract watermark akan terasa terlalu "startup/tech" untuk konteksnya. Kalau memang tidak ada foto sama sekali untuk kategori ini, itu tanda brief belum lengkap — bukan alasan pakai watermark abstrak sebagai pengganti.

Token warna, opacity, dan bentuk detail (termasuk 3 varian shape reusable) ada di `design.md` bagian 6.2.2.

**Aturan wajib: satu pola, tidak boleh hybrid.** AI agent memilih **tepat satu** pola dari 14 pilihan di atas untuk satu Hero. **Dilarang** menggabungkan 2 nama pola sekaligus (misal menyebut "hybrid Mask-reveal + Split-Text Line Reveal") — itu melanggar prinsip "spend your boldness in one place" di bawah, dan biasanya jadi tanda AI tidak benar-benar membangun mekanisme pola manapun secara utuh, cuma menempelkan nama pola di ringkasan tanpa implementasi nyata.

**Aturan wajib: nama pola = mekanisme teknis yang benar-benar dibangun, bukan label kosong.** Tiap pola di tabel 1.6 punya mekanisme teknis spesifik di kolom Deskripsi — itu WAJIB benar-benar diimplementasikan di kode, bukan sekadar disebut nama polanya di laporan/ringkasan. Contoh konkret:
- **Mask-reveal** WAJIB ada `clip-path` (atau setara) berbentuk lengkung yang animasinya membesar dari kecil ke penuh saat load — foto statis di dalam rounded-rectangle biasa (radius sama di 4 sudut, tanpa animasi clip-path) **BUKAN** Mask-reveal, itu Split-screen/Editorial biasa meskipun AI menyebutnya "Mask-reveal".
- **Split-Text Line Reveal** WAJIB ada animasi per-baris teks muncul dari mask/translateY saat load — teks yang langsung tampil penuh tanpa animasi reveal apa pun **BUKAN** Split-Text Line Reveal.
- Pola lain mengikuti pola yang sama: cek kolom Deskripsi tabel 1.6, mekanisme yang disebutkan di situ WAJIB ada secara nyata di kode (CSS/JS-nya), bukan cuma di teks penjelasan.

Kalau AI melaporkan sudah memakai pola tertentu, verifikasi dengan bertanya balik "mekanisme teknisnya mana di kode?" — kalau tidak ada, berarti itu bukan pola tersebut, itu Hero generik yang diberi nama pola secara keliru.

Rekomendasi pola per kategori ada di setiap tabel section di bawah (baris Hero). Efek animasi hero cukup **satu momen terorkestrasi** (misal: page-load sequence), bukan tumpukan banyak efek sekaligus — sesuai prinsip "spend your boldness in one place". Ini juga berlaku untuk pola interaktif (Cursor-Reactive, Depth Tilt, Interactive-Tool) — jangan digabung 2 pola interaktif sekaligus dalam satu Hero, cukup satu bahasa interaksi yang jelas.

### 1.7 Section Highlight (Fokus Sekunder)

Selain Hero, AI agent boleh memilih **1–2 section lain** (tidak lebih) di tiap halaman untuk diberi treatment visual berbeda sebagai "fokus sekunder" — bagian yang ingin ditonjolkan karena penting untuk konversi atau kredibilitas, tapi tanpa harus seberani Hero.

**Kriteria pemilihan** (AI agent pilih berdasarkan konteks proyek, bukan asal pilih):
- Utamakan section yang paling berkontribusi ke keputusan (harga/paket, keunggulan/USP, jadwal/urgensi, CTA pendaftaran).
- Section dengan data/angka yang layak ditonjolkan (statistik, jumlah trip terlaksana, jumlah jamaah, dsb) juga kandidat kuat.
- Hindari memilih section yang sifatnya informatif netral (FAQ, galeri, footer) — kurang cocok untuk highlight karena tidak ada "keputusan" yang didorong di situ.

Rekomendasi per kategori (boleh disesuaikan sesuai kebutuhan klien spesifik):
- **Bisnis/Jasa**: Keunggulan, atau Paket & Harga
- **Travel**: Destinasi/Paket Populer, atau Harga Paket
- **Umroh**: Paket Umroh, atau Jadwal Keberangkatan (karena unsur urgensi)
- **Desa/Pemerintahan**: Potensi Desa, atau Data & Transparansi

**Aturan penerapan:**
- Maksimal **1–2 section** per halaman diberi treatment ini. Kalau lebih dari itu, efek "fokus" jadi hilang karena semua section mulai terlihat sama pentingnya.
- Treatment visual = background **gradient tipis/subtle**, bukan solid putih (light mode) dan bukan solid warna card gelap (dark mode). Detail token warna & opacity ada di `design.md` bagian 6.4.
- Section lain yang tidak dipilih tetap pakai background standar (`Primary`/`Secondary` sesuai `design.md` bagian 3) — supaya section yang di-highlight benar-benar terasa beda, bukan cuma variasi kecil yang tidak kerasa.
- Section Highlight ini terpisah dari Hero. Hero tetap pakai Hero Gradient penuh (`design.md` bagian 3, Gradien), sedangkan Section Highlight pakai versi gradient yang jauh lebih tipis — tujuannya membedakan dari section polos di sekitarnya, bukan bersaing dengan Hero.
- Wajib disesuaikan di kedua mode (light & dark) — lihat `design.md` 6.4 untuk token masing-masing.

### 1.8 Pemilihan Gaya Signature (Opsional, Sesuai Porsi)

Selain Section Highlight (1.7), ada satu paket gaya visual tambahan bernama **Editorial/Precision** (detail token di `design.md` bagian 9) — ciri khasnya: nomor index section besar, garis grid yang sengaja terlihat, icon line-art custom, dan border aksen pada card. Gaya ini **opsional**, bukan default wajib di semua proyek.

**Prinsip utama: profesional dan sesuai porsi dulu, baru kreatif.** AI agent wajib menilai kecocokan gaya ini terhadap brief/kategori proyek sebelum menerapkannya — jangan diterapkan otomatis hanya karena tersedia di design.md.

**Kapan cocok dipakai (penuh, 4 elemen sekaligus):**
- Bisnis/jasa dengan positioning teknis, modern, atau presisi (agency, konsultan, studio, produk digital/SaaS, portofolio).
- Brief klien secara eksplisit minta kesan "tegas", "profesional", "beda dari kompetitor", atau "modern minimalis".

**Kapan sebaiknya dipakai sebagian saja (pilih 1-2 elemen, bukan semua):**
- Travel/wisata yang lebih mengedepankan kesan editorial/majalah — index number section masih cocok (memperkuat kesan editorial), tapi grid lines & border aksen tebal bisa terasa terlalu "teknis"/dingin untuk konten yang harusnya terasa hangat/emosional.
- Proyek dengan Hero bergaya Kinetic typography atau Mask-reveal yang sudah punya kekuatan visual sendiri — cukup ambil 1 elemen signature (misal border aksen pada card) supaya tidak bersaing dengan Hero.

**Kapan sebaiknya di-skip sepenuhnya:**
- **Umroh** — butuh kesan tenang, khidmat, dan personal, bukan presisi/teknis ala studio kreatif. Grid lines & index number besar bisa terasa tidak pada tempatnya untuk konteks ibadah.
- **Desa/Pemerintahan** — butuh kesan hangat, jujur, dan dokumenter (sesuai prinsip Hero Documentary di 1.6), bukan gaya studio/teknis. Kalau ingin sedikit sentuhan presisi, cukup ambil border aksen tipis di card (elemen paling netral dari 4 elemen ini), bukan grid lines atau index number besar.

**Aturan tambahan:**
- Kalau dipakai, tetap ikuti prinsip "spend your boldness in one place" dari 1.6 — jangan digabung dengan Hero yang sudah sangat berani (misal Bento grid + Kinetic typography), supaya halaman tidak berisik.
- Wajib disesuaikan untuk mobile & dark mode sesuai token di `design.md` 9 — jangan cuma diterapkan versi desktop lalu diasumsikan otomatis rapi di layar kecil.
- Kalau ragu apakah proyek cocok, defaultnya adalah **tidak pakai** (skip) — gaya standar dari PRD/design.md yang sudah ada (section highlight, hero signature, dst) sudah cukup untuk tampil profesional tanpa risiko terasa dipaksakan.

### 1.9 Footer (semua kategori)
- Logo/nama brand + tagline singkat.
- Link cepat ke tiap section (mirror navbar).
- Kontak (WA, email, alamat jika relevan).
- Sosial media icon (jika ada).
- Copyright + tahun.

### 1.10 Card Contextual Watermark (Opsional)

Teknik tambahan untuk card yang butuh sedikit "isi" visual di background tanpa mengganggu keterbacaan konten (harga, badge, checklist) di atasnya — cocok untuk card paket/harga yang terasa terlalu kosong/flat kalau cuma warna solid.

**Definisi:** gambar relevan-konteks (skyline kota destinasi, siluet landmark, ilustrasi tema produk) ditempatkan sebagai layer background card dengan opacity sangat rendah (3–8%), biasanya di bagian bawah/pojok card, di belakang konten utama.

**Kapan cocok dipakai:**
- Card Paket/Harga (Travel, Umroh, Bisnis/Jasa) yang representasi destinasi/temanya bisa divisualkan lewat 1 elemen ikonik (skyline, landmark, siluet).
- Card yang kontennya padat teks/angka (harga, checklist fasilitas) sehingga butuh sedikit tekstur visual supaya tidak terasa terlalu "form/spreadsheet".

**Kapan TIDAK cocok:**
- Card testimoni, FAQ, atau card yang isinya kutipan personal — watermark bisa terasa mengganggu fokus ke suara personal jamaah/klien.
- Kategori Desa/Pemerintahan — prinsip dokumenter (foto asli, bukan ilustrasi/watermark dekoratif) lebih relevan; skip teknik ini kecuali watermark-nya berupa peta/logo resmi instansi.
- Jangan dipakai bersamaan dengan Signature Style Editorial/Precision (bagian 1.8) pada card yang sama — border aksen + grid lines + watermark sekaligus akan terasa penuh/berisik di satu card kecil.

**Aturan wajib:**
- Opacity watermark **3–8%** — di atas itu mulai mengganggu kontras teks, di bawah itu nyaris tidak kelihatan sama sekali (percuma dipasang).
- Posisi watermark **tidak boleh** menutupi area teks penting (harga, CTA button) — biasanya ditempatkan di bagian bawah card, gambar di-crop dari atas sehingga makin ke atas makin transparan/hilang.
- Gambar wajib **relevan dengan konten card** (bukan tekstur abstrak generik) — kalau tidak ada aset foto/ilustrasi yang relevan, lebih baik skip teknik ini daripada pakai stok foto acak.
- Wajib dicek kontras di kedua mode (light & dark) — watermark dark mode biasanya butuh opacity sedikit lebih tinggi (5–10%) karena background gelap cenderung "menelan" elemen transparan (prinsip sama seperti Section Highlight 1.7 & 6.4 di design.md).
- Mobile: kalau card menyempit drastis, pertimbangkan crop ulang posisi gambar (`background-position`) supaya bagian paling ikonik dari watermark tetap terlihat, bukan justru terpotong habis.

Token opacity & warna detail ada di `design.md` bagian 6.2.1.

### 1.11 Pricing / Comparison Card (Paket & Harga)

Untuk section harga/paket (lihat tabel kategori baris "Paket & Harga"/"Harga Paket"). Card comparison menampilkan beberapa opsi berdampingan agar user bisa membandingkan. Pilih **satu** gaya visual card di bawah (jangan campur 2 gaya dalam 1 section), sesuai karakter brand & brief — mirip prinsip "satu pola hero" di 1.6. Ini "ricing card" yang dipakai di section Tipe Rumah proyek Rumah Impian (KPR FLPP) sebagai bahan acuan gaya.

| Gaya | Deskripsi | Cocok untuk |
|------|-----------|-------------|
| Featured-glow (default) | Semua card netral, satu card (biasanya tengah/rekomendasi) di-highlight dengan border aksen + radial glow + shadow — menarik tanpa mengganggu card lain | Paket dengan opsi "terbaik/rekomendasi" yang ingin didorong |
| Equal-flat | Semua card sama rata, tanpa satupun di-highlight — murni perbandingan objektif | Konteks yang butuh kesan adil/netral |
| Tiered-emphasis | Tiap card punya warna aksen berbeda berdasarkan tier (basic=netral, reguler=primary, VIP=aksen emas) — hierarki lewat warna | Paket berjenjang jelas (Basic/Reguler/Premium) |
| Minimal-checklist | Card ramping: judul + harga + checklist + CTA, tanpa badge/deskripsi — scan cepat | Mobile-first / banyak opsi (5+) |

**Aturan wajib:**
- Featured card wajib cuma **satu** per grid — kalau >1 di-highlight, efek "fokus" hilang (sama seperti Section Highlight 1.7).
- `card__specs` wajib `flex: 1` (atau setara) supaya CTA sejajar di bawah meski jumlah fitur beda antar card.
- Harga selalu tampilkan `price-value` (besar) + `price-note` (catatan kecil, co: "DP mulai 1%") — angka utama tidak berdiri sendiri.
- Dark mode: warna teks harga/badge jangan `var(--primary)` teal gelap yang tak terlihat di bg gelap — override ke teal terang (lihat `design.md` 6.5).
- Mobile: grid 3 kolom → 1 kolom; featured card tidak perlu `scale()`, cukup pertahankan border + glow.

Detail token warna, glow, & dark mode ada di `design.md` bagian 6.5.

---

## 2. Kategori: Bisnis / Jasa / Produk (umum)

Cocok untuk: jasa profesional, agency, produk digital/fisik, personal brand.

| # | Section | Isi Utama |
|---|---------|-----------|
| 1 | Hero | **Baseline: Split-screen atau Bento grid.** Headline + CTA di satu sisi, visual produk/foto asli di sisi lain (split), atau headline dikombinasi kotak-kotak stat pencapaian (bento) jika ada angka yang layak dipamerkan. Kalau tidak ada foto produk, tambahkan Abstract Geometric Watermark (1.6) di sisi visual sebagai pengganti. *Alternatif kalau brief lebih cocok: Split-Text Line Reveal (kesan premium-tenang), Cursor-Reactive/Magnetic (agency/produk digital interaktif), atau Color-Blocked Asymmetric (brand energik) — lihat 1.6.* |
| 2 | Tentang | Penjelasan singkat siapa Anda/bisnis, value proposition |
| 3 | Layanan / Produk | Grid card — daftar layanan atau produk yang ditawarkan |
| 4 | Keunggulan | Kenapa pilih kami — 3-6 poin USP dengan icon |
| 5 | Cara Kerja | Alur/proses kerja (step 1-2-3), khususnya untuk jasa |
| 6 | Testimoni | Kutipan/rating klien, logo klien (jika B2B) |
| 7 | Paket & Harga | *(opsional)* Tabel/card perbandingan paket |
| 8 | FAQ | Pertanyaan umum seputar layanan/produk |
| 9 | CTA Akhir | Ajakan kontak/order, ditegaskan ulang |
| 10 | Footer | Sesuai 1.9 |

**Navbar menu:** Tentang · Layanan · Keunggulan · Testimoni · Harga · FAQ · Kontak

---

## 3. Kategori: Travel & Wisata (umum)

Cocok untuk: open trip, tour & travel, agen perjalanan domestik/luar negeri.

| # | Section | Isi Utama |
|---|---------|-----------|
| 1 | Hero | **Baseline: Editorial/masthead atau Parallax layered.** Foto destinasi unggulan dengan tipografi besar bergaya majalah perjalanan, atau layer foto bergerak beda kecepatan saat scroll untuk kesan depth/perjalanan. *Alternatif kalau brief lebih cocok: Cinematic Video/Loop Backdrop (kalau ada footage bagus), Interactive-Tool Hero (kalau ingin search/booking langsung di Hero), atau Depth Tilt (kesan destinasi "hidup") — lihat 1.6.* |
| 2 | Destinasi / Paket Populer | Grid card destinasi + harga mulai dari — pertimbangkan Card Contextual Watermark (1.10) pada card destinasi/paket |
| 3 | Kenapa Pilih Kami | Legalitas, pengalaman, jumlah trip terlaksana |
| 4 | Itinerary Contoh | Detail hari-per-hari salah satu paket unggulan |
| 5 | Fasilitas | Icon: transport, penginapan, makan, guide, dokumentasi |
| 6 | Galeri | Foto/video dokumentasi trip sebelumnya |
| 7 | Testimoni | Review peserta trip |
| 8 | Harga Paket | Tabel paket (basic/reguler/private) |
| 9 | FAQ | Soal pembayaran, refund, jadwal, dsb |
| 10 | CTA / Booking | Form atau tombol booking langsung |
| 11 | Footer | Sesuai 1.9 |

**Navbar menu:** Destinasi · Kenapa Kami · Itinerary · Galeri · Harga · FAQ · Booking

---

## 4. Kategori: Umroh & Perjalanan Religi

Cocok untuk: travel umroh/haji khusus. Trust & legalitas jadi prioritas tertinggi karena menyangkut dana besar & ibadah.

| # | Section | Isi Utama |
|---|---------|-----------|
| 1 | Hero | **Baseline: Recomendation** Visual islami/Ka'bah/Masjid Nabawi muncul perlahan dari balik bentuk lengkung, animasi tenang & khidmat — hindari efek yang terkesan main-main mengingat konteks ibadah. *Alternatif kalau brief lebih cocok: Split-Text Line Reveal, Cinematic Vignette Masthead (foto ikonik dengan overlay gradient dramatis-tenang), atau Cinematic Video/Loop Backdrop (kalau ada footage suasana ibadah yang tenang) — tetap wajib dalam koridor tenang & khidmat, hindari Cursor-Reactive/Color-Blocked/pola yang terkesan playful. Lihat 1.6.* |
| 2 | Legalitas | Izin PPIU Kemenag, no. izin resmi, keanggotaan asosiasi (wajib tampil jelas) |
| 3 | Paket Umroh | Reguler / Plus / VIP — durasi, hotel, harga. Pertimbangkan Card Contextual Watermark (1.10, co: siluet Ka'bah/Masjid Nabawi opacity rendah) pada card paket |
| 4 | Fasilitas | Hotel (jarak ke Masjidil Haram/Nabawi), pesawat, makan, muthawif/pembimbing |
| 5 | Jadwal Keberangkatan | Kalender/list tanggal keberangkatan terdekat |
| 6 | Testimoni Jamaah | Review + foto jamaah sebelumnya |
| 7 | Galeri Dokumentasi | Foto/video kegiatan manasik & perjalanan |
| 8 | Syarat & Cara Daftar | Dokumen yang dibutuhkan, alur pendaftaran |
| 9 | FAQ | Biaya, cicilan, refund, syarat kesehatan, dsb |
| 10 | CTA Pendaftaran | Form/kontak langsung pendaftaran |
| 11 | Footer | Sesuai 1.9 + wajib cantumkan legalitas ulang |

**Navbar menu:** Legalitas · Paket · Fasilitas · Jadwal · Testimoni · Syarat & Daftar · FAQ · Daftar

---

## 5. Kategori: Pemerintahan / Desa

Cocok untuk: website profil desa, kelurahan, atau instansi pemerintah tingkat lokal. Fokus pada transparansi & informasi publik, bukan konversi penjualan.

| # | Section | Isi Utama |
|---|---------|-----------|
| 1 | Hero | **Baseline: Documentary/photojournalistic.** Foto asli suasana desa apa adanya (warga, alam, aktivitas nyata — bukan foto stok/ilustrasi generik) jadi elemen utama, teks nama desa & tagline menumpang minim di atasnya. Kesan jujur & otentik lebih penting daripada "wow". *Alternatif terbatas: Cinematic Video/Loop Backdrop kalau ada footage dokumenter yang bagus. Hindari pola yang terkesan "dibuat-buat"/komersial (Cursor-Reactive, Color-Blocked, Curiosity Peek, Abstract Geometric Watermark) — situs resmi butuh kesan jujur, bukan menjual. Lihat 1.6.* |
| 2 | Profil Desa | Sejarah singkat, visi & misi, letak geografis |
| 3 | Struktur Pemerintahan | Kepala desa & perangkat — card/org chart dengan foto & jabatan |
| 4 | Potensi Desa | UMKM unggulan, produk lokal, destinasi wisata desa (jika ada) |
| 5 | Berita & Kegiatan | Feed berita/agenda kegiatan desa terbaru |
| 6 | Data & Transparansi | Statistik demografi, ringkasan APBDes, infografis |
| 7 | Layanan Publik | Info layanan administrasi (surat-menyurat, jam operasional, syarat) |
| 8 | Galeri | Foto kegiatan & fasilitas desa |
| 9 | Kontak & Lokasi | Alamat kantor desa, jam layanan, peta (embed) |
| 10 | Footer | Sesuai 1.9, tanpa perlu tagline "brand", ganti dengan nama resmi instansi |

**Navbar menu:** Profil · Struktur · Potensi Desa · Berita · Transparansi · Layanan · Galeri · Kontak

> Catatan: kategori ini biasanya **tidak butuh** floating WA button ke nomor pribadi — ganti dengan WA resmi kantor desa/layanan pengaduan, atau bisa dihilangkan jika tidak relevan.
>
> Untuk Section Highlight (1.7), gunakan lebih hemat di kategori ini (cukup 0-1 section) — situs resmi pemerintahan/desa lebih membutuhkan kesan tenang & merata daripada banyak titik fokus.
>
> Card Contextual Watermark (1.10) sebaiknya **di-skip** di kategori ini kecuali watermark berupa peta/logo resmi instansi — foto ilustratif dekoratif kurang sesuai prinsip dokumenter/jujur yang dipegang kategori ini.

---

## 6. Cara Pakai Dokumen Ini

1. Tentukan kategori landing page yang akan dibuat.
2. Ambil daftar section dari tabel kategori terkait — boleh tambah/kurangi sesuai kebutuhan klien spesifik.
3. Jumlah menu navbar mengikuti jumlah section final yang dipakai.
4. Semua section otomatis mengikuti Global Requirements di bagian 1 (navbar smooth scroll, dark/light mode, WA button, scroll reveal, section highlight) kecuali dicatat lain di kategori (contoh: kategori Desa).
5. Pilih 1-2 section (di luar Hero) untuk dijadikan Section Highlight sesuai kriteria 1.7.
6. Nilai kecocokan Gaya Signature Editorial/Precision sesuai kriteria 1.8 — pakai penuh, sebagian, atau skip. Default kalau ragu: **skip**.
7. Untuk Hero: pilih 1 pola dari 1.6. Kalau tidak ada foto/video yang layak, wajib tambahkan Abstract Geometric Watermark (1.6, detail token di design.md 6.2.2) sebagai pengganti, kecuali kategori Umroh/Desa (butuh foto asli, bukan watermark).
8. Untuk card paket/harga (Travel, Umroh, Bisnis/Jasa), pertimbangkan Card Contextual Watermark (1.10, detail token di design.md 6.2.1) kalau ada aset foto/ilustrasi relevan yang bisa dipakai. Untuk gaya visual card-nya sendiri (featured-glow, equal-flat, tiered-emphasis, minimal-checklist), lihat 1.11.
9. Kombinasikan dengan `design.md` untuk detail visual (warna, tipografi, spacing, token gradient highlight, token signature style di bagian 9).
10. Semua ini adalah standart agar design dan flow konsisten bukan suatu kemutlakan, segala bentuk explorasi untuk kepentingan UX/UI dipersilahkan.

---

*Dokumen ini bersifat living document — tambahkan kategori baru atau section baru sesuai kebutuhan proyek berikutnya.*