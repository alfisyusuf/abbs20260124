# Ringkasan perubahan v2 — Popup, Share Preview (OG), Favicon + perbaikan Navbar/Footer/siteSettings

Ini paket LENGKAP (menggantikan zip sebelumnya `abbs-perubahan-popup-og-favicon.zip`
— tidak perlu apply dua-duanya, cukup pakai yang ini).

Struktur folder sama persis dengan repo kamu. Extract lalu drag-replace ke path yang sama.

## File BARU (2)
- `src/components/PopupModal.astro`
- `studio/schemaTypes/popupAnnouncement.js`

## File DIUBAH (14)

| File | Apa yang berubah |
|---|---|
| `astro.config.mjs` | Tambah `site:` — **WAJIB ganti** ke domain live-mu |
| `src/layouts/MainLayout.astro` | Fetch `siteSettings` + `navbarSettings` + `footerSettings` + `popupAnnouncement` (1x query untuk semua halaman). Tambah favicon dinamis, semua meta `og:*`/`twitter:*`, render `<PopupModal>`. Terusin `navbar`/`footer` data ke komponen masing-masing |
| `src/components/Navbar.astro` | **Sebelumnya tombol "MENU" tidak berfungsi sama sekali (tanpa JS).** Sekarang: menu overlay full-screen yang benar-benar buka/tutup, isi menu+submenu dari `navbarSettings.menuItems`, tombol CTA & label dari Sanity, ikon sosial dari `siteSettings` (cuma tampil kalau linknya diisi), tambah link "JURNAL" |
| `src/components/Footer.astro` | Nama sekolah, deskripsi, alamat/telp/email, 2 kolom link, dan copyright sekarang dari `footerSettings` (sebelumnya 100% hardcoded, field2 itu percuma diisi admin). Ikon sosial dari `siteSettings` |
| `studio/schemaTypes/siteSettings.js` | Tambah `favicon`, `ogImageDefault`, **plus semua field yang selama ini dipanggil di query tapi belum ada schemanya**: `sidebarMenu`, `brochureTitle/Subtitle/Link/ButtonText/Icon`, `authorName/Role/Image`, `sidebarTitle/Subtitle/ButtonText/Link/Image` |
| `src/pages/index.astro` | `<MainLayout title="Home" description={home?.metaDescription} image={home?.heroImage}>` — sekaligus perbaiki bug judul tab dobel |
| `src/pages/[slug].astro` | `<MainLayout title={page.title} description={page.metaDescription} image={page.heroImage}>` |
| `src/pages/news/[slug].astro` | Query `post` +`metaDescription`; `<MainLayout>` +`description`, `image`, `ogType="article"` |
| `src/pages/team.astro` | `<MainLayout title="Guru & Staf" description={page?.introText} image={page?.heroImage}>` |
| `studio/schemaTypes/page.js` | Tambah field `metaDescription` (opsional) |
| `studio/schemaTypes/post.js` | Tambah field `metaDescription` (opsional) |
| `studio/schemaTypes/homePage.js` | Tambah field `metaDescription` (opsional) |
| `studio/schemaTypes/index.js` | Daftarkan `popupAnnouncement` |
| `studio/sanity.config.js` | `popupAnnouncement` jadi singleton + menu Studio |

## File yang TIDAK saya ubah (schema-nya sudah pas, tidak perlu disentuh)
`navbarSettings.js` dan `footerSettings.js` — field-nya sudah lengkap dari awal, yang bermasalah cuma kode frontend-nya (`Navbar.astro`/`Footer.astro`) yang tidak membaca field itu. Sudah diperbaiki di atas.

## Checklist setelah apply

1. **`astro.config.mjs`** — ganti domain.
2. **`public/og-default.jpg`** — tambahkan gambar 1200×630 (fallback terakhir kalau semua sumber gambar OG kosong).
3. Buka Sanity Studio, isi/lengkapi:
   - **Umum & Sosmed**: Favicon, Gambar Share Default, (kalau belum) link sosmed, dan field-field baru (Brosur, Sidebar Menu, Author, dll — isi kalau memang dipakai, kosongkan kalau tidak, semua opsional).
   - **📢 Popup Pengumuman**: upload gambar, aktifkan.
   - **Navbar Menu**: isi `menuItems` (judul + link, submenu opsional) — kalau kosong, overlay menu akan tampil pesan "Menu belum diisi" alih-alih kosong blank.
   - **Footer Area**: isi nama sekolah, alamat, kolom link, dll.
4. Publish semua, lalu redeploy.

## Cara cek hasilnya

- **Navbar**: klik tombol "MENU" di pojok kiri atas — sekarang harus muncul overlay full-screen berisi menu dari Sanity. Klik X atau area untuk tutup.
- **Footer**: cek nama sekolah/alamat/kolom link tampil sesuai isian Studio.
- **Favicon**: lihat ikon di tab browser.
- **Popup**: buka di mode incognito, harus langsung muncul.
- **Share preview**: test pakai https://www.opengraph.xyz/ (paste URL homepage/halaman/berita) sebelum test kirim WhatsApp asli, karena WA nge-cache preview cukup lama.
