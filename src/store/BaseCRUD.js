/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// import axios from '@/axios'
import axios from './axios/BaseCRUD-axios'

import {
  stateGetApi,
  gettersGetApi,
  mutationsGetApi,
  actionsGetApi
} from '@/functions/mainToolBar/pageStoreContent/getApi'
import {
  stateLayoutForm,
  gettersLayoutForm,
  mutationsLayoutForm,
  actionsLayoutForm
} from '@/functions/mainToolBar/pageStoreContent/layoutForm'
import {
  stateStoreForm,
  gettersStoreForm,
  mutationsStoreForm,
  actionsStoreForm
} from '@/functions/mainToolBar/pageStoreContent/storeForm'
import {
  stateDeleteForm,
  gettersDeleteForm,
  mutationsDeleteForm,
  actionsDeleteForm
} from '@/functions/mainToolBar/pageStoreContent/deleteForm'
import {
  stateUpdateForm,
  gettersUpdateForm,
  mutationsUpdateForm,
  actionsUpdateForm
} from '@/functions/mainToolBar/pageStoreContent/updateForm'
import {
  stateRefreshData,
  gettersRefreshData,
  mutationsRefreshData,
  actionsRefreshData
} from '@/functions/mainToolBar/pageStoreContent/refreshData'

export default {
  namespaced: true,
  state: {
    ...stateGetApi(),
    ...stateLayoutForm(),
    ...stateStoreForm(),
    ...stateDeleteForm(),
    ...stateUpdateForm(),
    ...stateRefreshData()
  },
  getters: {
    ...gettersGetApi(),
    ...gettersLayoutForm(),
    ...gettersStoreForm(),
    ...gettersDeleteForm(),
    ...gettersUpdateForm(),
    ...gettersRefreshData()
  },
  mutations: {
    ...mutationsGetApi(),
    ...mutationsLayoutForm(),
    ...mutationsStoreForm(),
    ...mutationsDeleteForm(),
    ...mutationsUpdateForm(),
    ...mutationsRefreshData()
  },
  actions: {
    ...actionsGetApi(axios),
    ...actionsLayoutForm(),
    ...actionsStoreForm(axios),
    ...actionsDeleteForm(axios),
    ...actionsUpdateForm(axios),
    ...actionsRefreshData()
  }
}
