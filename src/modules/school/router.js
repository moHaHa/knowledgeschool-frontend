export default {
  path: '',
  component: () => import('./index.vue'),
  children: [
    {
      path: 'admin',
      component: () => import('./layouts/admin-layout'),
      children: [
        {
          path: 'movies',
          component: () => import('./admin/movies')
        },
        {
          path: 'songs',
          component: () => import('./admin/songs')
        },
        {
          path: 'users',
          component: () => import('./admin/users')
        }
      ]
    },
    {
      path: '',
      component: () => import('./layouts/views-layout'),
      children: [
        {
          path: '',
          component: () => import('./views/home')
        },
        {
          path: 'library',
          component: () => import('./views/library')
        },

      ]
    }
  ]
}
