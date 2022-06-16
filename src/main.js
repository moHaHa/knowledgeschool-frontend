import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@/assets/tailwind.css'
import './components/components-defination'
import './mixins/mixins-definition'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
