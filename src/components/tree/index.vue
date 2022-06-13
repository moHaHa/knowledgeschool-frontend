<template>
  <div
    class="tw-w-full tw-col-span-2 tw-p-4 my-form"
    style="background-color: #f8fcff"
  >
    <erp-input
      icon="search"
      icon-after="true"
      placeholder="search"
      class="
        inputx
        tree-search-input
        form-element
        tw-float-left tw-mx-auto
        tw-lg:mr-2
        tw-mb-2
      "
    />
    <h1
      style="font-weight: bold; font-size: 28px"
      class="mb-1 tw-text-secondary text-left"
    >
      Tree
    </h1>
    <p v-if="!treeModel.length" class="mb-1 text-left tw-text-secondary">
      No data for this tree yet .
    </p>
    <v-treeview
      :items="treeModel"
      item-text="name"
      activatable
      item-key="name"
      open-on-click
      item-children="childrens"
      color="primary"
    >
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.file">
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
        </v-icon>
        <v-icon v-else>
          {{ files[item.file] }}
        </v-icon>
      </template>
    </v-treeview>
  </div>
</template>
<script>
import store from './store'
export default {
  name: 'erp-tree',
  props: {
    options: Array,
    model: Array,
    name: String,
    ChartType: String,
    treedata: Array,
    api: String,
    updateKey: Number,
    queryParams: {
      type: Object,
      default: () => {}
    }
  },
  date () {
    return {
      isRegistered: false
    }
  },
  created () {
    if (this.api) {
      this.$store.registerModule(this.moduleName, store)
      this.$store.dispatch(`${this.moduleName}/fetchTreeData`, {
        ep: this.api
      })
      this.$store.commit(`${this.moduleName}/registerModule`)
      this.isRegistered = true
    }
  },
  beforeDestroy () {
    if (this.isRegistered) this.$store.unregisterModule(this.moduleName)
  },
  watch: {
    api (api) {
      if (!this.isRegistered) {
        this.$store.registerModule(this.moduleName, store)
        this.$store.commit(`${this.moduleName}/registerModule`)
        this.isRegistered = true
      }
      this.$store.dispatch(`${this.moduleName}/fetchTreeData`, { ep: api })
    },
    queryParams: {
      deep: true,
      handler () {
        if (!this.isRegistered) {
          this.$store.registerModule(this.moduleName, store)
          this.$store.commit(`${this.moduleName}/registerModule`)
          this.isRegistered = true
        }
        this.$store.dispatch(`${this.moduleName}/fetchTreeData`, {
          ep: this.api,
          queryParams: this.queryParams
        })
      }
    },
    updateKey () {
      if (this.isRegistered) {
        this.$store.dispatch(`${this.moduleName}/fetchTreeData`, {
          ep: this.api
        })
      }
    }
  },
  computed: {
    moduleName () {
      return `TEMP${this.name}`
    },
    treeModel () {
      return this.$store.getters[`${this.moduleName}/treeData`]
    }
  }
}
</script>
<style lang="scss">
.theme--light.v-icon {
  color: #6bcded;
}
</style>
