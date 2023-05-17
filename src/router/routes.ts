import type { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')

/**
 * 基础路由
 */
const basePage: RouteRecordRaw[] = [
  {
    path: '/',
    // redirect: '/index',
    component: layout,
    meta: { title: '' },
    children: [],
  },
]

const routes = [...basePage]

export default routes
