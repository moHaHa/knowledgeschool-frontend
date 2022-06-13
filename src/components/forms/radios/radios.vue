<template>
  <v-radio-group
    class="custom-radio"
    v-model="val"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <v-radio
      v-for="(option, i) in options"
      :key="i"
      :label="option.label"
      :value="option.value"
      class="custom-radio"
    ></v-radio>
    <slot></slot>
  </v-radio-group>
</template>
<script>
export default {
  props: {
    value: Number,
    options: {
      type: Array,
      default: () => []
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
@import './radios.scss';
</style>
