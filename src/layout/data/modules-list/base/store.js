export default {
  namespaced: true,
  state: {
    moduleName: 'Base',
    list: [
      {
        nameitem: 'sub module 1',
        childs: [
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/svu/admin'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/svu/views'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-1/page-3'
          }
        ]
      },
      {
        nameitem: 'sub module 2',
        childs: [
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-1'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-1'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-1'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-1'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-1'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-1'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-2'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-3'
          }
        ]
      },
      {
        nameitem: '',
        childs: [
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-1'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-2'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-3'
          }
        ]
      },
      {
        nameitem: '',
        childs: [
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-1'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-2'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-3'
          }
        ]
      },
      {
        nameitem: '',
        childs: [
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-1'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-2'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/base/sub-module-2/page-3'
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
