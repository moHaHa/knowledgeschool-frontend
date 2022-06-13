/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/no-parsing-error
*/
<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div class="tw-px-3 tw-py-3 ">
          <div>
            create new folder
            <code> <v-icon>mdi-folder</v-icon> your-module</code> named your
            module kebab-case in
            <code>src/layout</code>
          </div>
          <div>
            now create main.vue
            <code>src/layout/your-module/main.vue</code> file content this code
          </div>
          <pre class="once-code-block">
               <code class="new-code">{{ main }}</code>
          </pre>
          <br />

          <pre class="once-code-block">
       
          <div>
  <div v-text="'<script>'"></div>
    <code class="new-code">
 import { mapActions } from 'vuex'

import erpHeader from '../components/erp-header'
export default {
  data () {
    return {
      namePascalCase: '<mark>YourModule</mark>'
    }
  },
  components: {
    'erp-header': erpHeader
  },
  computed: {},
  methods: {
    ...mapActions('Layout', ['fillActiveModule'])
  },
  created () {
    this.fillActiveModule({ namePascalCase: this.namePascalCase })
    
  }
}
    
    </code>
  <div v-text="'</script>'"></div>
  
     
          </div>
         
          </pre>
          <div class="py-1 ">
            note : <code><mark>YourModule</mark></code> must be PascalCase
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
    return {    
      main: `
<template>
  <v-app>
    <erp-header></erp-header>
    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>
`
    }
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
  background: var(--v-code-block-base);
}
.theme--light.v-application code.once-code-block {
  background: var(--v-code-block-base);
}
.theme--dark.v-application code.new-code {
  background-color: green;
}
.theme--light.v-application code.new-code {
  background-color: green;
  color: white;
}
</style>
