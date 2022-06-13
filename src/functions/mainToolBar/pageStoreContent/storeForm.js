/* eslint-disable prefer-const */
/* eslint-disable no-lonely-if */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
import { formObj } from '../functions/index'
export function stateStoreForm () {
  const state = {}
  return state
}
export function gettersStoreForm () {
  const getters = {}
  return getters
}
export function mutationsStoreForm () {
  const mutations = {
    startStore () {
      
    }
  }
  return mutations
}
export function actionsStoreForm (axios) {
  const actions = {
    async storeForm ({ commit, state, dispatch }, dataStore) {
      commit('startStore')
      let formAllKey = dataStore.mainForm
      let form = formObj.cleanEmptyString(formAllKey)
      const endPoint = state.getApiData.endPoint
      dispatch('Layout/changeGlobalLoading', true, { root: true })
      await axios
        .post(endPoint, form)
        .then(function (response) {
          
          //start update data

          if (response.status === 200) {
            let toasObj = {
              message: response.data.message,
              config: {
                position: 'bottom-right',
                timeout: 5000,
                icon: true,
                hideProgressBar: true
              }
            }
            let toastInfo = { toasObj, type: 'success' }
            dispatch('Layout/showtoast', toastInfo, { root: true })
            let newRecord = response.data.content
            dispatch('newRecordHaveBeenSet', { newRecord })
            dispatch('resetGetApiData')
            //   dispatch('fetchForms')
            //   fetchForms({ pageNumber: this.apiContent.last_page })

            // dispatch('fetchForms', state.apiContent.last_page)
            // dispatch('chooseNewFormByLength', state.apiContent.total)
          }
          // else if (response.status === 422) {
          //   const toasObj = {
          //     message: 'record has been added successfully',
          //     config: {
          //       position: 'bottom-right',
          //       timeout: 9381,
          //       icon: false,
          //       hideProgressBar: true
          //     }
          //   }
          //   const toastInfo = { toasObj, type: 'success' }
          //   dispatch('Layout/showtoast', toastInfo, { root: true })
          // }
        })
        .catch((err) => {
          if (err.response) {
            
            
            if (err.response.status === 422) {
              const toasObj = {
                message: err.response.data.message,
                config: {
                  position: 'bottom-left',
                  timeout: 5000,
                  icon: true,
                  hideProgressBar: true
                },
                objectOfErrorDetails: err.response.data.errors
              }
              const toastInfo = { toasObj, type: 'error' }
              dispatch('Layout/showtoast', toastInfo, { root: true })
            }
          }
        })

      dispatch('Layout/changeGlobalLoading', false, { root: true })
    }
  }
  return actions
}
