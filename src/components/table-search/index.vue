<template>
  <div>
    <div class="input-with-search">
      <erp-input
        v-on="$listeners"
        v-bind="$attrs"
        class="tw-w-full"
        :value="val"
        append-icon="mdi-magnify"
        @click:append="activePrompt = true"
        readonly
      ></erp-input>

      <div>
        <v-dialog
          @click="$emit('select')"
          v-model="activePrompt"
          transition="dialog-top-transition"
        >
          <div class="h-full tw-relative">
            <div class="tw-p-4 tw-bg-white">
              <div class="p-1 tw-w-full tw-relative tw-flex tw-gap-2">
                <div class="tw-w-full tw-flex tw-flex-col tw-gap-2">
                  <erp-input
                    v-model="search"
                    label="Search"
                    single-line
                    hide-details
                  ></erp-input>
                  <v-data-table
                    :headers="tableOptions"
                    :items="tableModel"
                    hide-default-footer
                    :single-select="true"
                    class="searchTable"
                    v-on:dblclick="activePromptClose = true"
                    @click:row="selectRow"
                    @dblclick:row="select"
                    :search="search"
                  />
                </div>

                <hr class="tw-my-4 tw-text-grey" />
                <div class="tw-justify-center tw-items-center bouttone_style">
                  <div class="tw-w-full tw-flex tw-flex-col tw-gap-2">
                    <v-btn color="primary" text @click="select({}, selcted)">
                      Accept
                    </v-btn>
                    <v-btn color="primary" text @click="activePrompt = false">
                      Delete
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import store from './store'
export default {
  name: 'erp-table-search',
  components: {},
  props: {
    updateKey: Number,
    queryParams: {
      type: Object,
      default: () => {
        return {}
      }
    },
    value: String,
    name: String,
    tableOptions: Array,
    api: String,
    disabled: {
      type: Boolean,
      default: false
    },
    validate: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    api (api) {
      const queryParams = this.queryParams
      if (!this.$store.hasModule(this.moduleName)) {
        this.$store.registerModule(this.moduleName, store)
        this.$store.commit(`${this.moduleName}/registerModule`)
      }
      this.$store.dispatch(`${this.moduleName}/fetchTableData`, {
        ep: api,
        queryParams
      })
    },
    queryParams: {
      deep: true,
      handler (params) {
        const queryParams = params
        if (!this.$store.hasModule(this.moduleName)) {
          this.$store.registerModule(this.moduleName, store)
          this.$store.commit(`${this.moduleName}/registerModule`)
        }
        this.$store.dispatch(`${this.moduleName}/fetchTableData`, {
          ep: this.api,
          queryParams
        })
      }
    },
    updateKey () {
      const queryParams = this.queryParams
      if (this.$store.hasModule(this.moduleName)) {
        this.$store.dispatch(`${this.moduleName}/fetchTableData`, {
          ep: this.api,
          queryParams
        })
      }
    }
  },

  computed: {
    moduleName () {
      return `TEMP${this.name}`
    },
    tableModel () {
      return this.$store.getters[`${this.moduleName}/tableData`]
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
  data () {
    return {
      singleSelect: false,
      search: '',
      activePrompt: false,
      isRegistered: false,
      selcted: null
    }
  },
  methods: {
    selectRow (e, row) {
      row.select()
      this.selcted = row
    },
    select (e, item) {
      this.activePrompt = false
      if (item) this.$emit('select', item.item)
    }
  },
  created () {
    if (this.api) {
      if (!this.$store.hasModule(this.moduleName)) {
        this.$store.registerModule(this.moduleName, store)
      }
      this.$store.dispatch(`${this.moduleName}/fetchTableData`, {
        ep: this.api,
        queryParams: this.queryParams
      })
    }
  },
  beforeDestroy () {
    this.$store.unregisterModule(this.moduleName)
  }
}
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
