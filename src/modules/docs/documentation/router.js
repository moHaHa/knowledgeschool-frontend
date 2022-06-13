export default {
  path: 'documentation',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'structure',
      name: 'structure',
      component: () => import('./pages/structure')
    },
    {
      path: 'add-new-module',
      name: 'add-new-module',
      component: () => import('./pages/add-new-module')
    },
    {
      path: 'modules-list',
      name: 'modules-list',
      component: () => import('./pages/modules-list')
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
