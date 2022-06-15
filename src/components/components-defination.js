import Vue from 'vue'
import erpInput from './forms/input'
import erpSelect from './forms/select'
import erpTableSearch from './table-search'
import erpTree from './tree'
import erpSwitch from './forms/switch'
import mainPage from './main-page'
import erpImgPicker from './forms/erp-img-picker'
import erpDatePicker from './forms/date-picker'
import toolbar from './toolbar'
import erpTextarea from './forms/textarea'
import dInput from './d-input'
import dImg from './d-img'

Vue.component(dInput.name, dInput)
Vue.component(dImg.name, dImg)
Vue.component(erpTextarea.name, erpTextarea)
Vue.component(toolbar.name, toolbar)
Vue.component(erpDatePicker.name, erpDatePicker)
Vue.component(erpTableSearch.name, erpTableSearch)
Vue.component(erpInput.name, erpInput)
Vue.component(erpSwitch.name, erpSwitch)
Vue.component(mainPage.name, mainPage)
Vue.component(erpSelect.name, erpSelect)
Vue.component(erpImgPicker.name, erpImgPicker)
Vue.component(erpTree.name, erpTree)

