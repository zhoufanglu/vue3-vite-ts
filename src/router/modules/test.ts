const testHome = () => import('@/views/test/index.vue')
const propDemo = () => import('@/views/test/prop-demo/index.vue')
const longList_1 = () => import('@/views/longList/longList_1.vue')
const longList_2 = () => import('@/views/longList/longList_2.vue')
import type { RouteRecordRaw } from 'vue-router'

const test: RouteRecordRaw[] = [
  {
    path: '/longList_1',
    component: longList_1
  },
  {
    path: '/longList_2',
    component: longList_2
  },
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
