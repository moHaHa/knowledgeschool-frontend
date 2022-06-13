export default {
  namespaced: true,
  state: {
    moduleName: 'Docs',
    list: [
      {
        nameitem: 'Add New Module',
        childs: [
          {
            nameChild: 'git',
            iconName: 'mdi-git',
            type: 'link',
            path: '/docs/add-new-module/git'
          },
          {
            nameChild: 'layout',
            iconName: 'mdi-chart-tree',
            type: 'link',
            path: '/docs/add-new-module/layout',
            isNew: true
          },
          {
            nameChild: 'module',
            iconName: 'mdi-folder-multiple',
            type: 'link',
            path: '/docs/add-new-module/module'
          },
          {
            nameChild: 'router',
            iconName: 'mdi-routes',
            type: 'link',
            path: '/docs/add-new-module/router',
            isNew:true
          },
          {
            nameChild: 'Vuex Store',
            iconName: 'mdi-database',
            type: 'link',
            path: '/docs/add-new-module/store'
          },
          {
            nameChild: 'heart',
            iconName: 'mdi-heart',
            type: 'link',
            path: '/docs/add-new-module/store'
          },
          {
            nameChild: 'heart',
            iconName: 'mdi-heart',
            type: 'link',
            path: '/docs/add-new-module/store'
          },
          {
            nameChild: 'heart',
            iconName: 'mdi-heart',
            type: 'link',
            path: '/docs/add-new-module/store'
          }
        ]
      },
      {
        nameitem: 'Tabs',
        childs: [
          {
            nameChild: 'Modules List',
            iconName: 'mdi-tab',
            type: 'link',
            path: '/docs/tabs/modules-list',
            isNew:true
          },
          {
            nameChild: 'Modules Tabs',
            iconName: 'mdi-link-box-variant',
            type: 'link',
            path: '/docs/tabs/modules-tabs'
          }
        ]
      },
      {
        nameitem: 'Notes',
        childs: [
          {
            nameChild: 'note',
            iconName: 'mdi-notebook-check',
            type: 'link',
            path: '/docs/notes/note'
          }
        ]
      },
      {
        nameitem: 'Style',
        childs: [
          {
            nameChild: 'Colors',
            iconName: 'mdi-invert-colors',
            type: 'link',
            path: '/docs/style/colors'
          }
        ]
      },
      {
        nameitem: 'dev',
        childs: [
          {
            nameChild: 'tabs-groups',
            iconName: 'mdi-invert-colors',
            type: 'link',
            path: '/docs/dev/tabs-groups'
          }
        ]
      }
    ]
  },

  getters: {
    list (state) {
      return state.list
    },
    moduleName (state) {
      return state.moduleName
    }
  },
  mutations: {},
  actions: {}
}
