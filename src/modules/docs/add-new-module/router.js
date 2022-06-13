export default {
  path: 'add-new-module',
  component: () => import('./module-layout.vue'),
  children: [
    {
      path: 'git',
      name: 'git',
      component: () => import('./pages/git')
    },
    {
      path: 'layout',
      name: 'layout',
      component: () => import('./pages/layout')
    },
    {
      path: 'module',
      name: 'module',
      component: () => import('./pages/module')
    },
    {
      path: 'router',
      name: 'router',
      component: () => import('./pages/router')
    },
    {
      path: 'store',
      name: 'store',
      component: () => import('./pages/store')
    },
    {
      path: 'notes',
      name: 'notes',
      component: () => import('./pages/notes')
    }
  ]
}
