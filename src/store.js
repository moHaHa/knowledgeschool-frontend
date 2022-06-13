import Vue from 'vue'
import Vuex from 'vuex'
import GlobalStore from './store/index.js'
import Base from './modules/base/store'
import Layout from '@/layout/store.js'
import Colors from '@/colors/store'
import Language from '@/i18n/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Language,
    Base,
    Colors,
    Layout,
    GlobalStore
  }
})
