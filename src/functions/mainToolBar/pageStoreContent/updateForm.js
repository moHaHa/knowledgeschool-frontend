/* eslint-disable prefer-const */
/* eslint-disable no-lonely-if */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
import { formObj } from '../functions/index'
export function stateUpdateForm () {
  const state = {}
  return state
}
export function gettersUpdateForm () {
  const getters = {}
  return getters
}
export function mutationsUpdateForm () {
  const mutations = {}
  return mutations
}
export function actionsUpdateForm (axios) {
  const actions = {
    async updateForm ({ state, dispatch }, dataStore) {
      let formAllKey = dataStore.mainForm
      let form = formObj.cleanEmptyString(formAllKey)
      let id = dataStore.id
      let endPoint = state.getApiData.endPoint
      let endPointPlusId = `${endPoint}/${id}`
      dispatch('Layout/changeGlobalLoading', true, { root: true })
      await axios
        .put(endPointPlusId, form)
        .then(function (response) {
          
          //start update data
          if (response.status === 200) {
            const toasObj = {
              message: response.data.message,
              config: {
                position: 'bottom-right',
                timeout: 5000,
                icon: true,
                hideProgressBar: true
              }
            }
            const toastInfo = { toasObj, type: 'success' }
            dispatch('Layout/showtoast', toastInfo, { root: true })
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 422) {
              const toasObj = {
                message: error.response.data.message,
                config: {
                  position: 'bottom-left',
                  timeout: 5000,
                  icon: true,
                  hideProgressBar: true
                },
                objectOfErrorDetails: error.response.data.errors
              }
              const toastInfo = { toasObj, type: 'error' }
              dispatch('Layout/showtoast', toastInfo, { root: true })
            }
            if (error.response.status === 404) {
              const toasObj = {
                message: error.response.data.message,
                config: {
                  position: 'bottom-left',
                  timeout: 5000,
                  icon: true,
                  hideProgressBar: true
                },
                objectOfErrorDetails: error.response.data.errors
              }
              const toastInfo = { toasObj, type: 'warning' }
              dispatch('Layout/showtoast', toastInfo, { root: true })
            }
          }
        })
      dispatch('Layout/changeGlobalLoading', false, { root: true })
    }
  }
  return actions
}
