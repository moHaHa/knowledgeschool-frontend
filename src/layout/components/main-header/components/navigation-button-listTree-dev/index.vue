<template>
  <div class="">
    <div>
      <component
        v-for="(item, index) in items"
        :key="index"
        :index="index"
        :is="'folderItemDev'"
        :itemChild="item"
        @chacha="fun"
        @chocho="fu"
        :childsProperty="childsProperty"
        :path="path"
      />
    </div>
    <div
      v-if="loader"
      class="
        body-border-item-link
        tw-bg-white
        active:tw-border-primary
        tw-border-transparent tw-border-1
        hover:tw-bg-light-flat-primary
        tw-rounded-lg
        navigation-button-link
      "
    >
      <div class="tw-block">
        <div class="tw-flex tw-justify-center">
          <div class="tw-px-3 tw-py-3 tw-flex tw-text-2xl">
            <v-progress-circular
              indeterminate
              :width="2"
              :size="24"
              color="primary"
            >
            </v-progress-circular>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="showTreeMore1">
      <v-menu class="doEditsmenu" :nudge-top="-3" offset-y v-model="tree">
        <template v-slot:activator="{ on, attrs, value }">
          <div
            :class="[value ? 'primary' : '']"
            class="tw-w-full showTreeMore tw-flex tw-justify-center"
            @click="fun(child)"
            v-on="on"
            v-bind="attrs"
          >
            <v-icon :color="value ? 'white' : ''">mdi-menu-down</v-icon>
          </div>
        </template>
        <v-list max-width="300" min-width="300" class="doEditsList rounded">
          <component
            v-for="(item, index) in items"
            :key="index"
            :is="chooseComponent(item)"
            :itemChild="item"
            @chacha="fun"
            @chocho="fu"
            :childsProperty="childsProperty"
            :path="path"
          />
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
import treeStore from './store'

import folderItem from './components/menu-nested'
import folderItemDev from './components/menu-nested-dev'
export default {
  components: {
    folderItemDev,
    folderItem
  },
  props: {
    child: {
      type: Object
    },
    index: {
      type: Number
    },
    num: {
      type: Number
    },
    api: {
      type: String
    },
    name: {
      type: String
    },
    treeList: {
      type: Array
    },
    childsProperty: {
      type: String
    },
    path: {
      type: String
    }
  },
  watch: {
    api (api) {
      if (!this.isRegistered) {
        this.$store.registerModule(this.moduleName, treeStore)
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
      if (!this.api) {
        return this.treeList
      } else {
        return this.$store.getters[`${this.moduleName}/treeList`]
      }
    },
    loader () {
      return this.$store.getters[`${this.moduleName}/loader`]
    }
  },
  methods: {
    fun () {},
    fu () {
      this.tree = false
    },
    chooseComponent () {
      return 'folderItem'
    }
  },
  created () {
    if (this.api) {
      this.$store.registerModule(this.moduleName, treeStore)
      this.$store.dispatch(`${this.moduleName}/fetchOptions`, { ep: this.api })
      this.$store.commit(`${this.moduleName}/registerModule`)
      this.isRegistered = true
    }
  },
  mounted () {
    let doEditsmenu = document.querySelectorAll('.v-menu__content')
    doEditsmenu.forEach((el) => {
      if (el.firstElementChild.classList.contains('doEditsList')) {
        el.classList.add('doEditsmenu')
      }
    })
  },
  updated () {
    let doEditsmenu = document.querySelectorAll('.v-menu__content')
    doEditsmenu.forEach((el) => {
      if (el.firstElementChild.classList.contains('doEditsList')) {
        el.classList.add('doEditsmenu')
      }
    })
  },
  beforeDestroy () {
    this.$store.unregisterModule(this.moduleName)
  },
  data () {
    return {
      tree: false
    }
  }
}
</script>
<style lang="scss">
.v-system-bar {
  .showTreeMore1 {
    transition: all 0.3s ease;
    line-height: 7px;
  }
  .showTreeMore {
    transition: all 0.3s ease;
    line-height: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 8px;
    padding-top: 2px;
    .v-icon {
      transition: all 0.3s ease;
      line-height: 7px;
      margin: 0;
    }
  }
}
</style>