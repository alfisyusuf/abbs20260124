import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Halaman Statis (Profil, Fasilitas, dll)',
  type: 'document',
  fields: [
    // 1. JUDUL HALAMAN
    defineField({
      name: 'title',
      title: 'Judul Halaman',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    // 2. SLUG (URL)
    defineField({
      name: 'slug',
      title: 'Link URL (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    // 3. GAMBAR HERO (HEADER BESAR) — dipakai juga sebagai gambar share sosmed
    defineField({
      name: 'heroImage',
      title: 'Gambar Header (Background)',
      type: 'image',
      options: { hotspot: true },
    }),

    // 4. DESKRIPSI SHARE/SEO (opsional, fallback ke Deskripsi SEO global)
    defineField({
      name: 'metaDescription',
      title: 'Deskripsi Share/SEO (opsional)',
      type: 'text',
      rows: 2,
      description: 'Muncul sebagai teks preview saat halaman ini dibagikan ke WhatsApp/Twitter/Telegram. Kosongkan untuk pakai deskripsi SEO default.',
    }),

    defineField({
      name: 'body',
      title: 'Isi Konten',
      type: 'blockContent',
    }),
  ],
})
