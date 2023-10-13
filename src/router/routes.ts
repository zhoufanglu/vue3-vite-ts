import type { RouteRecordRaw } from 'vue-router'
const layout = () => import('@/layout/index.vue')
const login = () => import('@/views/login/index.vue')
const page1024 = () => import('@/views/1024/index.vue')
import errorPage from '@/router/modules/error-page'
import test from '@/router/modules/test'

/**
 * 基础路由
 */
const basePage: RouteRecordRaw[] = [
  {
    path: '/',
    // redirect: '/index',
    component: layout,
    meta: { title: '' },
    children: [...test, ...errorPage],
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/1024',
    component: page1024,
  },
]

const routes = [...basePage]

export default routes
