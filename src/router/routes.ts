import type { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const login = () => import('@/views/login/index.vue')
import errorPage from '@/router/modules/error-page'
import test from '@/router/modules/test'
const vModel = () => import('@/views/test/vModel/index.vue')

/**
 * 基础路由
 */
const basePage: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/test',
  },
  {
    path: '/',
    component: layout,
    meta: { title: '' },
    children: [...test, ...errorPage],
  },
  {
    path: '/fuck',
    component: login,
  },
  {
    path: '/login',
    component: login,
  },
]

const routes = [...basePage]

export default routes
