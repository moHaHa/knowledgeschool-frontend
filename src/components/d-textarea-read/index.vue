<template>
    <v-textarea-field
      disabled
      v-bind="$attrs"
      v-on="$listeners"
    ></v-textarea-field>
</template>

<script>
export default {
  name:'d-textarea-read'
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