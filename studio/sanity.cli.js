import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'hsvd5agj',
    dataset: 'production'
  },
  deployment: {
    // Tambahkan ID ini (dari terminal Bapak tadi):
    appId: 'm19vj9rjtbsega8486g0hx72',
    
    // Biarkan fitur update otomatis tetap nyala
    autoUpdates: true, 
  }
})