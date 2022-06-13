
<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div>
          <fake />
        </div>
      </template>
      <template v-slot:rightSide> </template>
    </main-page>
  </div>
</template>


<script>
import fake from '../../../../../components/toolbar/index.vue'
export default {
  components: {
    fake
  }
}
</script>
<style >
</style>
