/* eslint-disable prefer-const */
/* eslint-disable no-undef */
import axios from 'axios'
import store from '../../layout/store'

const instance = axios.create({})

instance.interceptors.response.use(
  (res) => {
    store.mutations.pushResponsesToAxsiosData(store.state, res)
    return res
  },
  (err) => {
    // alert(err)
    if (err.response === undefined) {
      let res = {
        response: err.response,
        message: err.message,
        config: err.config
      }
      store.mutations.pushResponsesToAxsiosData(store.state, res)
    } else {
      store.mutations.pushResponsesToAxsiosData(store.state, err.response)
    }

    return Promise.reject(err)
  }
)

instance.interceptors.request.use(
  function (config) {
    store.mutations.pushRequestsToAxsiosData(store.state, config)
    return config
  },
  function (error) {
    store.mutations.pushRequestsToAxsiosData(store.state, config)
    return Promise.reject(error)
  }
)

export default instance
