<template>
  <div class="erp-date-picker">
    <!-- <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          :label="label"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          outlined
        ></v-text-field>
      </template>
      <v-color-picker
        v-model="date"
        :active-picker.sync="activePicker"
        @change="save"
        class="ma-2"
        hide-inputs
      ></v-color-picker>
    </v-menu> -->
    <!-- <v-col style="min-width: auto"> -->
    <v-text-field v-model="color" v-mask="mask" hide-details outlined>
      <template v-slot:append>
        <v-menu
          v-model="menu"
          nudge-bottom="105"
          nudge-left="16"
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on }">
            <div :style="swatchStyle" v-on="on" />
          </template>
          <v-card>
            <v-card-text class="">
              <v-color-picker v-model="color" flat />
            </v-card-text>
          </v-card>
        </v-menu>
      </template>
    </v-text-field>
    <!-- </v-col> -->
  </div>
</template>
<script>
export default {
  name: 'erp-color-picker',
  props: {
    value: String,
    label: String
  },
  data: () => ({
    activePicker: null,
    menu: false,
    color: '#1976D2FF',
    mask: '!#XXXXXXXX'
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
    },
    swatchStyle () {
      const { color, menu } = this
      return {
        backgroundColor: color,
        cursor: 'pointer',
        height: '22px',
        width: '22px',
        borderRadius: menu ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
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
<style lang="scss">
@import './erp-color-picker';
</style>
