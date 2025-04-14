import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from '@/firebase/configs';


const app = createApp(App)
app.use(router)
app.mount('#app')
