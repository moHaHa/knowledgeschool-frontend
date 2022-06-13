export default {
  path: 'examples',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'vehicles',
      name: 'vehicles',
      component: () => import('./pages/vehicles')
    },
    {
      path: 'programming-language',
      name: 'programming-language',
      component: () => import('./pages/programming-language')
    },
    {
      path: 'tv-shows',
      name: 'tv-shows',
      component: () => import('./pages/tv-shows')
    }
  ]
}
