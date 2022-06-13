import axios from '@/axios'
export default {
  namespaced: true,
  state: () => ({
    isRegeistered: false,
    treeList: []
  }),
  getters: {
    isRegeistered (state) {
      return state.isRegeistered
    },
    treeList (state) {
      return state.treeList
    }
  },
  mutations: {
    registerModule (state) {
      state.isRegeistered = true
    },
    setTreeList (state, val) {
      state.treeList = val
    }
  },
  actions: {
    async fetchOptions ({ commit }, params) {
      await axios
        .get(params.ep)
        .then((res) => {
          commit('setTreeList', res.data.content)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
