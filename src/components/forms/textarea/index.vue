<template>
  <v-textarea
    outlined
    v-on="$listeners"
    v-bind="$attrs"
    v-model="val"
  ></v-textarea>
</template>

<script>
export default {
  name: 'erp-textarea',
  props: {
    value: String
  },
  watch: {
    value () {
      this.$emit('input', this.value)
    }
  },
  computed: {
    val: {
      set (val) {
        this.$emit('input', val)
      },
      get () {
        return this.value
      }
    }
  }
}
</script>