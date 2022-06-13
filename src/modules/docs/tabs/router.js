export default {
  path: 'tabs',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'modules-tabs',
      name: 'modules-tabs',
      component: () => import('./pages/modules-tabs')
    },
    {
      path: 'modules-list',
      name: 'modules-list',
      component: () => import('./pages/modules-list')
    }
  ]
}
