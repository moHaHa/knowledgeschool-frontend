import axios from '@/axios'
import qs from 'qs'
export default {
  namespaced: true,
  state: () => ({
    isRegeistered: false,

    tableData: []
  }),
  getters: {
    isRegeistered (state) {
      return state.isRegeistered
    },
    tableData (state) {
      return state.tableData
    }
  },
  mutations: {
    registerModule (state) {
      state.isRegeistered = true
    },
    setTableData (state, val) {
      state.tableData = val
    }
  },
  actions: {
    async fetchTableData ({ commit }, params) {
      await axios
        .get(params.ep, {
          params: params.queryParams,
          paramsSerializer (params) {
            return qs.stringify(params, { encode: false })
          }
        })
        .then((res) => {
          commit('setTableData', res.data.content.data)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
