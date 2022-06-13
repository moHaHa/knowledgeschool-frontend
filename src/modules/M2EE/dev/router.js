export default {
  path: 'dev',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'animals',
      name: 'animals',
      component: () => import('./pages/animals')
    }
  ]
}
