import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: '⚙️ Pengaturan Global',
  type: 'document',
  fields: [
    // --- BAGIAN 1: INFO PENULIS (GLOBAL) ---
    defineField({
      name: 'authorName',
      title: 'Nama Penulis / Tim (Default)',
      type: 'string',
      initialValue: 'Tim Humas'
    }),
    defineField({
      name: 'authorRole',
      title: 'Jabatan / Deskripsi Singkat',
      type: 'string',
      initialValue: 'SMA ABBS Surakarta'
    }),
    defineField({
      name: 'authorImage',
      title: 'Foto Profil Penulis',
      type: 'image',
      options: { hotspot: true }
    }),

    // --- BAGIAN 2: SIDEBAR BANNER (PPDB/PROMO) ---
    defineField({
      name: 'sidebarTitle',
      title: 'Judul Banner Sidebar',
      type: 'string',
      description: 'Contoh: Bergabunglah Menjadi Bagian Dari Kami',
    }),
    defineField({
      name: 'sidebarSubtitle',
      title: 'Sub-Judul Kecil (Atas)',
      type: 'string',
      description: 'Contoh: Pendaftaran Dibuka',
    }),
    defineField({
      name: 'sidebarButtonText',
      title: 'Teks Tombol',
      type: 'string',
      initialValue: 'Daftar Sekarang'
    }),
    defineField({
      name: 'sidebarLink',
      title: 'Link Tujuan (URL)',
      type: 'url',
    }),
    defineField({
      name: 'sidebarImage',
      title: 'Background Gambar Banner',
      type: 'image',
      options: { hotspot: true }
    }),

    defineField({
      name: 'divider1',
      title: '--- PENGATURAN SIDEBAR HALAMAN ---',
      type: 'string',
      readOnly: true,
      hidden: true // Ini cuma pembatas visual di kodingan
    }),

    // 1. MENU SIDEBAR (Bisa tambah/kurang menu sendiri)
    defineField({
      name: 'sidebarMenu',
      title: 'Menu Sidebar (Daftar Halaman)',
      description: 'Daftar link yang muncul di sidebar "Tentang Kami"',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Menu Item',
          fields: [
            { name: 'title', title: 'Judul Menu', type: 'string' },
            { name: 'url', title: 'Link Tujuan (Slug)', type: 'string', description: 'Contoh: /visi-misi atau /sejarah' }
          ]
        }
      ]
    }),

    // 2. WIDGET BROSUR (Kotak Merah di Sidebar)
    defineField({
      name: 'brochureTitle',
      title: 'Judul Widget Brosur',
      type: 'string',
      initialValue: 'Brosur PPDB 2026'
    }),
    defineField({
      name: 'brochureSubtitle',
      title: 'Deskripsi Singkat',
      type: 'string',
      initialValue: 'Panduan lengkap pendaftaran.'
    }),
    defineField({
      name: 'brochureLink',
      title: 'Link Download / Tujuan',
      type: 'url',
      description: 'Link ke file PDF atau Google Drive'
    }),
    defineField({
      name: 'brochureButtonText',
      title: 'Teks Tombol',
      type: 'string',
      initialValue: 'DOWNLOAD PDF'
    }),
    defineField({
      name: 'brochureIcon',
      title: 'Ikon Widget',
      type: 'string',
      options: {
        list: [
          {title: 'PDF File (Default)', value: 'pdf'},
          {title: 'WhatsApp', value: 'whatsapp'},
          {title: 'Link Website', value: 'link'},
          {title: 'Download', value: 'download'},
        ],
      },
      initialValue: 'pdf'
    }),
  ]
})