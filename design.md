# Design System: [Nama Studio/Brand Anda] (Modern, Colorful, Minimalist)

Dokumen ini adalah design system **reusable** — dipakai konsisten di semua proyek klien (bisnis/jasa, travel, umroh, desa), berdampingan dengan `PRD.md` (struktur) dan `brief.md` (konten per proyek). Tema mengedepankan gaya **Modern, Colorful, dan Minimalist** dengan sentuhan **Glassmorphism** dan **animasi interaktif**.

---

## 1. Konsep Utama (Core Concept)
- **Modern & Clean**: Whitespace luas, border radius membulat (rounded), tata letak rapi.
- **Colorful & Vibrant, tapi Grounded**: Warna hidup namun bertumpu pada satu keluarga hue, bukan gradasi pelangi generik — supaya tetap terasa "dipilih", bukan "default".
- **Glassmorphism**: Efek tembus pandang (backdrop-blur) pada elemen mengambang (search card, badge) untuk kesan kedalaman.
- **Motion & Interaction**: Parallax scroll, transisi mulus, staggered reveal.

---

## 2. Tipografi (Typography)
- **Primary Font**: `Plus Jakarta Sans` (Google Fonts)
- **Karakteristik**: Bersih, geometris, modern, mudah dibaca di layar besar maupun kecil.
- **Weights**:
  - `400` (Regular) — Body text & deskripsi
  - `500` (Medium) — Label, input, teks sekunder
  - `600` (Semi-bold) — Sub-judul, tombol, meta data
  - `700` (Bold) — Judul kartu & heading bagian
  - `800` (Extra-bold) — Judul utama (Hero title) & angka statistik

---

## 3. Palet Warna (Color Palette)

Mendukung **Light Mode** dan **Dark Mode** secara native.

### Warna Aksen (Accent Colors) Default/Sebagai contoh (Jangan gunakan jika color diatur client)
- **Primary (Emerald)**: `#0E6E55` (Hover: `#0B5943`) -> ini warna default saja.
- **Primary Bright (Jade)**: `#16A374` — dipakai untuk elemen interaktif & highlight
- **Secondary (Gold)**: `#C9962F` (Hover: `#B8842A`) — pengganti peran "cyan" sebelumnya, dipakai untuk aksen premium/CTA sekunder
- **Warm (Terracotta muted)**: `#B5633A` — dipakai sangat terbatas, untuk badge/label kecil yang butuh kontras hangat
- **Emerald/Success**: `#16A374` (sama dengan Primary Bright — konsisten, tidak perlu warna sukses terpisah)
- **Danger**: `#D64550` (rose-red netral, tidak terlalu vibrant)
- **WhatsApp Brand**: `#25D366` (tetap — warna resmi platform, dan secara kebetulan selaras dengan keluarga hijau)

## 3.1 Aturan
  - jika user sudah mendefinisikan pada brief.md berpatokan pada disana ini hanya default dan contoh.

### Gradien (Gradients)
- **Hero Gradient**: `linear-gradient(135deg, #06231C 0%, #0B4536 35%, #0E6E55 65%, #16A374 85%, #C9962F 100%)` — dari hijau hutan gelap ke emerald lalu pendar gold, kesan premium & alami, bukan gradasi "tech dashboard". *(Ini contoh/default studio kalau tidak ada warna inti khusus dari klien — kalau proyek punya warna inti sendiri, ikuti aturan derivasi di bawah, JANGAN sekadar rotasi hue dari template ini.)*
- **Accent Gradient**: `linear-gradient(135deg, #0E6E55, #C9962F)` — dipakai pada tombol utama & icon.
- **Warm Gradient**: `linear-gradient(135deg, #C9962F, #B5633A)` — dipakai untuk elemen promosi/highlight terbatas.
- **Mesh/Aura Gradient**: Kombinasi radial-gradient (Emerald, Jade, Gold) transparan untuk background section — ganti radial Indigo/Cyan/Rose sebelumnya.

### Aturan Derivasi Gradient dari Warna Inti (Custom per Proyek)

Kalau proyek punya **warna inti sendiri dari klien** (bukan default Emerald/Gold di atas), gradient wajib diturunkan pakai aturan ini — supaya hasilnya tetap terlihat "dipilih dengan sengaja", bukan gradient pelangi yang norak.

**Kenapa hijau → kuning → oranye terlihat norak:** itu melompat >90-100° di roda warna, melewati 3 hue yang beda drastis dalam satu gradient. Ini pola khas "gradient generator default", bukan brand color yang disengaja.

**Metode default (paling aman — pakai ini kecuali ada alasan kuat untuk metode lain): Tonal/Monokromatik**
- Ambil **1 hue saja** dari warna inti klien (H tetap, tidak berubah).
- Variasikan hanya *lightness* (boleh sedikit *saturation*), 3 stop:
  - Stop gelap: Lightness ~12–18%
  - Stop tengah (≈ warna inti asli klien): Lightness ~32–40%
  - Stop terang: Lightness ~55–65%
- Saturation di stop gelap & terang boleh diturunkan 5-10% dari stop tengah, supaya ujung gradient tidak terasa neon.
- Contoh: warna inti hijau `#0E6E55` (Hue ≈165°) → gradient jadi hijau tua pekat → hijau inti → hijau muda lembut. **Tidak** melompat ke kuning/oranye sama sekali.

**Kalau tetap ingin 2 hue (bukan monokrom):**
- Maksimal geser **20–30°** di roda warna dari hue asli (analogous) — misal hijau (165°) → teal (145°) atau hijau kekuningan sangat tipis (185°).
- **Dilarang** loncat ke hue yang jaraknya >60° dari warna inti (contoh: hijau 165° → kuning 50° itu >100°, jelas terlalu jauh) — ini sumber kesan "norak"/rainbow yang dikeluhkan.

**Warna aksen sekunder (peran seperti Gold di palet default) — posisinya beda, bukan endpoint gradient full-bleed:**
- Dipakai sebagai aksen kecil saja: border tipis, icon, badge, CTA sekunder — solid color atau gradient pendek 2-stop di elemen kecil, **bukan** disapukan ke seluruh background Hero.
- Kalau klien memang ingin kontras jauh dari warna inti (misal hijau + gold), pakai **duotone terbatas**: 2 warna jauh boleh, tapi tanpa banyak stop transisi kasar di antaranya, dan salah satu warna harus jelas dominan (misal 85% hijau, 15% gold sebagai aksen) — bukan dibagi rata 33/33/33 yang bikin kesan pelangi.


### Background Colors
- **Light Mode**:
  - Primary (Body): `#FFFFFF`
  - Secondary (Section alt): `#F6F8F6` *(sedikit rona hijau netral, bukan abu-biru generik)*
  - Cards: `#FFFFFF`
  - Glass: `rgba(14, 110, 85, 0.08)` (tint emerald, dengan blur)
- **Dark Mode**:
  - Primary (Body): `#0B140F` *(hijau-gelap, bukan navy generik)*
  - Secondary (Section alt): `#121E17`
  - Cards: `#17251D`
  - Glass: `rgba(201, 150, 47, 0.08)` (tint gold, dengan blur)

### Label / Text Colors (Light Mode)
- **Primary**: `rgba(9, 20, 15, 0.92)`
- **Secondary**: `rgba(9, 20, 15, 0.62)`
- **Tertiary**: `rgba(9, 20, 15, 0.45)`

---

## 4. Spacing & Sizing (Tata Ruang)

Kelipatan **8px** (8pt grid system) — nilai berikut adalah nilai **desktop (≥1024px)**:
- `--space-4`: 4px
- `--space-8`: 8px
- `--space-16`: 16px
- `--space-24`: 24px (Standar gap antar elemen)
- `--space-32`: 32px
- `--space-48`: 48px
- `--space-64`: 64px
- `--space-80`: 80px (Padding vertikal utama section)

**Max Width Container**: `1200px`

### 4.1 Breakpoints
- **Desktop**: ≥ 1024px
- **Tablet**: 768px – 1023px
- **Mobile**: ≤ 767px

### 4.2 Responsive Spacing (WAJIB — sumber gap kebesaran di mobile biasanya di sini)

Aturan: **jangan pernah** memakai nilai spacing desktop apa adanya di mobile. Section padding & gap harus diturunkan bertahap, bukan sama rata di semua breakpoint.

| Token | Desktop | Tablet | Mobile |
|---|---|---|---|
| Section vertical padding (`--space-80`) | 80px | 56px | 40px |
| Section horizontal padding (container) | 24px | 20px | 16px |
| Gap antar elemen besar (`--space-24`) | 24px | 20px | 16px |
| Gap antar card dalam grid | 24px | 16px | 12px |
| Gap Hero (headline ke subheadline ke CTA) | 32px | 24px | 20px |
| Card internal padding | 32px | 24px | 20px |

**Cara implementasi (CSS):**
```css
.section {
  padding-block: var(--space-80); /* 80px, desktop default */
}
@media (max-width: 1023px) {
  .section { padding-block: 56px; }
}
@media (max-width: 767px) {
  .section { padding-block: 40px; }
}
```
Atau pakai `clamp()` supaya transisi lebih halus tanpa breakpoint patah-patah:
```css
.section {
  padding-block: clamp(40px, 8vw, 80px);
}
```

### 4.3 Typography Scale Responsif
Hero title (`800` weight) dan heading besar lain wajib pakai `clamp()`, bukan `font-size` tetap — supaya tidak overflow atau menyisakan whitespace janggal di mobile:
```css
.hero-title {
  font-size: clamp(28px, 6vw, 56px);
}
```

---

## 5. Bentuk & Bayangan (Borders & Shadows)

### Border Radius
*(tidak berubah)*
- `--radius-sm`: 8px (Tombol kecil, input)
- `--radius-md`: 12px (Tombol utama, elemen sedang)
- `--radius-lg`: 16px (Card standar)
- `--radius-xl`: 24px (Glassmorphism card / Hero search)
- `--radius-full`: 9999px (Pill badge, Floating button)

### Shadows (Elevasi)
Warna shadow disesuaikan agar sewarna dengan palet baru, bukan abu-abu netral polos:
- **Elevated**: `0 4px 16px rgba(11, 20, 15, 0.10)` (Navbar scrolled)
- **Card**: `0 1px 3px rgba(11,20,15,0.05), 0 4px 12px rgba(11,20,15,0.07)` (State normal)
- **Card Hover**: `0 8px 32px rgba(11, 20, 15, 0.14)` (State hover)
- **Glow**: `0 0 40px rgba(22, 163, 116, 0.25)` (Efek cahaya pendar — emerald, pengganti glow indigo sebelumnya)

---

## 6. Komponen UI Utama (Key UI Components)

### 6.1. Buttons
- **Primary Button**: `Accent Gradient` (emerald → gold), teks putih, border-radius `12px`, efek glow emerald + hover lift (`translateY(-2px)`).
- **Secondary/Outline**: Background subtle `rgba(14,110,85,0.06)` atau transparan dengan border tipis `rgba(11,20,15,0.10)`.

### 6.2. Cards
- Background solid putih (atau `#17251D` di dark mode).
- Border tipis transparan (1px solid separator).
- Hover: `translateY(-4px)` + shadow hover membesar.
- Baris gradien tipis (3px) di bagian atas card saat hover — pakai Accent Gradient (emerald→gold), bukan indigo→cyan.

### 6.2.1 Contextual Watermark Background (Opsional)

Layer gambar kontekstual dengan opacity sangat rendah di background card — lihat kriteria penggunaan di `PRD.md` 1.10.

**Token:**

| Properti | Light Mode | Dark Mode |
|---|---|---|
| Opacity gambar | 5% | 8% |
| Posisi | `background-position: bottom center` (atau `bottom right` tergantung komposisi gambar) | Sama |
| Ukuran | `background-size: cover` atau `contain` tergantung aset — pastikan bagian ikonik gambar tidak terpotong | Sama |
| Blend mode (opsional, kalau gambar terlalu "berat" walau opacity rendah) | `mix-blend-mode: luminosity` di atas base `#FFFFFF` | `mix-blend-mode: luminosity` di atas base `#17251D` |

**CSS reference:**
```css
.card--watermark {
  position: relative;
  overflow: hidden;
  background-color: #FFFFFF; /* Card, Light Mode — lihat 3. Background Colors */
}
.card--watermark::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--watermark-image); /* set per card via inline style/CSS var */
  background-size: cover;
  background-position: bottom center;
  opacity: 0.05;
  pointer-events: none;
  z-index: 0;
}
.card--watermark > * {
  position: relative;
  z-index: 1; /* konten (harga, checklist, CTA) selalu di atas watermark */
}

[data-theme="dark"] .card--watermark {
  background-color: #17251D; /* Card, Dark Mode */
}
[data-theme="dark"] .card--watermark::before {
  opacity: 0.08;
}
```

**Catatan penerapan:**
- Konsisten dengan prinsip token opacity bertingkat light/dark yang sudah dipakai di 6.4 (Highlighted Section Background) — dark mode selalu butuh opacity sedikit lebih tinggi daripada light mode untuk elemen transparan serupa.
- Watermark **tidak menggantikan** treatment Card standar (border tipis, shadow, hover state di 6.2) — teknik ini murni layer tambahan di background, elemen lain tetap mengikuti token yang sudah ada.
- Kalau card ini juga masuk kategori Section Highlight (PRD.md 1.7) atau Signature Style Editorial/Precision (bagian 9), utamakan **salah satu** treatment saja sebagai fokus visual — hindari menumpuk gradient highlight + border aksen + watermark sekaligus di satu card.

### 6.2.2 Abstract Geometric Watermark (Hero tanpa Foto)

Bentuk geometris dekoratif untuk hero yang tidak memakai foto/video — lihat kriteria di `PRD.md` 1.6 (fallback rule).

**Prinsip bentuk:**
- Turunkan bentuk dari shape logo/brand mark kalau ada (misal logo brand berbentuk sudut diagonal → watermark pakai motif sudut diagonal serupa, skala besar) — supaya watermark terasa "milik brand", bukan clip-art generik.
- Kalau tidak ada shape logo yang bisa dijadikan acuan, default pakai **potongan diagonal/faceted** (garis-garis lurus membentuk bidang patah, seperti kaca pecah halus) — netral, modern, cocok untuk kategori Bisnis/Jasa/Produk digital.
- **Dilarang** pakai blob organik melengkung untuk kategori Bisnis/Jasa presisi/teknis (kontradiktif dengan kesan "tegas" yang biasanya diinginkan) — blob organik lebih cocok kalau brand memang punya kesan playful/friendly.

**Token:**

| Properti | Light Mode | Dark Mode |
|---|---|---|
| Warna | `rgba(14, 110, 85, 0.05)` (tint Primary Emerald) | `rgba(22, 163, 116, 0.06)` (tint Jade) |
| Posisi | Kanan atas atau belakang elemen visual utama, sebagian boleh terpotong tepi viewport | Sama |
| Ukuran | Besar — proporsi 30-45% lebar hero, jangan terlalu kecil sampai tidak terasa hadir | Sama |
| Layer | Selalu di **belakang** konten utama & elemen visual (card/mockup), `z-index` paling rendah dalam hero | Sama |

**CSS reference:**
```css
.hero {
  position: relative;
  overflow: hidden;
}
.hero__watermark {
  position: absolute;
  top: 0;
  right: 0;
  width: 45%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
.hero__content,
.hero__visual {
  position: relative;
  z-index: 1;
}
```

**CSS variables (definisikan sekali di root, dipakai semua varian shape di bawah):**
```css
:root {
  --watermark-color: rgba(14, 110, 85, 0.05);      /* Light mode, tint Emerald */
  --watermark-color-soft: rgba(14, 110, 85, 0.03);
  --watermark-line: rgba(14, 110, 85, 0.08);
}
[data-theme="dark"] {
  --watermark-color: rgba(22, 163, 116, 0.06);      /* Dark mode, tint Jade */
  --watermark-color-soft: rgba(22, 163, 116, 0.04);
  --watermark-line: rgba(22, 163, 116, 0.10);
}
```

**3 Varian Shape Reusable (pilih salah satu sesuai karakter brand):**

AI agent memilih **satu** varian di bawah per proyek berdasarkan karakter brand — jangan mencampur 2 varian dalam satu hero.

---

**Varian 1 — Faceted/Diagonal** (default, paling netral)

Cocok untuk: Bisnis/Jasa presisi, SaaS, fintech, konsultan — kesan tegas & modern. Ini varian default kalau tidak ada indikasi kuat karakter brand lain.

```html
<svg class="hero__watermark" viewBox="0 0 500 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <polygon points="500,0 500,800 220,800 340,420 260,0" fill="var(--watermark-color)" />
  <polygon points="500,150 500,550 380,320" fill="var(--watermark-color-soft)" />
  <line x1="260" y1="0" x2="340" y2="420" stroke="var(--watermark-line)" stroke-width="1" />
</svg>
```

---

**Varian 2 — Organic Blob**

Cocok untuk: Produk consumer/lifestyle, brand friendly/approachable, jasa yang ingin kesan hangat tapi tetap modern (bukan kaku).

```html
<svg class="hero__watermark" viewBox="0 0 500 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <path d="M500,120 C500,50 420,0 350,40 C280,80 260,180 180,200 C100,220 40,180 20,260 C0,340 60,420 140,440 C220,460 260,540 340,560 C420,580 500,540 500,460 Z"
        fill="var(--watermark-color)" transform="translate(0,100)" />
</svg>
```

---

**Varian 3 — Linear Grid Fragment**

Cocok untuk: Produk digital/teknis, portofolio, brand yang sudah pakai Signature Style Editorial/Precision (bagian 9) — garis-garisnya senada dengan Visible Grid Lines (9.2), jadi terasa satu bahasa visual.

```html
<svg class="hero__watermark" viewBox="0 0 500 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <g stroke="var(--watermark-line)" stroke-width="1" fill="none">
    <line x1="450" y1="0" x2="450" y2="800" />
    <line x1="380" y1="0" x2="380" y2="800" />
    <line x1="310" y1="100" x2="310" y2="700" />
    <line x1="240" y1="200" x2="500" y2="200" />
    <line x1="240" y1="500" x2="500" y2="500" />
  </g>
  <rect x="380" y="200" width="70" height="300" fill="var(--watermark-color-soft)" />
</svg>
```

---

**Panduan pemilihan varian (ringkas untuk AI agent):**

| Karakter Brand | Varian |
|---|---|
| Tegas, presisi, fintech/SaaS/konsultan (default) | Faceted/Diagonal |
| Hangat, friendly, consumer/lifestyle | Organic Blob |
| Teknis, sudah pakai Editorial/Precision (bagian 9) | Linear Grid Fragment |

**Catatan penerapan:**
- Mobile: watermark boleh tetap ada tapi kurangi ukuran (proporsi 20-25% lebar) dan pastikan tidak menumpuk dengan card/mockup yang biasanya di-stack ke bawah headline di layar sempit — cek posisi ulang, bukan cuma di-scale.
- Watermark ini **tidak menggantikan** Hero Gradient (bagian 3) — kalau hero memang pakai Hero Gradient penuh sebagai background, watermark geometris umumnya tidak diperlukan lagi (gradient sudah cukup mengisi ruang). Watermark ini spesifik untuk hero berbackground **solid/putih/terang** dengan elemen UI mengambang (card, mockup produk) seperti pola Finpay — background terang polos + card produk melayang.
- Jangan dipakai bersamaan dengan Cursor-Reactive Blob (PRD.md 1.6) di hero yang sama — dua-duanya sama-sama elemen shape dekoratif, kalau digabung akan terasa berlebihan; pilih salah satu (statis = watermark, interaktif = cursor-reactive).

### 6.3 Button Styles
Lihat bagian 6.1 (Buttons) — sudah tercakup di sana.

### 6.4 Highlighted Section Background (Section Highlight)

Section yang dipilih sebagai "fokus sekunder" (lihat `PRD.md` 1.7) diberi treatment background berbeda dari section polos di sekitarnya — tujuannya membedakan secara halus, bukan bersaing dengan Hero.

**Prinsip:**
- Gradient sangat tipis/subtle, bukan solid putih (light mode) dan bukan solid warna card gelap (dark mode).
- Hero tetap pakai Hero Gradient penuh (bagian 3) — Section Highlight ini jauh lebih halus dari itu.
- Wajib disesuaikan di kedua mode (light & dark).
- Maksimal 1–2 section per halaman diberi treatment ini.

**Token:**

| Properti | Light Mode | Dark Mode |
|---|---|---|
| Background | `linear-gradient(135deg, rgba({warna-inti}, 0.04) 0%, rgba({warna-inti}, 0.02) 100%)` | `linear-gradient(135deg, rgba({warna-inti}, 0.08) 0%, rgba({warna-inti}, 0.04) 100%)` |
| {warna-inti} | Ambil dari warna inti brief klien (format RGB) | Sama |

**Contoh (warna inti `#093C5D` → RGB `9, 60, 93`, dengan analogous accent):**
```css
.section--highlight {
  background: linear-gradient(135deg, rgba(7, 40, 64, 0.15) 0%, rgba(42, 122, 106, 0.10) 50%, rgba(126, 184, 217, 0.05) 100%);
}
[data-theme="dark"] .section--highlight {
  background: linear-gradient(135deg, rgba(7, 40, 64, 0.20) 0%, rgba(42, 122, 106, 0.14) 50%, rgba(126, 184, 217, 0.08) 100%);
}
```

**Catatan penerapan:**
- Section lain yang tidak dipilih tetap pakai background standar (`Primary`/`Secondary` sesuai bagian 3) — supaya section yang di-highlight benar-benar terasa beda.
- Gradient ini sangat subtle — kalau tidak terasa beda di layar, boleh dinaikkan opacity-nya tipis (maksimal +0.02 di light, +0.03 di dark), tapi jangan sampai menyaingi Hero Gradient.
- Konsisten dengan prinsip opacity bertingkat light/dark: dark mode selalu butuh opacity sedikit lebih tinggi karena background gelap cenderung "menelan" elemen transparan.
  - Kalau section highlight juga berisi card dengan Card Contextual Watermark (6.2.1), utamakan **salah satu** treatment saja — hindari menumpuk gradient highlight + watermark sekaligus di satu card.

### 6.5 Pricing / Comparison Card (Paket & Harga)

Card khusus section harga/paket (lihat `PRD.md` 1.11) yang menampilkan perbandingan beberapa opsi dalam grid — tiap card berisi badge, judul + deskripsi singkat, harga (label + nilai + catatan), daftar fitur (checklist), dan CTA. Ini "ricing card" yang digunakan di section Tipe Rumah proyek Rumah Impian (KPR FLPP) sebagai bahan acuan gaya.

**Struktur elemen (urutan vertikal):**
1. `card__header` — `card__badge` (label populer/rekomendasi) + `card__title` + `card__description` (1 kalimat singkat).
2. `card__price` — `card__price-label` ("Mulai dari"), `card__price-value` (besar, bold), `card__price-note` (catatan kecil, co: "DP mulai 1% · Cicilan mulai Rp 1,1 jt/bln"). Value & note dipisah `border-bottom` tipis dari blok atas.
3. `card__specs` — list fitur dengan ikon centang (`check` stroke). Wajib `flex: 1` supaya CTA selalu di bawah sejajar antar card walau jumlah fitur beda.
4. CTA — tombol `.btn--block` (lebar penuh), default `btn--primary`.

**Featured / Variant Glow (`.card--featured`):**
Satu card dipilih sebagai fokus (biasanya paket tengah/rekomendasi) dan diberi treatment "glow" supaya menonjol dari card biasa — bukan membedakan lewat warna kontras kasar, tapi lewat cahaya halus:
- `border: 2px solid var(--primary)` (atau aksen brand).
- Background: radial-gradient tipis dari atas (teal) memudar ke transparan → kesan "cahaya" halus, bukan blob solid. Naikkan opacity stop pertama kalau ingin glow lebih terlihat.
- `box-shadow`: glow lembut (1px ring tipis + drop shadow besar sewarna).
- CTA card featured: shadow glow lebih kuat.

| Properti | Light Mode | Dark Mode |
|---|---|---|
| Radial glow (stop pertama) | `rgba(34, 66, 72, 0.18)` | `rgba(90, 142, 150, 0.25)` |
| Border featured | `2px solid var(--primary)` | `2px solid #5A8E96` (teal terang, terlihat di bg gelap) |
| Box-shadow | `0 0 0 1px rgba(34,66,72,0.08), 0 24px 64px rgba(34,66,72,0.18)` | `0 0 0 1px rgba(90,142,150,0.2), 0 24px 64px rgba(0,0,0,0.4)` |
| CTA featured glow | `0 8px 32px rgba(34, 66, 72, 0.35)` | sama |

**Dark Mode — perhatian warna teks:**
`--primary` tetap `#224248` (teal gelap) di kedua mode. Di dark mode (`--bg-card: #152A2E` gelap), elemen berwarna `var(--primary)` jadi hampir tidak terlihat. WAJIB override ke teal terang:
- `.card__price-value`, `.card__value` (Legalitas), `.card__icon`, `.card__stat-number`, `.card__badge:not(.card__badge--primary)` → `color: #8FBBC2` (light teal).
- `.card--featured` border → `#5A8E96` di dark mode.

**Responsive:**
- Grid: 3 kolom (desktop) → 2 kolom (tablet) → 1 kolom (mobile).
- Card internal padding ikut `design.md` 4.2 (32px → 24px → 20px).
- Mobile: featured card tidak perlu `scale()`, cukup pertahankan border + glow.

**Contoh penggunaan (HTML ringkas):**
```html
<div class="card card--watermark card--pricing [card--featured]" style="--watermark-image: url('aset-tampak-depan.jpeg')">
  <div class="card__header">
    <span class="card__badge [card__badge--primary]">Rekomendasi</span>
    <h3 class="card__title">Tipe 45</h3>
    <p class="card__description">Keseimbangan sempurna antara luas dan kenyamanan.</p>
  </div>
  <div class="card__price">
    <span class="card__price-label">Mulai dari</span>
    <span class="card__price-value">Rp 220.000.000</span>
    <span class="card__price-note">DP mulai 1% · Cicilan mulai Rp 1,6 jt/bln</span>
  </div>
  <ul class="card__specs">
    <li class="card__spec"><svg>✓</svg> Tanah 90m²</li>
    <!-- fitur lain -->
  </ul>
  <a class="btn btn--primary btn--block">Tanya via WhatsApp</a>
</div>
```

---

## 7. Motion & Animasi
- **Scroll Reveal**: `.reveal` (slide up), `.reveal-left`, `.reveal-right`. Durasi & easing ikut `PRD.md` 1.4 (250–400ms, tegas, bukan lambat).
- **Parallax**: Hero text & elemen latar bergerak beda kecepatan saat scroll.
- **Staggered Animations**: Delay ~50–60ms per item, dengan cap total delay maksimal ~300ms meski jumlah item banyak (item ke-10 tidak menunggu 500-800ms — di-cap supaya section tetap terasa selesai muncul dengan cepat).
- **Micro-interactions**: `scale(0.97)` saat tombol diklik.

---

## 9. Signature Style — Editorial/Precision (Opsional)

Paket gaya visual tambahan, **bukan default wajib**. Dipakai hanya kalau `PRD.md` 1.8 menilai proyek cocok — penuh (4 elemen), sebagian (1-2 elemen), atau di-skip sepenuhnya. Kalau dipakai, keempat elemen di bawah ini konsisten menyatu (satu "bahasa visual": presisi/teknis), jangan dicampur asal-asalan dengan gaya lain yang berlawanan karakter (misal glassmorphism playful).

### 9.1 Index Number (Section Numbering)
Nomor besar di pojok tiap section (kecuali Hero), format `01 / 07` (section saat ini / total section).

| Properti | Light Mode | Dark Mode |
|---|---|---|
| Warna nomor (non-aktif) | `rgba(9, 20, 15, 0.08)` | `rgba(255, 255, 255, 0.06)` |
| Warna nomor (current/aktif) | `#0E6E55` (Emerald) | `#16A374` (Jade) |

- Ukuran desktop: `clamp(48px, 6vw, 96px)`, posisi `absolute` top-right dalam container, tidak mengganggu alur baca konten.
- **Mobile (≤767px)**: ukuran diperkecil ke `clamp(28px, 8vw, 40px)`, posisi dipindah jadi inline di atas heading section (bukan lagi `absolute` overlay) — supaya tidak tabrakan dengan konten di layar sempit dan tidak makan ruang horizontal yang terbatas.

### 9.2 Visible Grid Lines
Garis vertikal tipis membagi container jadi kolom, dibiarkan terlihat samar sebagai elemen dekoratif (bukan disembunyikan setelah layout jadi).

| Properti | Light Mode | Dark Mode |
|---|---|---|
| Warna garis | `rgba(9, 20, 15, 0.05)` | `rgba(255, 255, 255, 0.05)` |
| Ketebalan | 1px | 1px |

- Desktop: 12 kolom.
- **Tablet**: turunkan ke 6-8 kolom.
- **Mobile (≤767px)**: turunkan ke 4 kolom, atau hilangkan grid vertikal sepenuhnya dan sisakan garis horizontal antar-section saja — di layar sempit, grid vertikal padat justru terlihat berisik/mengganggu, bukan rapi.

### 9.3 Custom Line-Art Icon
1 set icon custom, stroke width konsisten, gaya line-art minimalis (bukan filled/duotone, tanpa background shape di belakang icon — supaya tetap terasa presisi, bukan playful).

| Properti | Light Mode | Dark Mode |
|---|---|---|
| Warna default | `#0E6E55` (Emerald) | `#16A374` (Jade) |
| Stroke width | 1.5–2px | 1.5–2px |

- **Mobile**: ukuran icon minimal 24px — jangan diperkecil lebih dari itu demi keterbacaan & tap target (kalau icon dipakai sebagai tombol/link).

### 9.4 Split Accent Border (Card)
Tambahan untuk Card standar (6.2): border tipis di seluruh sisi, ditambah satu sisi (konsisten pilih kiri **atau** bawah untuk seluruh halaman, jangan campur) diberi border tebal warna aksen.

| Properti | Light Mode | Dark Mode |
|---|---|---|
| Border tipis (3 sisi lain) | `rgba(9, 20, 15, 0.10)` | `rgba(255, 255, 255, 0.10)` |
| Border aksen (1 sisi) | `#0E6E55` atau Accent Gradient | `#16A374` |
| Ketebalan border aksen (desktop) | 3–4px | 3–4px |

- **Mobile**: ketebalan border aksen diturunkan ke 2-3px — proporsional dengan ukuran card yang lebih kecil, supaya tidak terkesan berat sebelah.

### 9.5 Kapan TIDAK dipakai
Lihat kriteria lengkap di `PRD.md` 1.8. Ringkasnya: skip penuh untuk Umroh & Desa/Pemerintahan (karakter gaya ini terlalu "teknis/dingin" untuk konteks ibadah atau kesan hangat-dokumenter); untuk Travel, ambil sebagian saja (index number oke, grid lines & border tebal dipertimbangkan ulang).

---

## 10. Catatan Penggunaan Lintas Kategori

- **Bisnis/Jasa**: Pakai palet apa adanya — emerald+gold terasa profesional & modern. Card Contextual Watermark (6.2.1) & Abstract Geometric Watermark (6.2.2, varian Faceted/Diagonal default) relevan dipakai di kategori ini.
- **Travel**: Boleh sedikit lebih vibrant, opacity gradient Hero dinaikkan. Card Contextual Watermark (6.2.1) sangat relevan untuk card destinasi/paket.
- **Umroh**: Kurangi intensitas gold (kesan flashy) → turunkan ke `#B8842A` dengan opacity lebih rendah. Section Highlight (6.4). Signature Style Editorial/Precision (bagian 9): **skip**. Kalau warna inti diganti sesuai klien, gradient **wajib** pakai metode Tonal/Monokromatik (lihat bagian 3, "Aturan Derivasi Gradient dari Warna Inti") — jangan 2 hue, apalagi lompat jauh ke kuning/oranye. Abstract Geometric Watermark (6.2.2): **skip** (kategori ini butuh foto asli, bukan watermark abstrak) — Card Contextual Watermark (6.2.1) tetap boleh dipakai kalau asetnya relevan (co: siluet Ka'bah/Masjid Nabawi).
- **Desa/Pemerintahan**: Kurangi glassmorphism (kesan terlalu "trendy" untuk situs resmi), pertahankan warna emerald sebagai warna alam/pertanian yang relevan, kurangi gradient jadi flat color di beberapa elemen. Section Highlight (6.4) dipakai minim (0-1 section, lihat PRD.md 5). Signature Style Editorial/Precision (bagian 9): **skip**, kecuali border aksen tipis pada card kalau ingin sedikit sentuhan presisi. Card Contextual Watermark (6.2.1) & Abstract Geometric Watermark (6.2.2): **skip** keduanya — prinsip dokumenter/jujur lebih diutamakan daripada elemen dekoratif.
- **Bisnis/Jasa & Travel**: Signature Style Editorial/Precision (bagian 9) jadi opsi paling relevan — lihat kriteria pemilihan penuh/sebagian di PRD.md 1.8 sebelum diterapkan.
- **Kesimpulan untuk Semua Kategori**: Semua ini adalah standart agar design dan flow konsisten bukan suatu kemutlakan, segala bentuk explorasi untuk kepentingan UX/UI dipersilahkan.