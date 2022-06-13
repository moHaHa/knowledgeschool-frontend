export default {
  namespaced: true,
  state: {
    moduleName: 'M2EE',
    list: [
      {
        nameitem: 'dev',
        childs: [
          {
            nameChild: 'animals',
            iconName: 'mdi-cat',
            type: 'link',
            path: '/M2EE/dev/animals'
          },
          {
            nameChild: 'Programming Language',
            iconName: 'mdi-language-javascript',
            type: 'link',
            path: '/M2EE/dev/programming-language'
          }
        ]
      },
      {
        nameitem: 'Examples',
        childs: [
          {
            nameChild: 'vehicles',
            iconName: 'mdi-car',
            type: 'link',
            path: '/M2EE/examples/vehicles'
          },
          {
            nameChild: 'TV Shows',
            iconName: 'mdi-movie',
            type: 'link',
            path: '/M2EE/examples/tv-shows'
          },
          {
            nameChild: 'Programming Language',
            iconName: 'mdi-language-javascript',
            type: 'link',
            path: '/M2EE/examples/programming-language'
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
