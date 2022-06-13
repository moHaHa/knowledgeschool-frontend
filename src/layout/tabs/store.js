import router from '@/router'
import moment from 'moment'
export default {
  namespaced: true,
  state: {
    tabs: [
      {
        path:'/dashboard',
        timestamp:1646473670551,
        title:'home'
      }
    ],
    activeTabIndex: 0,
    hasTabs: true
  },
  getters: {
    tabs (state) {
      return state.tabs
    },
    activeTabIndex (state) {
      return state.activeTabIndex
    },
    hasTabs (state) {
      return state.hasTabs
    }
  },
  mutations: {
    setTab (state, payload) {
      state.tabs.push(payload)
    },
    deleteTab (state, tabIndex) {
      state.tabs.splice(tabIndex, 1)
    },
    setTabsEmptyStatus (state, status) {
      state.hasTabs = status
    },
    changeActiveTabIndex (state, index) {
      state.activeTabIndex = index
      if (
        router.history.current.path !== state.tabs[state.activeTabIndex]['path']
      ) {
        router.push(state.tabs[state.activeTabIndex]['path'])
      }
    }
  },
  actions: {
    addTab ({ commit, state, dispatch }, payload) {
      payload.timestamp = moment().valueOf()
      commit('setTab', payload)
      commit('changeActiveTabIndex', state.tabs.length - 1)
      dispatch('changeTabsEmptyStatus', true)
      dispatch('Layout/autoChangeHeaderHeight', {}, { root: true })
    },
    removeTab ({ commit, state, dispatch }, obj) {
      commit('deleteTab', obj.index)
      if (state.tabs.length === 0) {
        dispatch('changeTabsEmptyStatus', false)
      }
    
      dispatch('Layout/autoChangeHeaderHeight', {}, { root: true })
    },
    changeTabsEmptyStatus ({ commit }, status) {
      // if (status === true) {
      //   if (rootGetters['Layout/headerType'] === 'absolute') {
      //     dispatch('Layout/changeHeaderHeight', 55, { root: true })
      //   } else {
      //     dispatch('Layout/changeHeaderHeight', 154, { root: true })
      //   }
      // } else if (rootGetters['Layout/headerType'] === 'absolute') {
      //   dispatch('Layout/changeHeaderHeight', 86, { root: true })
      // } else {
      //   dispatch('Layout/changeHeaderHeight', 187, { root: true })
      // }
      commit('setTabsEmptyStatus', status)
    }
  }
}

// ...mapGetters('Layout/Tabs',['tabs','activeTabIndex'])
// ...mapActions('Layout/Tabs',['addTab','removeTab'])
// ...mapMutations('Layout/Tabs',['changeActiveTabIndex'])
