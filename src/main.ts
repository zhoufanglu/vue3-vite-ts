import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import pinia from '@/store/index'

const app = createApp(App)

// element
/*import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'*/

// daas-ui
// @ts-ignore
import DaasUi from 'daas-ui'
import 'daas-ui/lib/style.css'
// import { CardType } from 'daas-ui'
// ui
app.use(DaasUi.DaasUi)
app.use(DaasUi.ElementPlus)

app.use(router).use(pinia)
app.mount('#app')
