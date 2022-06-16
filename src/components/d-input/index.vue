<template>
    <v-text-field
      
      v-bind="$attrs"
      v-on="$listeners"
    ></v-text-field>
</template>

<script>
export default {
  name:'d-input'
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