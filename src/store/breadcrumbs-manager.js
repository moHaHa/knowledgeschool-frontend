export default {
  namespaced: true,
  state: {
    breadcrumbs: []
  },
  getters : {
    breadcrumbs (state) {
      return state.breadcrumbs
    }
  },
  mutations: {
    set (state, breadcrumbs) {
      state.breadcrumbs = breadcrumbs
    },
    push (state, breadcrumb) {
      state.breadcrumbs.push(breadcrumb)
    },
    pop (state) {
      state.breadcrumbs.pop()
    },
    replace (state, payload) {
      const index = state.breadcrumbs.findIndex((breadcrumb) => {
        return breadcrumb.text === payload.find
      })

      if (index) {
        state.breadcrumbs.splice(index, 1, payload.replace)
      }
    },
    empty (state) {
      state.breadcrumbs = []
    }
  }
}