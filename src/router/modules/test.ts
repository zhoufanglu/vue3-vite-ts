const testHome = () => import('@/views/test/index.vue')
const propDemo = () => import('@/views/test/prop-demo/index.vue')
import type { RouteRecordRaw } from 'vue-router'

const test: RouteRecordRaw[] = [
  {
    path: '/test',
    component: testHome
  },
  {
    path: '/prop-demo',
    component: propDemo
  }
]

export default test
