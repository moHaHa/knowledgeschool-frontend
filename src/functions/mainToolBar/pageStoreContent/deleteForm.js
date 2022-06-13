/* eslint-disable prefer-const */
/* eslint-disable no-lonely-if */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
import {} from '../functions/index'
export function stateDeleteForm () {
  const state = {}
  return state
}
export function gettersDeleteForm () {
  const getters = {}
  return getters
}
export function mutationsDeleteForm () {
  const mutations = {}
  return mutations
}
export function actionsDeleteForm (axios) {
  const actions = {
    async deleteForm ({ state, dispatch }, dataStore) {
      let id = dataStore.id
      if (id !== undefined) {
        let endPoint = state.getApiData.endPoint
        let endPointPlusId = `${endPoint}/${id}`
        dispatch('Layout/changeGlobalLoading', true, { root: true })
        await axios
          .delete(endPointPlusId)
          .then(function (response) {
            
            //start delete data
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
              //   let newRecord = response.data.content
              //   dispatch('newRecordHaveBeenSet', { newRecord })
            }
          })
          .catch((error) => {
            
            if (error.response) {
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
  }
  return actions
}
