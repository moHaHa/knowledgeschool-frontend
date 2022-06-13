<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$vuetify.rtl = true
  }
}
</script>

<style>
</style>