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

    // 3. GAMBAR HERO (HEADER BESAR)
    defineField({
      name: 'heroImage',
      title: 'Gambar Header (Background)',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'body',
      title: 'Isi Halaman',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Heading 4', value: 'h4'},
            {title: 'Kutipan', value: 'blockquote'},
            {title: 'Lead (Teks Besar)', value: 'lead'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'}, 
            {title: 'Number', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Coret', value: 'strike-through'},
            ],
            annotations: [
              {
                title: 'URL Link',
                name: 'link',
                type: 'object',
                fields: [
                  { title: 'URL', name: 'href', type: 'url' },
                  { title: 'New Tab?', name: 'blank', type: 'boolean', initialValue: true }
                ]
              }
            ]
          }
        },
        { type: 'image', options: { hotspot: true } },
        { type: 'table', title: 'Tabel Data' }
      ],
    }),
  ],
})