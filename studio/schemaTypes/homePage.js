import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Halaman Depan (Home)',
  type: 'document',
  fields: [
    // --- 1. HERO SECTION (BAGIAN ATAS) ---
    defineField({
      name: 'heroImage',
      title: 'Gambar Background Utama',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'heroTitle',
      title: 'Judul Besar (Excellence)',
      type: 'string',
      initialValue: 'Excellence'
    }),
    defineField({
      name: 'heroVideoLink',
      title: 'Link Video Profil (Youtube)',
      type: 'url',
      description: 'Link video yang muncul saat tombol Play diklik'
    }),

    // --- 2. PPDB FLOAT BOX (KOTAK KANAN BAWAH) ---
    defineField({
      name: 'ppdbTitle',
      title: 'Judul Kotak PPDB',
      type: 'string',
      initialValue: 'PPDB TAHUN AJARAN 2026/2027'
    }),
    defineField({
      name: 'ppdbText',
      title: 'Teks Pendek PPDB',
      type: 'text',
      rows: 2
    }),
    defineField({
      name: 'ppdbLink',
      title: 'Link Informasi Selengkapnya',
      type: 'url'
    }),

    // --- 3. PRINCIPAL MESSAGE (PESAN KEPSEK) ---
    defineField({
        name: 'principalName',
        title: 'Nama Kepala Sekolah',
        type: 'string'
    }),
    defineField({
        name: 'principalPhoto',
        title: 'Foto Kepala Sekolah',
        type: 'image',
        options: { hotspot: true }
    }),
    defineField({
        name: 'principalMessage',
        title: 'Kutipan Pesan Kepsek',
        type: 'text',
        rows: 4
    }),

    // --- 4. KURIKULUM (3 PILLARS) ---
    defineField({
        name: 'curriculum',
        title: '3 Pilar Kurikulum',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {name: 'title', title: 'Judul (Misal: ICT & IoT)', type: 'string'},
                {name: 'desc', title: 'Deskripsi Singkat', type: 'text', rows: 2},
                {name: 'image', title: 'Gambar Background', type: 'image'},
                {name: 'color', title: 'Warna Aksen', type: 'string', options: {list: [
                    {title: 'Maroon', value: 'bg-maroon/80'},
                    {title: 'Kuning/Gold', value: 'bg-yellow-600/80'},
                    {title: 'Hijau', value: 'bg-green-800/80'},
                    {title: 'Biru', value: 'bg-blue-800/80'},
                ]}}
            ]
        }],
        validation: Rule => Rule.max(3)
    }),

    // --- 5. STATISTIK ---
    defineField({
        name: 'stats',
        title: 'Angka Statistik',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {name: 'value', title: 'Angka (Misal: 100%)', type: 'string'},
                {name: 'label', title: 'Label (Misal: PTN Acceptance)', type: 'string'}
            ]
        }]
    }),

    // --- 6. ALUMNI LOGO ---
    defineField({
        name: 'alumniLogos',
        title: 'Logo Universitas Alumni',
        type: 'array',
        of: [{type: 'image'}]
    }),

    // --- 7. LEARNING EXPERIENCE (VIDEO GRID) ---
    defineField({
        name: 'learningVideos',
        title: 'Video Pembelajaran (Grid 3)',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {name: 'title', title: 'Judul Video', type: 'string'},
                {name: 'category', title: 'Kategori (Label Warna)', type: 'string'},
                {name: 'thumbnail', title: 'Thumbnail Video', type: 'image'},
                {name: 'videoUrl', title: 'Link Youtube', type: 'url'},
                {name: 'colorClass', title: 'Warna Label', type: 'string', options: {list:[
                    {title: 'Merah', value: 'bg-red-700'},
                    {title: 'Biru', value: 'bg-blue-700'},
                    {title: 'Hijau', value: 'bg-green-700'},
                ]}}
            ]
        }]
    }),

    // --- 8. TESTIMONI ---
    defineField({
        name: 'testimonials',
        title: 'Kisah Sukses Alumni',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {name: 'name', title: 'Nama Alumni', type: 'string'},
                {name: 'univ', title: 'Diterima di (Univ)', type: 'string'},
                {name: 'univLogo', title: 'Logo Kampus', type: 'image'},
                {name: 'photo', title: 'Foto Alumni', type: 'image'},
                {name: 'quote', title: 'Kutipan', type: 'text', rows: 3},
                {name: 'batch', title: 'Angkatan/Tahun', type: 'string'}
            ]
        }]
    }),
    
    // --- 9. CTA BAWAH ---
    defineField({
        name: 'ctaTitle',
        title: 'Judul CTA Bawah',
        type: 'string',
        initialValue: 'Mulai Perjalanan Masa Depan Bersama SMA ABBS'
    }),
    defineField({
        name: 'ctaLink',
        title: 'Link Tombol Daftar',
        type: 'url'
    }),
  ]
})