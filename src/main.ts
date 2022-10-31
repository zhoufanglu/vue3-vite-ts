import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import pinia from '@/store/index'

const app = createApp(App)

app.use(router).use(pinia)
app.mount('#app')
