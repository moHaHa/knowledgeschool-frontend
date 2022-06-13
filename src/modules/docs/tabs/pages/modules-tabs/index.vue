/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/no-parsing-error
*/
<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div class="tw-px-3 tw-py-3">
          <div>
            create new folder
            <code> <v-icon>mdi-folder</v-icon> your-module</code> named your
            module kebab-case <br />
            in
            <code>src/layout/data/modules-list</code>
          </div>
          <div>
            now create store.js
            <code>src/layout/data/modules-list/store.js</code> file content this
            code
          </div>
          <pre class="once-code-block">
            <code class="once-code-block">
export default {
  namespaced: true,
  state: {
    moduleName: '<mark>Your Module</mark>',
    list: [
      {
        nameitem: 'sub module 1',
        childs: [
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/<mark>your-module</mark>/sub-module-1/page-1'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/<mark>your-module</mark>/sub-module-1/page-2'
          }
        ]
      },
      {
        nameitem: 'sub module 2',
        childs: [
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/<mark>your-module</mark>/sub-module-2/page-1'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/<mark>your-module</mark>/sub-module-2/page-2'
          },
          {
            nameChild: 'page',
            iconName: 'mdi-home',
            type: 'link',
            path: '/<mark>your-module</mark>/sub-module-2/page-3'
          }
        ]
      },
      {
        nameitem: '',
        childs: []
      }
    ]
  },

  getters: {
    list (state) {
      return state.list
    },
    moduleName (state) {
      return state.moduleName
    }
  },
  mutations: {},
  actions: {}
}


            </code>
          </pre>
          <br />
          <div>
            then import
            <code>src/layout/data/<mark>your-module</mark>/store.js</code> in
            <code>src/layout/data/store.js</code>
            <br />
            like this
            <br />

            <pre class="once-code-block">
            <code class="once-code-block">
import Base from './modules-list/base/store'
import <mark>YourModule</mark> from './modules-list/<mark>your-module</mark>/store'
export default {
  namespaced: true,
  modules: {
    Base,
    <mark>YourModule</mark>
  }
}

            </code>
          </pre>
          </div>
        </div>
      </template>
      <template v-slot:rightSide> </template>
    </main-page>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  }
}
</script>
<style>
.once-code-block {
  border-radius: 10px;
  padding: 1rem;
  background: var(--v-code-block-base);
}
.theme--light.v-application code.once-code-block {
  background: var(white-smoke);
}
</style>
