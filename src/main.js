import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@/assets/tailwind.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import VueTabulator from 'vue-tabulator'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

Vue.use(VueTabulator, {
  name: 'myTable'
})

Vue.use(Toast, {
  transition: 'Vue-Toastification__fade',
  maxToasts: 20,
  newestOnTop: true
})

Vue.component('vue-select', vSelect)
import '@/colors/css/light.scss'

//global  components
import './components/components-defination'
//global  mixins
import './mixins/mixins-definition'
//global style
import './assets/scss/main.scss'
//global icons
require('./assets/icons/style.css')

import './filters'
//moment.js
import moment from 'moment'

import i18n from './i18n/index'
Vue.prototype.moment = moment

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
