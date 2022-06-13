/* eslint-disable no-lonely-if */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
import {} from '../functions/index'
export function stateRefreshData () {
  const state = {}
  return state
}
export function gettersRefreshData () {
  const getters = {}
  return getters
}
export function mutationsRefreshData () {
  const mutations = {}
  return mutations
}
export function actionsRefreshData () {
  const actions = {
    async newRecordHaveBeenSet (data) {
      console.log(data)
    }
  }
  return actions
}
