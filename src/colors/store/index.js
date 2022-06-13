/* eslint-disable prefer-const */
/* eslint-disable no-empty-pattern */

export default {
  namespaced: true,
  state: {
    activeTheme: {
      label: 'Light',
      value: 'light'
    },
    themes: [
      {
        label: 'dark',
        value: 'dark'
      },
      {
        label: 'light',
        value: 'light'
      }
      // {
      //   label : 'Sodani',
      //   value : 'colors'
      // }
    ],
    light: {
      'black': '#202020',
      'input-color-text': '#5e5e5e',
      'white': '#FFFFFF',
      'light-black': '#666666',
      'primary': '#004890',
      'light-primary': '#2A4D71',
      'dark-primary': '#243650',
      'light-flat-primary': '#EFF9FC',
      'dark-flat-primary': '#D4F2FC',
      'teal': '#3D869E',
      'dark-white': '#FBFBFB',
      'gray-one': '#F9F9F9',
      'gray-two': '#F3F3F3',
      'gray-three': '#F5F5F5',
      'gray-four': '#8D8D8D',
      'border-gray': '#d8d6de',
      'label-gray': '#787878',
      'icon-gray': '#888888',
      'white-smoke': '#F6F6F6',
      'old-lace': '#F9F9F9',
      'cool-black': '#233346',
      'seashell': '#F1F1F1',
      'Warning': '#FFE43B'
    },
    colors: {
      'black': '#FF8686',
      'text-black': '#ffffff',
      'input-color-text': '#5e5e5e',
      'white': '#D2FF0F',
      'light-black': '#666666',
      'primary': '#6BCDED',
      'light-primary': '#90D8F0',
      'dark-primary': '#47C5EE',
      'light-flat-primary': '#071F27',
      'dark-flat-primary': '#D4F2FC',
      'teal': '#3D869E',
      'dark-white': '#7236A1',
      'gray-one': '#F9F9F9',
      'gray-two': '#F3F3F3',
      'gray-three': '#C10F0F',
      'gray-four': '#FCFCFC',
      'border-gray': '#d8d6de',
      'label-gray': '#787878',
      'icon-gray': '#888888',
      'white-smoke': '#000000',
      'old-lace': '#591553',
      'cool-black': '#233346',
      'seashell': '#120080',
      'code-block': '#000000',
      'Warning': '#FFE43B'
    },
    dark: {
      'black': '#ffffff',
      'text-black': '#ffffff',
      'input-color-text': '#5e5e5e',
      'white': '#26374C',
      'light-black': '#666666',
      'primary': '#6BCDED',
      'light-primary': '#90D8F0',
      'dark-primary': '#47C5EE',
      'light-flat-primary': '#071F27',
      'dark-flat-primary': '#D4F2FC',
      'teal': '#3D869E',
      'dark-white': '#162A40',
      'gray-one': '#F9F9F9',
      'gray-two': '#F3F3F3',
      'gray-three': '#142136',
      'gray-four': '#F1F1F1',
      'border-gray': '#d8d6de',
      'label-gray': '#FFFFFF',
      'icon-gray': '#888888',
      'white-smoke': '#010A15',
      'old-lace': '#162A40',
      'cool-black': '#ffffff',
      'seashell': '#26374C',
      'code-block': '#000000',
      'Warning': '#FFE43B'
    }
  },
  getters: {
    activeTheme (state) {
      return state.activeTheme
    },
    staticColors (state) {
      return state.dcolors
    },
    darkTheme (state) {
      return state.dark
    },
    lightTheme (state) {
      return state.light
    },
    themes (state) {
      return state.themes
    },
    isThemeDark () {
      return localStorage.getItem('darkMode')
    }
  },
  mutations: {
    setColor (state, color) {
      state.light[color.key] = color.value
      state[state.activeTheme.value][color.key] = color.value
    },
    setTheme (state, theme) {
      state.activeTheme = theme
      if (theme.value === 'dark') localStorage.setItem('darkMode', true)
      else localStorage.setItem('darkMode', false)
    }
  },
  actions: {
    putColor ({ commit }, color) {
      commit('setColor', color)
    },
    changeTheme ({ commit }, payload) {
      if (payload.theme.value === 'dark') {
        payload.app.$vuetify.theme.dark = true
      } else {
        payload.app.$vuetify.theme.dark = false
      }
      commit('setTheme', payload.theme)
    }
  }
}
