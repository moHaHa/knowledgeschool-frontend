import axios from '@/axios'
export default {
  namespaced: true,
  state: () => ({
    isRegeistered: false,
    treeList: [],
    loader: false
  }),
  getters: {
    isRegeistered (state) {
      return state.isRegeistered
    },
    treeList (state) {
      return state.treeList
    },
    loader (state) {
      return state.loader
    }
  },
  mutations: {
    registerModule (state) {
      state.isRegeistered = true
    },
    setTreeList (state, val) {
      state.treeList = val
    },
    setLoader (state, val) {
      state.loader = val
    }
  },
  actions: {
    async fetchOptions ({ commit }, params) {
      commit('setLoader', true)
      await axios
        .get(params.ep)
        .then((res) => {
          commit('setTreeList', res.data.content)
          commit('setLoader', false)
        })
        .catch((err) => {
          console.error(err)
          commit('setLoader', false)
        })
    }
  }
}
