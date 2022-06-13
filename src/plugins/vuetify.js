import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
Vue.use(Vuetify)
import store from '../colors/store'
export let darkTheme = store.getters.darkTheme(store.state)
export let lightTheme = store.getters.lightTheme(store.state)


export default new Vuetify({
  theme: {
    options: {
      customProperties: true
 
    },
    themes: {
      light: {
        ...lightTheme
      },
      dark : {
        ...darkTheme
      }
    }
  }
})
