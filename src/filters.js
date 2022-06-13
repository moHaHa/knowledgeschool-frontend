import Vue from 'vue'
import i18n from './i18n/index'

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return i18n.locale === 'en' ?  value.charAt(0).toUpperCase() + value.slice(1) : value
})

Vue.filter('taareef', function (value) {
  if (!value) return ''
  return i18n.locale === 'ar' ?  `ال${value}` : value
})

Vue.filter('taaneeth', function (value) {
  if (!value) return ''
  return i18n.locale === 'ar' ?  `${value}ة` : value
})