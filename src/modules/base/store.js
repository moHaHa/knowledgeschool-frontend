import SubModule1 from './sub-module-1/store'
import SubModule2 from './sub-module-2/store'

export default {
  namespaced: true,
  modules: {
    SubModule1,
    SubModule2
  }
}
