import axios from '@/store/axios/BaseCRUD-axios.js'

export default {
  namespaced : true,
  state : {
    locale : {
      label : 'english',
      value : 'en'
    },
    locales : [
      {
        label : 'arabic',
        value : 'ar'
      },
      {
        label : 'english',
        value : 'en'
      }
    ]
  }, 
  getters : {
    locales (state) {
      return state.locales
    },
    locale () {
      return localStorage.getItem('locale')
    }
  }, 
  mutations : {
    setLocale (state, locale) {
      state.locale = locale
      localStorage.setItem('locale', locale)
    } 
  }, 
  actions : {
    changeLocale ({commit}, payload) {
      payload.app.$i18n.locale = payload.locale.value
      document.getElementsByTagName('html')[0].lang = payload.locale.value
      axios.defaults.headers['lang'] = payload.locale.value
      payload.app.$vuetify.rtl = payload.locale.value === 'ar'
      commit('setLocale', payload.locale.value)
    }
  }
}
