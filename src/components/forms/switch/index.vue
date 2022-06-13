<template>
  <div class="erp-input-container tw-pl-3 tw-flex tw-align-center">
    <v-switch
      class="tw-w-full tw-flex tw-align-center check-box tw-align-center"
      color=""
      hide-details="auto"
      v-bind="$attrs"
      v-model="model"
    >
    </v-switch>
  </div>
</template>

<script>
export default {
  name: 'erp-switch',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    value () {
      this.$emit('input', this.value)
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (model) {
        this.$emit('input', model)
      }
    }
  }
}
</script>

<style>
.v-input--selection-controls {
  margin-top: 0px !important;
  padding-top: 4px;
}
</style>
<style lang="scss">
.erp-input-container {
  background-color: var(--v-white-base);
  border: 1px solid var(--v-border-gray-base);
  border-radius: 7px;
}
.v-input .check-box.tw-align-center {
  align-items: center;
}
</style>