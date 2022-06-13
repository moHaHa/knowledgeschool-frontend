export default {
  path: 'dev',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'tabs-groups',
      name: 'tabs-groups',
      component: () => import('./pages/tabs-groups')
    }
  ]
}
