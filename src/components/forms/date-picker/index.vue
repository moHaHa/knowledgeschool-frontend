<template>
  <div class="erp-date-picker">
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <erp-input
          v-model="date"
          :label="label"
          append-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          outlined
          hide-details="auto"
        >
        </erp-input>
      </template>

      <v-date-picker v-model="date" @change="save"> </v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: 'erp-date-picker',
  props: {
    value: String,
    label: String
  },
  data: () => ({
    activePicker: null,
    menu: false
  }),
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
    value () {
      this.$emit('input', this.value)
    }
  },
  computed: {
    date: {
      get () {
        return this.value
      },
      set (date) {
        this.$emit('input', date)
      }
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./style";
</style>
