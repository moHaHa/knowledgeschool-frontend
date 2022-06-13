import axios from '@/axios'
export default {
  namespaced: true,
  state: () => ({
    isRegeistered: false,
    treeData: []
  }),
  getters: {
    isRegeistered (state) {
      return state.isRegeistered
    },
    treeData (state) {
      return state.treeData
    }
  },
  mutations: {
    registerModule (state) {
      state.isRegeistered = true
    },
    setTreeData (state, val) {
      state.treeData = val
    }
  },
  actions: {
    async fetchTreeData ({ commit }, params) {
      await axios
        .get(params.ep)
        .then((res) => {
          commit('setTreeData', res.data.content)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
