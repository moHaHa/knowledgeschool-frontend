
<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div class="tw-px-3 tw-py-3">
          <h1>Project Structure</h1>

          <div class="">
            <pre class="once-code-block">
    . src
    |-- layout
    |   |-- components
    |   |   |-- erp-modules-list
    |   |   `-- main-header 
    |   |-- data
    |   |   |-- modules-header-lists
    |   |   `-- modules-list
    |   |-- base
    |   |   `-- main.vue
    |   |-- start
    |   |   `-- main.vue
    |   `-- store.js
    |
    `-- modules
        |-- base
        |   |-- sub-module-1
        |   |   |-- router.js
        |   |   |-- service.js
        |   |   |-- endponts.js
        |   |   |-- module-layout.vue
        |   |   |-- style.scss
        |   |   |-- components
        |   |   |-- pages
        |   |   |-- mixins
        |   |   |-- portable
        |   |   `-- store.js 
        |   |
        |   |-- sub-module-2
        |   |-- sub-module-2
        |   |-- router.js
        |   `-- store.js
        `-- base-copy
        |-- sub-module-1
        |-- sub-module-2
        |-- sub-module-2
        |-- router.js
        `-- store.js
            </pre>
          </div>
        </div>
      </template>

      <template v-slot:rightSide> </template>
    </main-page>
  </div>
</template>


<script>
export default {}
</script>
<style >
.once-code-block {
  border-radius: 10px;
  padding: 1rem;
  background: var(--v-code-block-base);
}
</style>
