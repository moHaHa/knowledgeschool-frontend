<template>
  <!-- <vue-select v-on="$listeners" v-model="val" v-bind="$attrs"></vue-select> -->
  <ValidationProvider
    :name="$attrs.name"
    :rules="rules"
    class="erp-select"
    v-slot="{ errors }"
  >
    <v-autocomplete
      clearable
      v-on="$listeners"
      v-model="val"
      v-bind="$attrs"
      :items="items"
      :error="errors.length > 0"
      :menu-props="{ rounded: 'lg' }"
      outlined
      dense
    />
  </ValidationProvider>
</template>

<script>
import selectStore from './store'
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'erp-select',
  components: {
    ValidationProvider
  },

  props: {
    rules: {
      type: [Object, String],
      default: ''
    },
    value: {
      type: [Array, Object, String, Number]
    },
    api: {
      type: String
    },
    valuesPath: {
      type: String,
      default: () => 'data.content.data'
    },
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array
    }
  },
  watch: {
    api (api) {
      if (!this.$store.hasModule(this.moduleName)) {
        this.$store.registerModule(this.moduleName, selectStore)
        this.$store.commit(`${this.moduleName}/registerModule`)
      }
      this.$store.dispatch(`${this.moduleName}/fetchOptions`, { ep: api })
    }
  },
  computed: {
    moduleName () {
      return `TEMP${this.name}`
    },
    items () {
      return !this.api
        ? this.options
        : this.$store.getters[`${this.moduleName}/options`]
    },
    val: {
      set (val) {
        this.$emit('input', val)
      },
      get () {
        return this.value
      }
    }
  },

  created () {
    if (this.api) {
      this.$store.registerModule(this.moduleName, selectStore)
      this.$store.dispatch(`${this.moduleName}/fetchOptions`, {
        ep: this.api,
        valuesPath: this.valuesPath
      })
    }
  },
  mounted () {
    if (this.api && !this.$store.hasModule(this.moduleName)) {
      this.$store.registerModule(this.moduleName, selectStore)

      this.$store.dispatch(`${this.moduleName}/fetchOptions`, {
        ep: this.api,
        valuesPath: this.valuesPath
      })
    }
  },
  beforeDestroy () {
    if (this.$store.hasModule(this.moduleName)) {
      this.$store.unregisterModule(this.moduleName)
    }
  }
}
</script>


<style lang="scss" scoped>
@import "./style.scss";
</style>
