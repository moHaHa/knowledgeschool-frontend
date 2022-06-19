<template>
    <v-text-field
      readonly
      v-bind="$attrs"
      v-on="$listeners"
    ></v-text-field>
</template>

<script>
export default {
  name:'d-text-read'
,props:{
   rules: {
      type: [Object, String],
      default: ''
    },
}
}
</script>

<style>

</style>