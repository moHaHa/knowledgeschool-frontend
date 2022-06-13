export default {
  path: 'style',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'colors',
      name: 'colors',
      component: () => import('./pages/colors')
    }
  ]
}
