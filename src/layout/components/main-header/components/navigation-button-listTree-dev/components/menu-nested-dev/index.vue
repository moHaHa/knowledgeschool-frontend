<template>
  <v-menu
    :nudge-right="10"
    :nudge-top="0"
    v-model="menu"
    offset-x
    open-on-click
    transition="slide-x-transition"
  >
    <template v-slot:activator="{ on, attrs, value }">
      <div
        v-if="index < 2"
        v-on="on"
        v-bind="attrs"
        class="tree-tab-navigation"
        :class="[hover || value ? 'hover' : '']"
        link
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <v-icon class="tree-icon-nav">mdi-folder</v-icon>
        <div v-if="itemChild.name.length < 11" class="tree-tab-text">
          {{ itemChild.name }}
        </div>
        <div v-else class="tree-tab-text">
          {{ itemChild.name.substring(0, 11) + ".." }}
        </div>
        <v-icon
          :color="value || hover ? 'white' : 'light-black'"
          class="ms-auto tree-icon-nav"
          >mdi-menu-right</v-icon
        >
      </div>
    </template>
    <v-list max-width="300" min-width="300" class="doEditsList rounded">
      <component
        v-for="(item, index) in itemChild[childsProperty]"
        :key="index"
        :is="chooseComponent(item)"
        :itemChild="item"
        @chacha="fun"
        @chocho="fu"
        :path="path"
        :childsProperty="childsProperty"
      />
    </v-list>
  </v-menu>
</template>

<script>
import singleItem from '../single-item'
import folderItem from '../menu-nested'

export default {
  name: 'folderItemDev',
  components: {
    singleItem,
    folderItem
  },
  data () {
    return {
      menu: false,
      hover: false
    }
  },
  props: {
    itemChild: {
      type: Object
    },
    childsProperty: {
      type: String
    },
    path: {
      type: String
    },
    index: {
      type: Number
    }
  },
  methods: {
    fun () {
      this.$emit('chacha')
    },
    fu () {
      this.$emit('chocho')
    },

    chooseComponent (item) {
      if (item.type) {
        return 'singleItem'
      } else {
        return 'folderItem'
      }
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
  }
}
</script>

<style lang="scss">
.go-rotate-right {
  transform: rotate(-90deg);
  transition: all ease-in 0.2s;
}
.go-rotate-down {
  transform: rotate(0deg);
  transition: all ease-in 0.2s;
}
.v-menu__content.doEditsmenu.v-menu__content--fixed {
  box-shadow: 0px 3px 4px 0px rgb(0 0 0 / 11%) !important;
}
.doEditsList.h-40px {
  padding-block: 1rem;
}
.v-system-bar {
  .tree-tab-navigation {
    min-width: 104px;
    padding: 1px 3px;
    margin-bottom: 2px;
    display: flex;
    align-items: center;

    .tree-icon-nav.v-icon {
      color: var(--v-primary-base);
    }
    .tree-tab-text {
      font-size: 11px;
    }
  }
  .tree-tab-navigation {
    background-color: var(--v-white-base);
    transition: all 0.3s ease;
    border-radius: 4px;
    user-select: none;
  }
  .tree-tab-navigation.hover {
    transition: all 0.3s ease;
    background-color: var(--v-primary-base);
    color: var(--v-white-base);
    .v-icon {
      color: var(--v-white-base);
    }
  }
}
</style>