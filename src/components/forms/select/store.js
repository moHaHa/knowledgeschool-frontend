import axios from '@/axios'
import {get} from 'lodash'

export default {
  namespaced: true,
  state : () => ({
    options : []
  }),
  getters: {
    options (state) {
      return state.options
    }
  },
  mutations: {
    setOptions (state, val) {
      state.options = val
    }
  },
  actions: {
    async fetchOptions ({commit}, params) {
      await axios.get(params.ep).then((res) => {
        commit('setOptions', get(res, params.valuesPath)) 
      }).catch((err) => {
        console.error(err)
      })
    }
  }
}
