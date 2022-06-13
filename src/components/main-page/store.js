export default {
  namespaced: true,
  state () {
    return {
      systemBarApp: false,
      languages : [
        {
          label: 'english',
          value: 'en'
        },
        {
          label: 'arabic',
          value: 'ar'
        }
      ]
    }
  
  },
  getters: {
    systemBarApp (state) {
      return state.systemBarApp
    },
    languages (state) {
      return state.languages
    }
  },
  mutations: {
    setSystemBarApp (state, payload) {
      state.systemBarApp = payload
    },
    setLanguages (state, payload) {
      state.Languages = payload
    }
  },
  actions: {
    fillSystemBarApp ({ commit }, objBoolean) {
      commit('setSystemBarApp', objBoolean.boolean)
    }
    // fetchLanguages ({ commit }) {
    // }
  }
}
