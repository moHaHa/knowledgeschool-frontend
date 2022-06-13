<template>
  <div
    class="erp-select"
    :class="[
      hasError ? 'hasError' : '',
      hasWarning ? 'hasWarning' : '',
      (isLabel && hasValue) || isFocus ? 'isLabel' : '',
      hasValue ? 'isLabel' : '',
      isFocus ? 'isFocus' : '',
      requiredColor && !hasValue ? 'requiredColor' : '',
    ]"
  >
    <div class="erp-select-container">
      <div class="erp-select-label hide-me">{{ title }}</div>
      <div class="erp-select-label">{{ title }}</div>
      <vue-select
        v-bind="$attrs"
        :options="items"
        :getOptionLabel="(option) => option.name"
        v-on="$listeners"
        v-model="val"
        @open="open"
        @close="close"
        @option:selected="selected"
        @option:selecting="selected"
        @input="input"
      >
        <template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <v-icon class="justify-center tw-flex erp-select-icon-down"
              >mdi-chevron-down</v-icon
            >
          </span>
        </template>
        <template #spinner="{ loading }">
          <div
            v-if="loading"
            style="border-left-color: rgba(var(--v-primary-base), 1)"
            class="vs__spinner"
          />
        </template>
      </vue-select>
    </div>
  </div>
</template>

<script>
import selectStore from './store'

export default {
  name: 'erp-select-full',
  data () {
    return {
      hasValue: false,
      isFocus: false,
      isLabel: false,
      isSelected: false,
      isRegistered: false
    }
  },
  props: {
    value: {
      type: [Array, Object, String, Number]
    },
    title: {
      type: [String, Number]
    },
    api: {
      type: String
    },
    name: {
      type: String
    },
    options: {
      type: Array
    },
    hasError: {
      type: Boolean,
      default: false
    },
    hasWarning: {
      type: Boolean,
      default: false
    },
    requiredColor: {
      type: [Boolean, String],
      default: false
    }
  },
  watch: {
    api (api) {
      if (!this.isRegistered) {
        this.$store.registerModule(this.moduleName, selectStore)
        this.$store.commit(`${this.moduleName}/registerModule`)
        this.isRegistered = true
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
        if (val) {
          this.hasValue = true
        } else {
          this.hasValue = false
        }
        this.$emit('input', val)
        if (this.val) this.isLabel = true
      },
      get () {
        return this.value
      }
    }
  },
  methods: {
    open () {
      this.isFocus = true
      this.isLabel = true
    },
    close () {
      this.isFocus = false
      this.isLabel = false
      if (this.isSelected === true) {
        this.isLabel = true
      }
    },
    selected () {
      this.isSelected = true
      this.isLabel = true
    },
    input () {
      this.isSelected = false
      this.isLabel = false
    }
    // ...mapActions('api', {
    //   getNewApi: 'getNewApi'
    // }),
  },
  mounted () {
    if (this.value) {
      this.hasValue = true
    } else {
      this.hasValue = false
    }

    const x = document.querySelectorAll('.vs__clear')
    x.forEach((el) => {
      el.innerHTML =
        '<span class="erp-select-icon-down icon-erp-delete"></span>'
    })
  },
  updated () {
    if (this.value) {
      this.hasValue = true
    } else {
      this.hasValue = false
    }
  },
  created () {
    if (this.val) this.isLabel = true
    if (this.api) {
      this.$store.registerModule(this.moduleName, selectStore)
      this.$store.dispatch(`${this.moduleName}/fetchOptions`, { ep: this.api })
      this.$store.commit(`${this.moduleName}/registerModule`)
      this.isRegistered = true
    }
  },
  beforeDestroy () {
    if (this.$store.getters[`${this.moduleName}/isRegistered`]) {
      this.$store.unregisterModule(this.moduleName)
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>
