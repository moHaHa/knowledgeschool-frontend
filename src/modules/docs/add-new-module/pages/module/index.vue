/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/no-parsing-error
*/
<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div class="tw-px-3 tw-py-3">
          <div>
            create a new copy of this folder
            <code
              >src/modules/
              <v-icon small class="mb-1">mdi-folder</v-icon> base</code
            >
            named by your module kebab-case in
            <code>src/modules</code>
            the folders structure should be like :
          </div>
          <div>
            <pre class="once-code-block">
    . src
    |
    `-- modules
        |-- base
        |   |-- sub-module-1
        |   |   |-- service.js
        |   |   |-- endponts.js
        |   |   |-- pages
        |   |   |-- mixins
        |   |   |-- module-layout.vue
        |   |   |-- router.js
        |   |   `-- store.js 
        |   |
        |   `-- sub-module-2
        |
        `-- your-module
            |-- sub-module-1
            |   |-- service.js
            |   |-- endponts.js
            |   |-- pages
            |   |-- mixins
            |   |-- module-layout.vue
            |   |-- router.js
            |   `-- store.js 
            |
            `-- sub-module-2
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
   background: var(--v-code-block-base);
}
</style>
