import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: '⚙️ Pengaturan Umum & Sosmed',
  type: 'document',
  fields: [
    defineField({ name: 'logo', title: 'Logo Sekolah (Putih/Transparan)', type: 'image' }),
    defineField({ name: 'seoDescription', title: 'Deskripsi SEO (Untuk Google)', type: 'text', rows: 3 }),
    
    // --- SOSIAL MEDIA ---
    defineField({ name: 'socmedIg', title: 'Link Instagram', type: 'url' }),
    defineField({ name: 'socmedYt', title: 'Link YouTube', type: 'url' }),
    defineField({ name: 'socmedWa', title: 'Link WhatsApp (https://wa.me/...)', type: 'url' }),
    defineField({ name: 'socmedTk', title: 'Link TikTok', type: 'url' }),
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