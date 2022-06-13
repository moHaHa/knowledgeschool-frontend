export default {
  path: 'components',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'toolbar',
      name: 'toolbar',
      component: () => import('./pages/toolbar')
    }
  ]
}
