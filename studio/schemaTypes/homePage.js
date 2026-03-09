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
      name: 'heroTopLabel',
      title: 'Label Atas (Samping Logo)',
      type: 'string',
      initialValue: 'SMA ABBS Surakarta'
    }),
    defineField({
      name: 'heroOverline',
      title: 'Teks Kecil Atas Judul',
      type: 'string',
      initialValue: 'Est. — Excellence in Education'
    }),
    defineField({
      name: 'heroTitleTop',
      title: 'Judul Besar (Baris Atas - Teks Solid)',
      type: 'string',
      initialValue: 'Wujudkan'
    }),
    defineField({
      name: 'heroTitleBottom',
      title: 'Judul Besar (Baris Bawah - Teks Transparan bergaris)',
      type: 'string',
      initialValue: 'Potensi'
    }),
    defineField({
      name: 'heroVideoLink',
      title: 'Link Video Profil (Youtube)',
      type: 'url'
    }),
    defineField({
      name: 'heroVideoText',
      title: 'Teks Tombol Video (Sebelah Play)',
      type: 'string',
      initialValue: 'Tonton Video'
    }),

    // --- 2. PPDB FLOAT BOX ---
    defineField({
      name: 'ppdbLabel',
      title: 'Label Kecil Atas PPDB',
      type: 'string',
      initialValue: 'Penerimaan Siswa Baru'
    }),
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
      name: 'ppdbButtonText',
      title: 'Teks Tombol Link PPDB',
      type: 'string',
      initialValue: 'Selengkapnya'
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
        name: 'principalTaglineTop',
        title: 'Tagline Kepsek (Baris Atas)',
        type: 'string',
        initialValue: 'Mendidik dengan'
    }),
    defineField({
        name: 'principalTaglineBottom',
        title: 'Tagline Kepsek (Baris Bawah - Di-highlight Kuning)',
        type: 'string',
        initialValue: 'Hati & Teknologi'
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
                {name: 'link', title: 'Link Halaman Detail (Opsional)', type: 'string'},
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
      type: 'array',
      of: [{
          type: 'object',
          fields: [
              { name: 'name', title: 'Nama Siswa', type: 'string', validation: Rule => Rule.required() },
              { name: 'achievementTitle', title: 'Prestasi', type: 'string', validation: Rule => Rule.required() },
              { name: 'photo', title: 'Foto Siswa', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
              { name: 'batch', title: 'Angkatan/Tahun (Opsional)', type: 'string' },
              { name: 'videoUrl', title: 'Link Video (Opsional)', type: 'url' }
          ],
          preview: {
            select: { title: 'name', subtitle: 'achievementTitle', media: 'photo' }
          }
      }]
    }),
  ]
})