/* eslint-disable prefer-const */
/* eslint-disable no-empty-pattern */
import axios from '@/store/axios/BaseCRUD-axios'
import mainAxios from '@/axios'
import Data from './data/store'
import Tabs from './tabs/store'
export default {
  namespaced: true,
  modules: { Data, Tabs },
  state: {
    modulesList: [
      {
        name: 'docs',
        namePascalCase: 'Docs',
        path: '/docs',
        baseUrl: 'http://docs-url/api/'
      },
      {
        name: 'base',
        namePascalCase: 'Base',
        path: '/base',
        baseUrl: 'http://base-url/api/'
      },
      {
        name: 'M2EE',
        namePascalCase: 'M2EE',
        path: '/Mee',
        baseUrl: 'http://localhost:8080/'
      }
    ],

    headerHeight: 55,
    headerType: 'absolute',
    activeModule: {},
    headerList: undefined,
    headerListNamePascalCase: undefined,
    linkList: ['name'],
    globalLoading: false,
    axiosData: {
      requests: [],
      responses: []
    }
  },
  getters: {
    headerHeight (state) {
      return state.headerHeight
    },
    headerType (state) {
      return state.headerType
    },
    modulesList (state) {
      return state.modulesList
    },
    globalLoading (state) {
      return state.globalLoading
    },
    activeModule (state) {
      return state.activeModule
    },
    headerList (state) {
      return state.headerList
    },
    headerListNamePascalCase (state) {
      return state.headerListNamePascalCase
    },
    linkList (state) {
      return state.linkList
    },
    axiosData (state) {
      return state.axiosData
    }
  },
  mutations: {
    setActiveModule (state, payload) {
      state.activeModule = payload
    },
    setGlobalLoading (state, payload) {
      state.globalLoading = payload
    },
    setHeaderList (state, payload) {
      state.headerList = payload
    },
    setHeaderListNamePascalCase (state, payload) {
      state.headerListNamePascalCase = payload
    },
    setLinkList (state, payload) {
      state.linkList = payload
    },
    setHeaderHeight (state, payload) {
      state.headerHeight = payload
    },
    setHeaderType (state, payload) {
      state.headerType = payload
    },
    pushRequestsToAxsiosData (state, payload) {
      state.axiosData.requests.push(payload)
    },
    pushResponsesToAxsiosData (state, payload) {
      state.axiosData.responses.push(payload)
    }
  },
  actions: {
    // changeHeaderHeight ({ commit }, height) {
    //   commit('setHeaderHeight', height)
    // },
    autoChangeHeaderHeight ({ commit, state, rootGetters }) {
      let tabs = rootGetters['Layout/Tabs/hasTabs']
      let navFixed = state.headerType === 'fixed'


      if (tabs) {
        if (navFixed) {
          commit('setHeaderHeight', 190)
        } else {
          commit('setHeaderHeight', 90)
        }
      } else if (navFixed) {
        commit('setHeaderHeight', 160)
      } else {
        commit('setHeaderHeight', 60)
      }
    },
    changeHeaderType ({ commit }, type) {
      commit('setHeaderType', type)
    },
    changeGlobalLoading ({ commit }, isLoading) {
      commit('setGlobalLoading', isLoading)
    },
    fillActiveModule ({ commit, state }, data) {

      let activeObj = JSON.parse(
        JSON.stringify(
          state.modulesList.find(
            (el) => el.namePascalCase === data.namePascalCase
          )
        )
      )
      commit('setActiveModule', activeObj)
      axios.defaults.baseURL = JSON.parse(JSON.stringify(activeObj.baseUrl))
      mainAxios.defaults.baseURL = JSON.parse(JSON.stringify(activeObj.baseUrl))
    },
    fillLinkList ({ commit }, data) {
      commit('setLinkList', data.array)
    },
    newRequests ({ commit }, req) {
      commit('pushRequestsToAxsiosData', req)
    },
    newResponses ({ commit }, res) {
      commit('pushResponsesToAxsiosData', res)
    },
    showtoast ({}, toastInfo) {
      if (toastInfo.type === 'success') {
        this._vm.$toast.success(
          toastInfo.toasObj.message,
          toastInfo.toasObj.config
        )
      }

      if (toastInfo.type === 'warning') {
        this._vm.$toast.warning(
          toastInfo.toasObj.message,
          toastInfo.toasObj.config
        )
      }
      if (toastInfo.type === 'error') {
        if (toastInfo.toasObj.objectOfErrorDetails) {
    
          const array = []
          Object.values(toastInfo.toasObj.objectOfErrorDetails).forEach(
            (arr) => {
              for (let index = 0; index < arr.length; index++) {
                const element = arr[index]
                array.push(element)
              }
            }
          )

          for (let i = 0; i < array.length; i++) {
            const element = array[i]
            setTimeout(() => {
              this._vm.$toast.error(element, toastInfo.toasObj.config)
            }, 500 * i)
          }
        } else {
          this._vm.$toast.error(
            toastInfo.toasObj.message,
            toastInfo.toasObj.config
          )
        }
        // this._vm.$toast.error(
        //   'toastInfo.objectOfErrorDetails',
        //   toastInfo.toasObj.config
        // )
        // for (const error of toastInfo.objectOfErrorDetails) {
        //
        //   this._vm.$toast.error('d', toastInfo.toasObj.config)
        // }
      }
    }
  }
}