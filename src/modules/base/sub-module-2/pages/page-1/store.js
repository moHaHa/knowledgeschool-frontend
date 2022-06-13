import page1Service from './service'
export default {
  namespaced : true,
  state : {
    sample : {},
    loading : false
  },
  actions : {
    async  fetchData ({commit}) {
      commit('setLoading', true)
      try {
        const response =  await page1Service.fetchDataFromApi()
        commit('setData', response)
      } catch (err) {
        console.error(err)
      } finally {
        commit('setLoading', false)
      }
    }
  },
  mutations : {
    setData (state, payload) {
      state.sample = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  getters : {
    sample (state) {
      return state.sample
    }
  }
}