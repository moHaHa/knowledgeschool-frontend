<template>
  <v-menu
    :nudge-right="10"
    :nudge-top="8"
    v-model="menu"
    offset-x
    open-on-click
    transition="slide-x-transition"
  >
    <template v-slot:activator="{ on, attrs, value }">
      <v-list-item
        v-on="on"
        v-bind="attrs"
        class="white black--text rounded"
        link
      >
        <v-list-item-title @click="fun">
          {{ itemChild.name }}
        </v-list-item-title>
        <v-list-item-icon
          :class="[value ? 'go-rotate-right' : 'go-rotate-down']"
        >
          <v-icon :class="[value ? 'tw-primary-text' : '']"
            >mdi-menu-down</v-icon
          >
        </v-list-item-icon>
      </v-list-item>
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

export default {
  name: 'folderItem',
  components: {
    singleItem
  },
  data () {
    return {
      menu: false
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

<style>
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
</style>