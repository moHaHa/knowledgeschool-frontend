import Vue from 'vue'
import Router from 'vue-router'
import svuRouter from '@/modules/school/router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to) {
    if (to.hash) {
      return { selector: to.hash   ,behavior: 'smooth', }
      } else {

        return { x: 0, y: 0 ,behavior: 'smooth',}
      }
  },
  routes: [
    
    {
      path: '/svu',
      component: () => import('../modules/school/layouts/start-layout'),
      children: [svuRouter]
    },

  
  ]
})

export default router
