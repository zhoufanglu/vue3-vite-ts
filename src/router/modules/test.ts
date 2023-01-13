const testHome = () => import('@/views/test/index.vue')
const propDemo = () => import('@/views/test/prop-demo/index.vue')
const longList_1 = () => import('@/views/longList/longList_1.vue')
const longList_2 = () => import('@/views/longList/longList_2.vue')
// 表格hook测试页面
const tableA = () => import('@/views/table-A/index.vue')

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
  },
  {
    path: '/table-A',
    component: tableA
  }
]

export default test
