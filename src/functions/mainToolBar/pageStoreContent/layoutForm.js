/* eslint-disable prefer-const */
/* eslint-disable no-lonely-if */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
import {
  // getNumPageOfThisNum,
  getFromByLength
} from '../functions/index'
export function stateLayoutForm () {
  const state = {
    lengthVal: '',
    watchLengthVal: '',
    form: {},
    newFormNum: 4,
    realForm: {}
  }
  return state
}
export function gettersLayoutForm () {
  const getters = {
    lengthVal (state) {
      return state.lengthVal
    },
    watchLengthVal (state) {
      return state.watchLengthVal
    },
    form (state) {
      return state.form
    },
    newFormNum (state) {
      return state.newFormNum
    },
    realForm (state) {
      return state.realForm
    }
  }
  return getters
}
export function mutationsLayoutForm () {
  const mutations = {
    setLengthVal (state, payload) {
      state.lengthVal = parseInt(payload)
    },
    setWatchLengthVal (state, payload) {
      state.watchLengthVal = parseInt(payload)
    },

    setForm (state, payload) {
      state.form = payload
    },
    setNewFormNum (state, payload) {
      state.newFormNum = payload
    },
    setRealForm (state, payload) {
      state.realForm = payload
    }
  }
  return mutations
}
export function actionsLayoutForm () {
  const actions = {
    chooseLengthValForNewForm ({ commit, state }) {
      let newFromLength = JSON.parse(
        JSON.stringify(parseInt(state.getApiData.apiContent.total) + 1)
      )
      commit('setLengthVal', newFromLength)
    },
    async chooseLengthVal ({ commit, state, dispatch }, val) {
      if (isNaN(val)) {
        commit('setLengthVal', state.lengthVal)
        dispatch('chooseRealForm', {
          type: 'length',
          lengthVal: state.lengthVal
        })
      } else {
        if (val > state.getApiData.apiContent.total) {
          commit('setLengthVal', state.getApiData.apiContent.total)
          dispatch('chooseRealForm', {
            type: 'length',
            lengthVal: state.lengthVal
          })
        } else if (val < 1) {
          commit('setLengthVal', 1)
          dispatch('chooseRealForm', {
            type: 'length',
            lengthVal: state.lengthVal
          })
        } else {
          commit('setLengthVal', val)
          dispatch('chooseRealForm', {
            type: 'length',
            lengthVal: state.lengthVal
          })
        }
      }

      // dispatch that form
    },

    async chooseFrom ({ commit, state }, formInfo) {
      if (formInfo.type === 'id') {
        const income = state.getApiData.formsIds
        if (income.includes(formInfo.index)) {
          const form = state.forms.find((e) => e.id === formInfo.index)
          commit('setForm', form)
        }
      } else if (formInfo.type === 'length') {
        const income = state.getApiData.formsLengths
        if (income.includes(formInfo.index)) {
          const form = state.forms[formInfo.index - 1]
          commit('setForm', form)
        } else if (formInfo.index <= state.getApiData.apiContent.total) {
          // const numPage = getNumPageOfThisNum.getPage(
          //   state.getApiData.apiContent.total,
          //   formInfo.index,
          //   15
          // ).numOfPage
          // 
          //
          // fun(num) => form
          // this.fetchForms({ pageNumber: 1 })
        } 
      }
    },
    async chooseRealForm ({ commit, state, dispatch }, coming) {
      if (coming.type === 'length') {
        let pageNum = getFromByLength.getPageNumber(
          coming.lengthVal,
          15
        ).pageNumber
        
        let isPageExist = getFromByLength.isPageExist(
          pageNum,
          state.getApiData.formsRealLine
        )
        let form = new Object()
        if (isPageExist) {
          form = getFromByLength.getFrom(
            coming.lengthVal,
            pageNum,
            state.getApiData.formsRealLine
          ).form
          commit('setWatchLengthVal', state.lengthVal)
          commit('setRealForm', form)
        } else if (coming.lengthVal <= state.getApiData.apiContent.total) {
          
          await dispatch('fetchForms', { pageNumber: pageNum }).then(() => {
            form = getFromByLength.getFrom(
              coming.lengthVal,
              pageNum,
              state.getApiData.formsRealLine
            ).form
            commit('setWatchLengthVal', state.lengthVal)
            commit('setRealForm', form)
          })
        }
        
      }
    }
  }
  return actions
}
