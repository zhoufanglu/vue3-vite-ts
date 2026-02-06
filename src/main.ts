import { createApp, type Directive } from 'vue'
import App from './App.vue'
import router from '@/router'
import pinia from '@/store/index'
import '@/style.scss' // 引入下 不然全局scss不生效(https://github.com/vitejs/vite/issues/5682#issuecomment-968713998)
import { MotionPlugin } from '@vueuse/motion'

// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// daas-ui要比element-plus后引入，可重置element-plus中部分样式
import 'daas-ui/es/daas-ui.css'
import 'daas-ui/es/newEl.css'

import DaasUi from 'daas-ui'

// 自定义指令
import directivesTool from '@/directives'

const app = createApp(App)

app
  .use(DaasUi)
  .use(MotionPlugin)
  .use(ElementPlus)
  .use(router)
  .use(pinia)
  .use(directivesTool)
  .mount('#app')
