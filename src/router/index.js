import Vue from 'vue'
import Router from 'vue-router'
import BaseRouter from '@/modules/base/router'
import DocsRouter from '@/modules/docs/router'
import M2EERouter from '@/modules/M2EE/router'
import DashboardRouter from '@/modules/dashboard/router'
import svuRouter from '@/modules/school/router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '',
      component: () => import('../layout/start/main.vue'),
      children: [...DashboardRouter]
    },
    {
      path: '/base',
      component: () => import('../layout/base/main.vue'),
      children: [...BaseRouter]
    },
    {
      path: '/docs',
      component: () => import('../layout/docs/main.vue'),
      children: [...DocsRouter]
    },
    {
      path: '/M2EE',
      component: () => import('../layout/M2EE/main.vue'),
      children: [...M2EERouter]
    },
    {
      path: '/svu',
      component: () => import('../modules/school/layouts/start-layout'),
      children: [svuRouter]
    },

    {
      path: '/page-not-found',
      component: () => import('../views/not-found.vue')
    }
  ]
})

export default router
