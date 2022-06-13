/* eslint-disable no-undef */
/* eslint-disable prefer-const */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
import {
  resetApiObj,
  isEmtyArray,
  foundBiger,
  arrayOfLengths,
  arrayOfIds
  //   arrayOfRaelLengths
} from '../functions/index'
export function stateGetApi () {
  const state = {
    getApiData: {
      // Note : if you add any thing here you must add it in resetApiObj in src/functions/index.js in the same line
      endPoint: undefined,
      mainElementContent: {},
      apiResponse: {
        status: undefined,
        statusText: undefined
      },
      apiContent: {
        current_page: undefined,
        first_page_url: undefined,
        from: undefined,
        last_page: undefined,
        last_page_url: undefined,
        links: [],
        next_page_url: undefined,
        path: undefined,
        per_page: undefined,
        prev_page_url: undefined,
        to: undefined,
        total: undefined
      },
      formsLine: [],
      pageNumArray: [],
      forms: [],
      formsLengths: [],
      formsIds: [],
      formsRealLine: [],
      formsRealLengths: [],
      countOfLastPage: undefined
    }
  }
  return state
}
export function gettersGetApi () {
  const getters = {
    endPoint (state) {
      return state.getApiData.endPoint
    },
    mainElementContent (state) {
      return state.getApiData.mainElementContent
    },
    apiResponse (state) {
      return state.getApiData.apiResponse
    },
    apiContent (state) {
      return state.getApiData.apiContent
    },
    formsLine (state) {
      return state.getApiData.formsLine
    },
    pageNumArray (state) {
      return state.getApiData.pageNumArray
    },
    forms (state) {
      return state.getApiData.forms
    },
    formsLengths (state) {
      return state.getApiData.formsLengths
    },
    formsIds (state) {
      return state.getApiData.formsIds
    },
    formsRealLine (state) {
      return state.getApiData.formsRealLine
    },
    formsRealLengths (state) {
      return state.getApiData.formsRealLengths
    },
    countOfLastPage (state) {
      return state.getApiData.countOfLastPage
    }
  }
  return getters
}
export function mutationsGetApi () {
  const mutations = {
    setGetApiData (state, payload) {
      state.getApiData = JSON.parse(JSON.stringify(payload))
    },
    setState () {
      //   state = payload
    },
    setMainElementContent (state, payload) {
      state.getApiData.mainElementContent = payload
    },
    setEndPoint (state, payload) {
      let incom = payload.endPoint
      state.getApiData.endPoint = incom
    },
    setApiResponse (state, payload) {
      state.getApiData.apiResponse.status = payload.status
      state.getApiData.apiResponse.statusText = payload.statusText
    },
    setApiContent_current_page (state, payload) {
      state.getApiData.apiContent.current_page = payload
    },
    setApiContent_first_page_url (state, payload) {
      state.getApiData.apiContent.first_page_url = payload
    },
    setApiContent_from (state, payload) {
      state.getApiData.apiContent.from = payload
    },
    setApiContent_last_page (state, payload) {
      state.getApiData.apiContent.last_page = payload
    },
    setApiContent_last_page_url (state, payload) {
      state.getApiData.apiContent.last_page_url = payload
    },
    setApiContent_links (state, payload) {
      state.getApiData.apiContent.links = payload
    },
    setApiContent_next_page_url (state, payload) {
      state.getApiData.apiContent.next_page_url = payload
    },
    setApiContent_path (state, payload) {
      state.getApiData.apiContent.path = payload
    },
    setApiContent_per_page (state, payload) {
      state.getApiData.apiContent.per_page = payload
    },
    setApiContent_prev_page_url (state, payload) {
      state.getApiData.apiContent.prev_page_url = payload
    },
    setApiContent_to (state, payload) {
      state.getApiData.apiContent.to = payload
    },
    setApiContent_total (state, payload) {
      state.getApiData.apiContent.total = payload
    },

    pushToFormsLine (state, payload) {
      if (isEmtyArray(state.getApiData.pageNumArray)) {
        state.getApiData.formsLine.push(payload.pageData)

        state.getApiData.formsRealLine.push([
          payload.pageData,
          payload.pageNum,
          payload.from,
          payload.to
        ])

        state.getApiData.pageNumArray.push(payload.pageNum)
      } else if (
        foundBiger(state.getApiData.pageNumArray, payload.pageNum).isFoundBiger
      ) {
        

        state.getApiData.formsLine.splice(
          foundBiger(state.getApiData.pageNumArray, payload.pageNum).theBiger,
          0,
          payload.pageData
        )
        state.getApiData.formsRealLine.splice(
          foundBiger(state.getApiData.pageNumArray, payload.pageNum).theBiger,
          0,
          [payload.pageData, payload.pageNum, payload.from, payload.to]
        )
        state.getApiData.pageNumArray.splice(
          foundBiger(state.getApiData.pageNumArray, payload.pageNum).theBiger,
          0,
          payload.pageNum
        )
      } else {
        state.getApiData.formsLine.push(payload.pageData)
        state.getApiData.formsRealLine.push([
          payload.pageData,
          payload.pageNum,
          payload.from,
          payload.to
        ])
        state.getApiData.pageNumArray.push(payload.pageNum)
      }
      // state.formsLine.push(payload.pageData)
      // state.pageNumArray.push(payload.pageNum)
    },
    setForms (state) {
      let income = _.flattenDepth(state.getApiData.formsLine, 1)

      state.getApiData.forms = income
    },

    setFormsLengths (state) {
      let income = arrayOfLengths(state.getApiData.forms)
      state.getApiData.formsLengths = income
    },
    setFormsIds (state) {
      let income = arrayOfIds(state.getApiData.forms)
      state.getApiData.formsIds = income
    },
    setFormsRealLengths (/*state */) {
      //   let array = _.flattenDepth(state.getApiData.formsRealLine, 0)
      //   let income = arrayOfRaelLengths(array)
      //   
      //   debugger
    },
    setCountOfLastPage (state, payload) {
      state.getApiData.countOfLastPage = payload
    }
  }
  return mutations
}
export function actionsGetApi (axios) {
  const actions = {
    resetGetApiData ({ commit }) {
      commit('setGetApiData', resetApiObj)
      
    },
    resetState ({ commit }) {
      let resetStateData = stateGetApi()
      commit('setStateData', resetStateData)
    },
    async putEndPoint ({ commit }, dataEndPoint) {
      commit('setEndPoint', dataEndPoint)
      //   const res = await axios.get(
      //     `${state.getApiData.endPoint}/requiredAttributes`
      //   )
      //   commit('setMainElementContent', res.data.content)
    },
    async fetchForms ({ commit, state, dispatch }, dataGet) {
      if (
        dataGet.pageNumber <= dataGet.lastPageNum ||
        dataGet.lastPageNum === undefined
      ) {
        if (dataGet.pageNumber !== 0) {
          if (!state.getApiData.pageNumArray.includes(dataGet.pageNumber)) {
            // const pageApi = `?page=${dataGet.pageNumber}`
            // let filter =  function () {

            //   return
            // }
            const endPoint = state.getApiData.endPoint
            const response = await axios
              .get(endPoint, { params: { page: dataGet.pageNumber } })
              .then((res) => res)
            // commit('setApiResponse', response)
            dispatch('fillApiResponse', {
              status: response.status,
              statusText: response.statusText
            })
            dispatch(
              'fillApiContent_current_page',
              response.data.content.paginate.current_page
            )
            dispatch(
              'fillApiContent_first_page_url',
              response.data.content.paginate.first_page_url
            )
            dispatch('fillApiContent_from', response.data.content.paginate.from)
            dispatch(
              'fillApiContent_last_page',
              response.data.content.paginate.last_page
            )
            dispatch(
              'fillApiContent_last_page_url',
              response.data.content.paginate.last_page_url
            )
            dispatch(
              'fillApiContent_links',
              response.data.content.paginate.links
            )
            dispatch(
              'fillApiContent_next_page_url',
              response.data.content.paginate.next_page_url
            )
            dispatch('fillApiContent_path', response.data.content.paginate.path)
            dispatch(
              'fillApiContent_per_page',
              response.data.content.paginate.per_page
            )
            dispatch(
              'fillApiContent_prev_page_url',
              response.data.content.paginate.prev_page_url
            )
            dispatch('fillApiContent_to', response.data.content.paginate.to)
            dispatch(
              'fillApiContent_total',
              response.data.content.paginate.total
            )
            // commit('setApiContent', response.data.content)paginate.
            // dispatch()
            commit('pushToFormsLine', {
              pageData: response.data.content.data,
              pageNum: response.data.content.paginate.current_page,
              from: response.data.content.paginate.from,
              to: response.data.content.paginate.to
            })
            commit('setForms')
            commit('setFormsLengths')
            commit('setFormsIds')
            commit('setFormsRealLengths')
          }
        }
        // }
      }
    },
    fillApiResponse ({ commit }, apiResponse) {
      commit('setApiResponse', {
        status: apiResponse.status,
        statusText: apiResponse.statusText
      })
    },
    fillApiContent_current_page ({ commit }, income) {
      commit('setApiContent_current_page', income)
    },
    fillApiContent_first_page_url ({ commit }, income) {
      commit('setApiContent_first_page_url', income)
    },
    fillApiContent_from ({ commit }, income) {
      commit('setApiContent_from', income)
    },
    fillApiContent_last_page ({ commit }, income) {
      commit('setApiContent_last_page', income)
    },
    fillApiContent_last_page_url ({ commit }, income) {
      commit('setApiContent_last_page_url', income)
    },
    fillApiContent_links ({ commit }, income) {
      commit('setApiContent_links', income)
    },
    fillApiContent_next_page_url ({ commit }, income) {
      commit('setApiContent_next_page_url', income)
    },
    fillApiContent_path ({ commit }, income) {
      commit('setApiContent_path', income)
    },
    fillApiContent_per_page ({ commit }, income) {
      commit('setApiContent_per_page', income)
    },
    fillApiContent_prev_page_url ({ commit }, income) {
      commit('setApiContent_prev_page_url', income)
    },
    fillApiContent_to ({ commit }, income) {
      commit('setApiContent_to', income)
    },
    fillApiContent_total ({ commit }, income) {
      commit('setApiContent_total', income)
    },
    fillCountOfLastPage ({ commit, state }) {
      let countOfLastPage = getCountOfLastPage(
        state.getApiData.apiContent.total,
        state.getApiData.apiContent.per_page,
        state.getApiData.apiContent.last_page
      )
      commit('setCountOfLastPage', countOfLastPage)
    }
  }
  return actions
}
