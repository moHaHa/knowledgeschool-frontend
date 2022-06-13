import { mapActions, mapGetters, mapMutations } from 'vuex'
const objkeysFilterArray = function (mainObj, array) {
  const arraykeys = []
  const arrayVal = []
  let newObj = []
  for (const key in mainObj) {
    array.forEach(el => {
      if (el === key) {
        arrayVal.push(mainObj[key])
      }
    })
    array.forEach(el => {
      if (el === key) {
        arraykeys.push(key)
      }
    })
  }
  const zipArray = arraykeys.map(function (e, i) {
    return [e, arrayVal[i]]
  })
  newObj = Object.fromEntries(zipArray)
  return newObj
}
export function stateFun () {
  const state = {
    forms: [],
    form: {}
  }
  return state
}
export function gettersFun () {
  const getters = {
    allForms (state) {
      return state.forms
    },
    currentForm (state) {
      return JSON.parse(JSON.stringify(state.form))
    }
  }
  return getters
}
export function mutationsFun () {
  const mutations = {
    setForms (state, payload) {
      state.forms = payload
    },
    setForm (state, _length) {
      state.form = JSON.parse(JSON.stringify(state.forms[_length - 1]))
    },
    storeForm (state, payload) {
      state.forms.push(payload)
    },
    updateForm (state, { id, form }) {
      const idx = state.forms.findIndex(c => c.id === id)
      state.forms[idx] = JSON.parse(JSON.stringify(form))
    },
    addForm (state, payload) {
      state.forms.push(payload)
    },
    deleteForm (state, payload) {
      state.forms.splice(payload)
    },
    newForm (state) {
      state.forms.push({})
    },
    unNewForm (state) {
      // this ganna leave the last item
      //so don't do this else if lst form is emty
      // //
      const lastOne = state.forms[state.forms.length - 1]

      if (
        lastOne && // 👈 null and undefined check
        Object.keys(lastOne).length === 0 &&
        Object.getPrototypeOf(lastOne) === Object.prototype
        //
      ) {
        state.forms.pop()
      }
    }
  }
  return mutations
}
export function actionsFun (serviceFile) {
  const actions = {
    async setForms ({ commit }, page) {
      const response = await serviceFile.index(page)
      commit('setForms', response.content.data)
    },
    async storeForm ({ commit }, dataFrom) {
      const form = dataFrom.form
      // return new Promise((resolve, reject) => {
      const newform = keysToCamel(form)
      // if (form.id) {
      //     try {
      //         await serviceFile.update(form.id, newform).then(() => {
      //         })
      //         commit('updateForm', { id: form.id, form })
      //     } catch (err) {
      //         console.error(err)
      //         // reject(err)
      //     }
      // } else

      try {
        await serviceFile.store(newform).then(() => {})
        commit('addForm', form)
      } catch (err) {
        console.error(err)
        // reject(err)
      }

      // })
    },
    async updateForm ({ commit }, dataFrom) {
      const form = dataFrom.form
      const shortFrom = objkeysFilterArray(form, dataFrom.formArray)
      const newform = keysToCamel(shortFrom)
      
      if (form.id) {
        try {
          await serviceFile.update(form.id, newform).then(() => {})
          commit('updateForm', { id: form.id, form })
        } catch (err) {
          console.error(err)
          // reject(err)
        }
      }
      // })
    },
    async deleteForm ({ commit }, dataFrom) {
      const form = dataFrom.form
      await serviceFile.delete(form.id)
      commit('deleteForm', form.id)
    },
    newForm ({ commit }) {
      commit('newForm')
    },
    unNewForm ({ commit }) {
      commit('unNewForm')
    }
  }
  return actions
}

//crud
export function mapMhCrudGetters (pageStoreSrc) {
  const objGetters = {
    forms: 'allForms',
    currentForm: 'currentForm'
  }
  return { ...mapGetters(pageStoreSrc, objGetters) }
}
export function mapMhCrudActions (pageStoreSrc) {
  const objActions = {
    setForms: 'setForms',
    storeForm: 'storeForm',
    deleteForm: 'deleteForm',
    newForm: 'newForm',
    updateForm: 'updateForm',
    unNewForm: 'unNewForm'
  }
  return { ...mapActions(pageStoreSrc, objActions) }
}
//Pagination
export function mapMhPaginationGetters () {
  const objGetters = {
    getCurrentx: 'currentx',
    formState: 'formState'
  }
  const pageStoreSrc = 'HR/Pagination'
  return { ...mapGetters(pageStoreSrc, objGetters) }
}
export function mapMhPaginationMutations () {
  const objMutations = {
    setCurrentx: 'setCurrentx',
    setFormState: 'setFormState'
  }
  const pageStoreSrc = 'HR/Pagination'
  return { ...mapMutations(pageStoreSrc, objMutations) }
}
export function mapMhPaginationActions () {
  const objActions = {
    updateCurrentx: 'updateCurrentx'
  }
  const pageStoreSrc = 'HR/Pagination'
  return { ...mapActions(pageStoreSrc, objActions) }
}
// toolbar
export function mapMhToolBarGetters () {
  const objGetters = {
    newState: 'newState'
  }
  const pageStoreSrc = 'HR/ToolBar'
  return { ...mapGetters(pageStoreSrc, objGetters) }
}
export function mapMhToolBarMutations () {
  const objMutations = {
    setSaveDis: 'setSaveDis',
    setNewDis: 'setNewDis',
    setUpdateDis: 'setUpdateDis',
    setDeleteDis: 'setDeleteDis',
    setNewState: 'setNewState'
  }
  const pageStoreSrc = 'HR/ToolBar'
  return { ...mapMutations(pageStoreSrc, objMutations) }
}

const toCamel = str => {
  return str.replace(/([-_][a-z])/gi, $1 => {
    return $1
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  })
}

const isObject = function (obj) {
  return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function'
}

const keysToCamel = function (obj) {
  if (isObject(obj)) {
    const n = {}

    Object.keys(obj).forEach(k => {
      n[toCamel(k)] = keysToCamel(obj[k])
    })

    return n
  } else if (Array.isArray(obj)) {
    return obj.map(i => {
      return keysToCamel(i)
    })
  }

  return obj
}
