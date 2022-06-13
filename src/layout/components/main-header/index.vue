<template>
  <div>
    <div class="erp-module-navigatoin-parent">
      <div
        v-resize="onResize"
        id="erp-module-navigatoin"
        class="main-header tw-flex tw-t-0"
        :class="type === 'absolute' ? 'main-header-absolute' : ''"
      >
        <div
          v-for="(item, i) in list"
          :key="i"
          class="tw-flex-auto border-item tw-flex tw-justify-end tw-flex-col"
        >
          <div class="body-border-item">
            <div class="tw-py-2 tw-flex tw-justify-around">
              <component
                :is="chosseComponent(child.type)"
                v-for="(child, i) in item.childs"
                :index="i"
                :child="child"
                :key="i"
                :num="num"
                :api="child.api"
                :name="child.nameTree"
                :path="child.path"
                :childsProperty="child.childsProperty"
                v-show="i < num"
              />
            </div>
          </div>
          <div class="footer-border-item">
            <div class="tw-flex tw-justify-between tw-w-full tw-h-full tw-pb-1">
              <div class="tw-px-2 tw-opacity-0">
                <v-icon class="justify-center tw-flex">mdi-arrow-down</v-icon>
              </div>
              <div>{{ item.nameitem }}</div>
              <!-- <div class="tw-px-2 tw-cursor-pointer tw-mt-1">
              <v-icon class="justify-center tw-flex">mdi-chevron-down</v-icon>
            </div> -->
              <v-menu
                transition="slide-x-transition"
                :nudge-top="0"
                :nudge-right="-30"
                rounded="lg"
                max-width="300"
                min-width="300"
                offset-x
                offset-y
              >
                <template v-slot:activator="{ attrs, on }">
                  <!-- <v-btn
                    :color="colors[index]"
                    class="white--text ma-5"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ text }} Radius
                  </v-btn> -->
                  <div
                    v-if="checkLength(item.childs)"
                    @click="showLinksDialog(item.childs)"
                    :class="'tw-px-2 tw-cursor-pointer tw-mt-1'"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon
                      class="justify-center tw-flex"
                      v-if="checkLength(item.childs)"
                      >mdi-chevron-down</v-icon
                    >
                  </div>
                  <div v-else class="tw-px-2 tw-mt-1">
                    <div class="px-2"></div>
                  </div>
                </template>

                <v-list class="tabs-menue-others">
                  <template v-for="(child, index) in linkList">
                    <v-list-item
                      v-if="index >= num"
                      :to="child.path"
                      :key="index"
                    >
                      <v-list-item-icon>
                        <v-icon v-text="child.iconName"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="child.nameChild">
                          {{ index }}</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-menu>
            </div>
          </div>
        </div>
        <div>
          <div class="tw-w-full tw-h-full d-flex align-end px-2 py-3">
            <div>
              <div class="tw-cursor-pointer" @click="togglePin">
                <v-icon
                  :class="headerType === 'absolute' ? 'pin-rotet' : ''"
                  :color="headerType === 'absolute' ? '' : 'primary'"
                >
                  mdi-pin
                </v-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-bottom-sheet v-model="sheet">
      <div>
        <div class="body-border-item tw-bg-white tw-p-3">
          <div
            @click="closeSheet"
            class="
              tw-py-2 tw-grid tw-grid-cols-3
              xs:tw-grid-cols-2
              sm:tw-grid-cols-3
              md:tw-grid-cols-8
              lg:tw-grid-cols-12
              tw-gap-4
            "
          >
            <router-link
              :to="child.path"
              v-for="(child, i) in linkList"
              :key="i"
              class="tw-py-1"
            >
              <div class="tw-mx-2 tw-px-2">
                <div class="tw-flex tw-flex-wrap tw-justify-center">
                  <v-icon
                    class="tw-text-primary tw-flex tw-justify-center tw-font-xl"
                    >{{ child.iconName }}
                  </v-icon>
                </div>
                <div class="tw-flex tw-justify-center tw-text-center">
                  {{ child.nameChild }}
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </v-bottom-sheet>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import navigationButtonLink from './components/navigation-button-link'

import navigationButtonlistTreeDev from './components/navigation-button-listTree-dev'
export default {
  components: {
    'navigation-button-link': navigationButtonLink,
    'navigation-button-listTree-dev': navigationButtonlistTreeDev
  },
  props: {
    list: {
      type: [Array, Object]
    },
    type: {
      type: String
    }
  },
  data () {
    return {
      pin: false,
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-forum' }
      ],
      treeSide: true,
      bottomSheetState: null,
      windowSize: {
        x: 0,
        y: 0
      },
      num: 5,
      value: 1,
      showFooter: true,
      sheet: false
    }
  },
  computed: {
    ...mapGetters('Layout', {
      linkList: 'linkList',
      headerType: 'headerType'
    })
  },
  methods: {
    togglePin () {
      if (this.headerType === 'fixed') {
        this.changeHeaderType('absolute')
        this.autoChangeHeaderHeight()
      } else {
        this.changeHeaderType('fixed')
        this.autoChangeHeaderHeight()
      }
    },

    ...mapActions('Layout', {
      fillLinkList: 'fillLinkList',
      changeHeaderType: 'changeHeaderType',
      changeHeaderHeight: 'changeHeaderHeight',
      autoChangeHeaderHeight: 'autoChangeHeaderHeight'
    }),

    showLinksDialog (newArray) {
      this.fillLinkList({ array: newArray })
      // this.sheet = true
    },

    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      if (this.windowSize.x >= 1920) {
        this.num = 5
      } else if (this.windowSize.x >= 1400) {
        this.num = 5
      } else if (this.windowSize.x >= 1200) {
        this.num = 5
      }
    },
    checkLength (array) {
      if (array.length > this.num) {
        return true
      } else {
        return false
      }
    },
    closeSheet () {
      this.sheet = false
    },
    chosseComponent (type) {
      let componentName = null
      switch (type) {
      case 'listTree':
        componentName = 'navigation-button-listTree-dev'
        break

      default:
        componentName = 'navigation-button-link'
        break
      }
      return componentName
    }
  },
  mounted () {
    this.onResize()
  }
}
</script>

<style lang="scss">
div.erp-module-navigatoin-parent {
  position: relative;
  z-index: 8;
}
div#erp-module-navigatoin.main-header.main-header-absolute {
  position: absolute;
  width: 100%;
  z-index: 10;
}
div#erp-module-navigatoin.main-header {
  padding: 5px 4px;
  background-color: var(--v-dark-white-base);
  border-radius: 8px;
  .border-item {
    // background-color: var(--v-gray-four-base);
    background-color: var(--v-gray-three-base);
    // background-color: #ededed;
    border-radius: 8px;
    margin-inline: 2px;
  }
  .body-border-item {
    border-start-end-radius: 8px;
    border-start-start-radius: 8px;
    .navigation-button-link {
      color: var(--v-primary-base);
    }
  }
  .footer-border-item {
    // padding-block: 3px !important;
    border-radius: 8px;
    background-color: var(--v-white-base);
  }
  .body-border-item-link {
    transition: all ease-out 2s;
  }
}
.v-list.tabs-menue-others {
  background-color: var(--v-white-base);
}
.v-list.tabs-menue-others .v-list-item.v-list-item--active {
  color: var(--v-primary-base) !important;
}
.pin-rotet {
  transition: all 0.2s ease-in;
  transform: rotate(45deg) translateY(-3px);
}
// .main-header-overly {
//   position: absolute;
//   width: 100%;
//   z-index: 8;
// }
// .main-header-overly {
//   display: flex !important;
// }
</style>
