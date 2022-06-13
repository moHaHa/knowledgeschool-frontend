
<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div>
          <fake />
        </div>
        <div>
          <div class="tw-px-3 tw-py-3">
            <div>Tool Bar</div>
            api-toolbar
          </div>
        </div>
      </template>
      <template v-slot:rightSide> </template>
    </main-page>
  </div>
</template>


<script>
import fake from '../../../../../components/toolbar-v2/index.vue'
export default {
  components: {
    fake
  }
}
</script>
<style >
</style>
