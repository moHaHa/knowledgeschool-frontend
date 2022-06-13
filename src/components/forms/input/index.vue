<template>
  <ValidationProvider
    class="text-input"
    :name="$attrs.label"
    :rules="rules"
    v-slot="{ errors }"
  >
    <v-text-field
      outlined
      clearable
      v-model="val"
      :error="errors.length > 0"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
      <template v-if="errors.length > 0" v-slot:append>
        <v-tooltip color="error" bottom>
          <template v-slot:activator="{ on }">
            <v-icon color="error" v-on="on"> mdi-alert-circle-outline </v-icon>
          </template>
          <div class="tw-flex tw-flex-col">
            <div class="" v-for="(error, i) in errors" :key="i">
              <v-icon color="white"> mdi-exclamation </v-icon>
              {{ error }}
            </div>
          </div>
        </v-tooltip>
      </template></v-text-field
    >
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'erp-input',
  components: {
    ValidationProvider
  },
  props: {
    rules: {
      type: [Object, String],
      default: ''
    },
    value: {
      type: null
    }
  },
  computed: {
    val: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
