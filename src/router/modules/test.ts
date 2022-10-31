const testHome = () => import('@/views/test/index.vue')
import type { RouteRecordRaw } from 'vue-router'

const test: RouteRecordRaw[] = [
  {
    path: '/test',
    component: testHome
  }
]

export default test
