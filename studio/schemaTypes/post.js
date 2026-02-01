import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Berita & Artikel',
  type: 'document',
  fields: [
    // 1. JUDUL BERITA
    defineField({
      name: 'title',
      title: 'Judul Berita',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    // 2. SLUG (URL LINK)
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

    // 3. TANGGAL PUBLISH
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publish',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),

    // 4. KATEGORI (DROPDOWN)
    defineField({
      name: 'category',
      title: 'Kategori / Label',
      type: 'string',
      options: {
        list: [
          {title: 'Prestasi', value: 'Prestasi'},
          {title: 'Kegiatan Sekolah', value: 'Kegiatan Sekolah'},
          {title: 'Akademik', value: 'Akademik'},
          {title: 'Tahfidz', value: 'Tahfidz'},
          {title: 'Artikel', value: 'Artikel'},
          {title: 'Info PPS', value: 'Info PPS'},
        ],
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'tags',
      title: 'Tags / Kata Kunci',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags' // Tampilan input jadi seperti chip/tag
      }
    }),

    // 5. GAMBAR UTAMA (HERO IMAGE)
    defineField({
      name: 'mainImage',
      title: 'Gambar Utama (Cover)',
      type: 'image',
      options: {
        hotspot: true, // Agar bisa atur titik fokus crop
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),

    // 6. ISI BERITA (RICH TEXT + GAMBAR + TABEL)
    defineField({
      name: 'body',
      title: 'Isi Berita',
      type: 'array',
      of: [
        // A. Blok Teks (Paragraf, Heading, Quote)
        {
          type: 'block',
          // 1. STYLES
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Heading 4', value: 'h4'},
            {title: 'Kutipan', value: 'blockquote'},
            {title: 'Lead (Teks Besar)', value: 'lead'},
          ],
          
          // 2. LISTS
          lists: [
            {title: 'Bullet', value: 'bullet'}, 
            {title: 'Number', value: 'number'}
          ],

          // 3. MARKS
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Coret (Strike)', value: 'strike-through'},
            ],
            annotations: [
              {
                title: 'URL Link',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL / Link Tujuan',
                    name: 'href',
                    type: 'url',
                    validation: Rule => Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel']
                    })
                  },
                  {
                    title: 'Buka di Tab Baru?',
                    name: 'blank',
                    type: 'boolean',
                    initialValue: true
                  }
                ]
              }
            ]
          }
        },
        
        // B. Blok Gambar (Sisipan di tengah teks)
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption Gambar (Keterangan)',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }
          ]
        },

        // C. BLOK TABEL (INI YANG BARU DITAMBAHKAN)
        {
          type: 'table',
          title: 'Tabel Data'
        }
      ],
    }),
  ],

  // KONFIGURASI TAMPILAN LIST DI ADMIN
  preview: {
    select: {
      title: 'title',
      author: 'category',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `Kategori: ${author}`}
    },
  },
})