<template>
  <v-checkbox
    class="checkboxStyle"
    v-on="$listeners"
    v-model="val"
    color="primary"
    v-bind="$attrs"
    hide-details="auto"
  ></v-checkbox>
</template>

<script>
export default {
  props: {
    value: [Boolean, Number],
    options: {
      type: Array,
      default: () => []
    }
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
<style lang="scss">
@import "./checkbox.scss";
</style>
