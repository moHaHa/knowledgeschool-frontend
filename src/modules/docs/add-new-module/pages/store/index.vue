/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/no-parsing-error
*/
<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div class="tw-px-3 tw-py-3">
          import your module store to <code>src/store/index.js</code>
        </div>
        <div>
          <pre class="once-code-block">   
 <code class="once-code-block">
import Vue from 'vue'
import Vuex from 'vuex'
import Base from '@/modules/base/store'
import <mark>YourModule</mark>  from '@/modules/<mark>your-module</mark>/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Base,
    <mark>YourModule</mark>,
  }
})
          </code>
           </pre>
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
