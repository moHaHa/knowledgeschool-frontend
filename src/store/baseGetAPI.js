/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import axios from '@/axios.js'

import {
  stateGetApi,
  gettersGetApi,
  mutationsGetApi,
  actionsGetApi
} from '@/functions/mainToolBar/pageStoreContent/getApi'

export default {
  namespaced: true,
  state: {
    ...stateGetApi()
  },
  getters: {
    ...gettersGetApi()
  },
  mutations: {
    ...mutationsGetApi()
  },
  actions: {
    ...actionsGetApi(axios)
  }
}
