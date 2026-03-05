import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure' // Pastikan import structureTool dari sini
import {visionTool} from '@sanity/vision'
import {table} from '@sanity/table'
import {schemaTypes} from './schemaTypes'

// Tentukan mana saja dokumen yang bersifat Singleton (hanya 1 dokumen)
const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["siteSettings", "homePage", "pageTeam"])

export default defineConfig({
  name: 'default',
  title: 'SMA ABBS Studio', // Bebas diganti
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'hsvd5agj',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Menu Utama')
          .items([
            // 1. Pengaturan Global
            S.listItem()
              .title('⚙️ Pengaturan Global')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            
            // 2. Halaman Depan
            S.listItem()
              .title('🏠 Halaman Depan (Home)')
              .id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),

            // 3. Halaman Tim
            S.listItem()
              .title('👥 Halaman: Guru & Staf')
              .id('pageTeam')
              .child(S.document().schemaType('pageTeam').documentId('pageTeam')),

            S.divider(),

            // 4. Sisanya (Berita, Page statis, Data Guru) yang bisa ditambah banyak
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
    table(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Sembunyikan tombol "Create New" untuk dokumen Singleton
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => !singletonTypes.has(templateItem.templateId))
      }
      return prev
    },
    // Hilangkan opsi Delete/Duplicate untuk dokumen Singleton
    actions: (prev, { schemaType }) => {
      if (singletonTypes.has(schemaType)) {
        return prev.filter(({ action }) => singletonActions.has(action))
      }
      return prev
    },
  },
})