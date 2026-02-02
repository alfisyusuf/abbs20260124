import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'hsvd5agj',
    dataset: 'production'
  },
  deployment: {
    appId: 'm19vj9rjtbsega8486g0hx72',
    
    autoUpdates: true, 
  }
})