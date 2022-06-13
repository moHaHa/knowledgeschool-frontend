export default {
  path: 'sub-module-1',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'page-1',
      name: '',
      component: () => import('./pages/page-1')
    },
    {
      path: 'page-2',
      name: '',
      component: () => import('./pages/page-2')
    },
    {
      path: 'page-3',
      name: '',
      component: () => import('./pages/page-3')
    }
  ]
}
