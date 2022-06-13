import Vue from 'vue'
import { ERPClasses } from './classes'
import { globalLoading } from './global-loading'
Vue.mixin(ERPClasses)
Vue.mixin(globalLoading)
