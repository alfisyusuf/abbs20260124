import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: '⚙️ Pengaturan Umum & Sosmed',
  type: 'document',
  fields: [
    defineField({ name: 'logo', title: 'Logo Sekolah (Putih/Transparan)', type: 'image' }),
    defineField({
      name: 'favicon',
      title: 'Favicon (persegi, min 512×512, background solid)',
      type: 'image',
      description: 'Dipakai untuk ikon tab browser. Kalau kosong, pakai Logo di atas.',
    }),
    defineField({
      name: 'ogImageDefault',
      title: 'Gambar Share Default (1200×630)',
      type: 'image',
      description: 'Dipakai saat halaman/berita dibagikan ke WhatsApp/Twitter/Telegram tapi belum punya gambar sendiri.',
      options: { hotspot: true },
    }),
    defineField({ name: 'seoDescription', title: 'Deskripsi SEO (Untuk Google)', type: 'text', rows: 3 }),

    // --- SOSIAL MEDIA ---
    defineField({ name: 'socmedIg', title: 'Link Instagram', type: 'url' }),
    defineField({ name: 'socmedYt', title: 'Link YouTube', type: 'url' }),
    defineField({ name: 'socmedWa', title: 'Link WhatsApp (https://wa.me/...)', type: 'url' }),
    defineField({ name: 'socmedTk', title: 'Link TikTok', type: 'url' }),

    // --- SIDEBAR HALAMAN STATIS (dipakai di src/pages/[slug].astro) ---
    defineField({
      name: 'sidebarMenu',
      title: 'Menu Sidebar Halaman Statis (Profil, Fasilitas, dll)',
      type: 'array',
      description: 'Daftar link yang tampil di kotak "Tentang Kami" pada sidebar setiap halaman statis.',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Judul Menu', type: 'string' },
          { name: 'url', title: 'Link (slug tujuan, misal: profil)', type: 'string' },
        ]
      }]
    }),
    defineField({ name: 'brochureTitle', title: 'Judul Kotak Brosur (Sidebar Halaman Statis)', type: 'string' }),
    defineField({ name: 'brochureSubtitle', title: 'Subjudul Kotak Brosur', type: 'string' }),
    defineField({ name: 'brochureLink', title: 'Link Brosur/PPDB', type: 'url' }),
    defineField({ name: 'brochureButtonText', title: 'Teks Tombol Brosur', type: 'string', initialValue: 'Unduh Sekarang' }),
    defineField({
      name: 'brochureIcon',
      title: 'Ikon Kotak Brosur',
      type: 'string',
      options: {
        list: [
          { title: 'PDF', value: 'pdf' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Link', value: 'link' },
          { title: 'Download', value: 'download' },
        ]
      }
    }),

    // --- PENULIS & SIDEBAR ARTIKEL BERITA (dipakai di src/pages/news/[slug].astro) ---
    defineField({ name: 'authorName', title: 'Nama Penulis Default Berita', type: 'string', initialValue: 'Tim Humas' }),
    defineField({ name: 'authorRole', title: 'Jabatan Penulis Default', type: 'string', initialValue: 'SMA ABBS Surakarta' }),
    defineField({ name: 'authorImage', title: 'Foto Penulis Default', type: 'image' }),
    defineField({ name: 'sidebarTitle', title: 'Judul Kotak Sidebar Artikel Berita', type: 'string' }),
    defineField({ name: 'sidebarSubtitle', title: 'Subjudul Kotak Sidebar Artikel Berita', type: 'string' }),
    defineField({ name: 'sidebarButtonText', title: 'Teks Tombol Sidebar Artikel Berita', type: 'string' }),
    defineField({ name: 'sidebarLink', title: 'Link Tombol Sidebar Artikel Berita', type: 'url' }),
    defineField({ name: 'sidebarImage', title: 'Gambar Background Sidebar Artikel Berita', type: 'image' }),
  ],
  // --- TAMBAHAN UNTUK MEMPERBAIKI JUDUL ANEH ---
  preview: {
    prepare() {
      return {
        title: 'Pengaturan Umum & Sosmed',
        subtitle: 'Logo, SEO, dan Tautan Media Sosial'
      }
    }
  }
})
