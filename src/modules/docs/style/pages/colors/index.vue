
<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div class="tw-px-3 tw-py-3">
          <div>colors</div>
          <p>add this object in ERPModulesList array</p>

          <div class="tw-flex">
            <div class="tw-w-1/4">
              <div>
                <div
                  v-for="(value, key, index) of lightTheme"
                  :key="index"
                  class="tw-flex tw-mb-2 tw-align-center tw-cursor-pointer"
                  @click="changeColor(key, value)"
                >
                  <code class="tw-py-1">{{ key }} </code>

                  <code class="ms-auto">
                    <div
                      class="tw-px-16 ms-auto tw-py-3 tw-rounded-default"
                      :style="[{ backgroundColor: value }]"
                    ></div>
                  </code>
                </div>
              </div>
            </div>
            <div class="tw-w-1/4">
              <v-dialog :overlay-opacity="0.1" v-model="dialog" max-width="290">
                <v-card>
                  <div>
                    <v-color-picker v-model="pickerVal"></v-color-picker>
                  </div>
                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="saveColor">
                      save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:rightSide> {{ pickerKey }} : {{ pickerVal }}</template>
    </main-page>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      colorsList: [],
      dialog: false,
      pickerKey: 'white',
      pickerVal: '#FFFFFF'
    }
  },
  watch: {},
  computed: {
    ...mapGetters('Colors', ['lightTheme'])
  },
  methods: {
    ...mapActions('Colors', ['putColor']),
    changeColor (key, value) {
      this.dialog = true
      this.pickerVal = value
      this.pickerKey = key
    },
    saveColor () {
      this.putColor({ value: this.pickerVal, key: this.pickerKey })
      this.dialog = false
      this.$vuetify.theme.themes.light = JSON.parse(
        JSON.stringify(this.lightTheme)
      )
    }
  }
}
</script>
<style >
</style>
