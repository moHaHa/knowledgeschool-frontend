export default {
  path: 'notes',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'note',
      name: 'note',
      component: () => import('./pages/note')
    }
  ]
}
