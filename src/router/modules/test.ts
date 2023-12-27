const testHome = () => import('@/views/test/index.vue')
const propDemo = () => import('@/views/test/prop-demo/index.vue')
const longList_1 = () => import('@/views/longList/longList_1.vue')
const longList_2 = () => import('@/views/longList/longList_2.vue')
// 表格hook测试页面
const tableA = () => import('@/views/table-A/index.vue')
const tableB = () => import('@/views/table-B/index.vue')
// keep-alive 测试页面
const keepAlive = () => import('@/views/test/keep-alive/index.vue')
const keepAliveDetail = () => import('@/views/test/keep-alive-detail/index.vue')
// 双向绑定测试
const vModel = () => import('@/views/test/vModel/index.vue')
const studyTs = () => import('@/views/test/study-ts/index.vue')
// echarts
const echarts = () => import('@/views/test/echarts/index.vue')
const loadComponents = () => import('@/views/test/load-components/index.vue')
const scroll = () => import('@/views/test/scroll/index.vue')

import type { RouteRecordRaw } from 'vue-router'

const test: RouteRecordRaw[] = [
  {
    path: '/longList_1',
    component: longList_1,
  },
  {
    path: '/longList_2',
    component: longList_2,
  },
  {
    path: '/test',
    component: testHome,
  },
  {
    path: '/prop-demo',
    component: propDemo,
  },
  {
    path: '/table-A',
    component: tableA,
  },
  {
    path: '/table-B',
    component: tableB,
  },
  {
    path: '/vModule',
    component: vModel,
  },
  {
    path: '/study-ts',
    component: studyTs,
  },
  {
    path: '/echarts',
    component: echarts,
  },
  {
    path: '/load-components',
    component: loadComponents,
  },
  {
    path: '/keep-alive',
    component: keepAlive,
    children: [
      {
        path: '/keep-alive-detail/:id',
        component: keepAliveDetail,
      },
    ],
  },
  {
    path: '/scroll',
    component: scroll,
  },
]

export default test
