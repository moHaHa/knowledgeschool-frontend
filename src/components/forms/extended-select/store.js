import axios from '@/axios'
export default {
  namespaced: true,
  state : () => ({
    isRegeistered : false,
    options : []
    
  }),
  getters: {
    isRegeistered (state) {
      return state.isRegeistered
    },
    options (state) {
      return state.options
    }
  },
  mutations: {
    registerModule (state) {
      state.isRegeistered = true
    },
    setOptions (state, val) {
      state.options = val
    }
  },
  actions: {
    async fetchOptions ({commit}, params) {
       
      await axios.get(params.ep).then((res) => {
        commit('setOptions', res.data.content.data) 
      }).catch((err) => {
        console.error(err)
      })
       
    }
  }
}
