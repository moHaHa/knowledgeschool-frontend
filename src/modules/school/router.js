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
          path: 'stories',
          component: () => import('./admin/stories')
        }
      ]
    }
  ]
}
