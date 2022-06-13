/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/no-parsing-error
*/
<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div class="tw-px-3 tw-py-3">
          <div>
            add this object
            <pre class="once-code-block">
           
            <code class="once-code-block">
   {
      name: '<mark>Your Module</mark>',
      <code class="once-code-block new-code">namePascalCase: 'YourModule',</code>
      path: '/<mark>your-module</mark>',
      baseUrl: 'http://<mark>module-backend-url</mark>/api/'
    },
            </code>
            <br>
             
          </pre>
            <br />
            in <code>modulesList</code> array inside this store
            <code>src/layout/store.js</code>

            <br />
            like this
            <br />
          </div>

          <pre class="once-code-block">
            <code class="once-code-block">
export default {
  namespaced: true,
  state: {
    modulesList: [
    {
      name: 'Base',
      <code class="once-code-block new-code">namePascalCase: : 'Base',</code>
      path: '/base',
      baseUrl: 'http://base-url/api/'
    },
    {
      name: '<mark>Your Module</mark>',
      <code class="once-code-block new-code">namePascalCase: '<mark>YourModule</mark>', </code>
      path: '/<mark>your-module</mark>',
      baseUrl: 'http://<mark>module-backend-url</mark>/api/'
    },
  ]
  }
}
            </code>
          </pre>
          <br />
          <div></div>
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
    <erp-header :moduleName="moduleName" :list="list"></erp-header>
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
  background: var(white-smoke);
}
div.v-application div code.once-code-block.old-code {
  background-color: red;
  text-decoration: line-through;
}
div.v-application div code.once-code-block.new-code {
  background-color: green;
  
}
</style>
