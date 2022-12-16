import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import pinia from '@/store/index'

const app = createApp(App)

// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(router).use(pinia).use(ElementPlus)
app.mount('#app')
