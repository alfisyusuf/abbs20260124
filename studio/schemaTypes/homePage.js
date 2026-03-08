import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Halaman Depan (Home)',
  type: 'document',
  fields: [
    // --- 1. HERO SECTION ---
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

    // --- 2. PPDB FLOAT BOX ---
    defineField({
      name: 'ppdbTitle',
      title: 'Judul Kotak PPDB',
      type: 'string',
      initialValue: 'PPDB TAHUN AJARAN BARU'
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

    // --- 3. PRINCIPAL MESSAGE ---
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
    defineField({
        name: 'principalTagline',
        title: 'Tagline Utama Kepsek (HTML/Teks)',
        type: 'string',
        description: 'Gunakan <span> untuk teks biasa, dan <em> untuk teks warna merah bergaris kuning. Contoh: Mendidik dengan <em>Hati <span class="font-light text-gray-900">&</span> Teknologi<svg class="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4 Q75 0 150 4 Q225 8 300 4" stroke="#EAB308" stroke-width="2.5" stroke-linecap="round" fill="none"/></svg></em>'
    }),
    defineField({
        name: 'schoolAge',
        title: 'Usia Sekolah (Untuk Badge Foto Kepsek)',
        type: 'string',
        initialValue: '15+'
    }),

    // --- 4. KURIKULUM ---
    defineField({
        name: 'curriculumHeader',
        title: 'Judul Section Kurikulum',
        type: 'string',
        initialValue: 'Three Pillars of'
    }),
    defineField({
        name: 'curriculumSubHeader',
        title: 'Deskripsi Kecil Kurikulum',
        type: 'string',
        initialValue: 'Tiga fondasi pendidikan yang membentuk generasi unggul, berakhlak, dan berdaya saing global.'
    }),
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
                {name: 'link', title: 'Link Halaman Detail (Opsional)', type: 'string', description: 'Contoh: /program/ict'},
                {name: 'color', title: 'Warna Aksen', type: 'string', options: {list: [
                    {title: 'Maroon', value: 'bg-[#800000]/80'},
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

    // --- 7. LEARNING EXPERIENCE ---
    defineField({
        name: 'videoHeader',
        title: 'Judul Section Video',
        type: 'string',
        initialValue: 'Suasana Belajar'
    }),
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
                {name: 'batch', title: 'Angkatan/Tahun', type: 'string'},
                {name: 'videoUrl', title: 'Link Video Testimoni (Opsional)', type: 'url'}
            ]
        }]
    }),
    
    // --- 9. CTA BAWAH ---
    defineField({
        name: 'ctaTitle',
        title: 'Judul CTA Bawah',
        type: 'string',
        initialValue: 'Mulai Perjalanan Masa Depan Bersama Kami'
    }),
    defineField({
        name: 'ctaDesc',
        title: 'Deskripsi CTA',
        type: 'text',
        rows: 3
    }),
    defineField({
        name: 'ctaLink',
        title: 'Link Tombol Daftar',
        type: 'url'
    }),

    // --- 10. ACHIEVEMENTS ---
    defineField({
      name: 'achievements',
      title: 'Siswa Berprestasi (Carousel Berjalan)',
      description: 'Daftar siswa berprestasi yang akan tampil berjalan di halaman depan.',
      type: 'array',
      of: [{
          type: 'object',
          fields: [
              {
                name: 'name', 
                title: 'Nama Siswa', 
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'achievementTitle', 
                title: 'Prestasi (Misal: Medali Emas OSN Fisika)', 
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'photo', 
                title: 'Foto Siswa (Saran: Portrait/Berdiri)', 
                type: 'image', 
                options: { hotspot: true },
                validation: Rule => Rule.required()
              },
              {
                name: 'batch', 
                title: 'Angkatan/Tahun Lulus (Opsional)', 
                type: 'string'
              },
              {
                name: 'videoUrl', 
                title: 'Link Video (Youtube/URL Lain)', 
                type: 'url',
                description: 'Video ini akan muncul sebagai pop-up saat foto siswa diklik.',
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https']
                })
              }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'achievementTitle',
              media: 'photo'
            }
          }
      }]
    }),
  ]
})