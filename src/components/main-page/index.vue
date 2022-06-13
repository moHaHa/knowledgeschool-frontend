<template>
  <div>
    <v-main :style="{ paddingTop: `${headerHeight}px` }">
      <div class="tw-w-full tw-h-full tw-px-3">
        <div class="tw-py-4 tw-px-2 tw-w-full tw-h-full dark-white rounded-lg">
          <slot name="toolbar"></slot>
          <div v-if="langVisible">
            <v-tabs v-model="activeLangTab" class="tw-mt-4 langbar">
              <!-- <v-tabs-slider></v-tabs-slider> -->
              <v-tab v-for="(lang, i) in languages" :key="i">
                {{ $t(lang.label) }}
              </v-tab>
            </v-tabs>
          </div>
          <div class="tw-p-2">
            <div class="main-content">
              <slot name="main" :activeLanguage="activeLang"></slot>
            </div>
          </div>
        </div>
      </div>
    </v-main>

    <v-navigation-drawer
      v-if="drawerRightVisible"
      :style="{ top: `${headerHeight}px` }"
      class="erp-v-navigation-drawer-right dark-white"
      app
      v-model="drawerRight"
      :mini-variant.sync="miniDrawerRight"
      :right="!$vuetify.rtl"
      width="300"
    >
      <div>
        <div class="px-2 py-2 d-flex tw-justify-between">
          <div
            class="tw-flex tw-justify-start"
            :class="!miniDrawerRight ? 'tw-w-full' : ''"
          >
            <div class="">
              <button
                class="mini-drawer-left-button white rounded"
                @click="toggleRight"
              >
                <v-icon
                  small
                  class="primary--text"
                  :class="miniDrawerRight ? 'rotateRightDrawer' : ''"
                >
                  mdi-arrow-right-circle-outline
                </v-icon>
              </button>
            </div>
          </div>
          <div>
            <div v-if="!miniDrawerLeft">
              <div class="mini-drawer-left-search-inpur-container"></div>
            </div>
          </div>
        </div>
        <div class="mini-drawer-left-container-border"></div>
      </div>

      <div
        class="mini-drawer-white-area-p white rounded-lg px-2 py-2 mx-2 my-2"
        v-if="!miniDrawerRight"
      >
        <div class="mini-drawer-white-area">
          <slot name="rightSide"></slot>
        </div>
      </div>
    </v-navigation-drawer>
    <v-navigation-drawer
      :right="$vuetify.rtl"
      class="erp-v-navigation-drawer-left dark-white"
      app
      :style="{ top: `${headerHeight}px` }"
      v-model="drawerLeft"
      :mini-variant.sync="miniDrawerLeft"
      permanent
      width="300"
      mini-variant-width="58"
      v-if="drawerLeftVisible"
    >
      <div>
        <div class="px-2 py-2 d-flex tw-justify-between">
          <div>
            <div v-if="!miniDrawerLeft">
              <div class="mini-drawer-left-search-inpur-container">
                <input class="mini-drawer-left-search-inpur" />
              </div>
            </div>
          </div>
          <div
            class="tw-flex tw-justify-end"
            :class="!miniDrawerLeft ? 'tw-w-full' : ''"
          >
            <div class="">
              <button
                class="mini-drawer-left-button white rounded"
                @click="toggleLeft"
              >
                <v-icon
                  small
                  class="primary--text"
                  :class="miniDrawerLeft ? 'rotateLeftDrawer' : ''"
                >
                  mdi-arrow-left-circle-outline
                </v-icon>
              </button>
            </div>
          </div>
        </div>
        <div class="mini-drawer-left-container-border"></div>
      </div>

      <div class="mini-drawer-white-area-p tw-flex">
        <div class="mini-drawer-left-tab-container ms-2 my-2">
          <div class="mb-2" v-for="(tab, index) in tabs" :key="index">
            <button
              @click="setActiveTab(index)"
              class="mini-drawer-left-tabs-button rounded"
              :class="index === activeTabIndex ? 'active-tab-sideleft' : ''"
            >
              <v-icon
                small
                :class="
                  index === activeTabIndex ? 'primary--text' : 'black--text'
                "
              >
                {{ tab.icon }}
              </v-icon>
            </button>
          </div>
        </div>
        <div
          class="white rounded-lg px-2 py-2 mx-2 my-2 tw-w-full"
          v-if="!miniDrawerLeft"
        >
          <div class="mini-drawer-white-area white">
            <div v-if="activeTabIndex === 0">
              <slot name="leftSide"></slot>
            </div>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import langStore from './store'

export default {
  name: 'main-page',
  props: {
    langVisible: {
      type: Boolean,
      default: () => false
    },
    drawerRightVisible: {
      type: Boolean,
      default: () => true
    },
    drawerLeftVisible: {
      type: Boolean,
      default: () => true
    }
  },
  data () {
    return {
      tabs: [
        { icon: 'mdi-file-tree-outline' },
        { icon: 'mdi-pencil-box-multiple-outline' },
        { icon: 'mdi-shape-square-rounded-plus' },
        { icon: 'mdi-chart-box-outline' },
        { icon: 'mdi-calendar-account' },
        { icon: 'mdi-newspaper-variant-multiple' }
      ],
      activeTabIndex: 0,
      bottomPartTabsContent: [],
      activeLangTab: 0,
      systemBarAppSwitch: false,
      drawerLeft: null,
      drawerRight: null,
      miniDrawerLeft: false,
      miniDrawerRight: false,
      mini: true,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam']
      ],
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' }
      ],
      rotateIt: false
    }
  },
  watch: {
    systemBarAppSwitch (newVal) {
      this.fillSystemBarApp({ boolean: newVal })
    },
    miniDrawerLeft (status) {
      if (status === true) {
        this.activeTabIndex = null
      }
    },
    headerHeight () {
      console.log(this.headerHeight)
    }
  },
  computed: {
    ...mapGetters('HR/Hiring/Page', {
      systemBarApp: 'systemBarApp'
    }),

    ...mapGetters('Layout', ['headerHeight', 'activeModule']),
    ...mapGetters('ContentLanguage', ['languages']),
    activeLang () {
      return this.languages[this.activeLangTab]
    }
  },
  methods: {
    setActiveTab (index) {
      this.activeTabIndex = index
    },
    ...mapActions('HR/Hiring/Page', {
      fillSystemBarApp: 'fillSystemBarApp'
    }),
    clickOutLeftSide () {
      this.mini = true
    },
    toggleRight () {
      this.miniDrawerRight = !this.miniDrawerRight
    },
    toggleLeft () {
      this.miniDrawerLeft = !this.miniDrawerLeft
    }
  },
  created () {
    if (!this.$store.hasModule('ContentLanguage')) this.$store.registerModule('ContentLanguage', langStore)
  },
  mounted () {
    if (!this.$store.hasModule('ContentLanguage')) this.$store.registerModule('ContentLanguage', langStore)
  },
  destroyed () {
    if (this.$store.hasModule('ContentLanguage')) this.$store.unregisterModule('ContentLanguage')
  }
}
</script>

<style>
.rotateRightDrawer {
  transform: rotate(180deg);
  transition: all 0.2s ease;
}
.rotateLeftDrawer {
  transform: rotate(180deg);
  transition: all 0.2s ease;
}
.rotateRightDrawer {
  transform: rotate(-180deg);
  transition: all 0.2s ease;
}
.v-application--wrap {
  background-color: var(--v-gray-three-base);
}
.erp-v-navigation-drawer-left {
  /* border-start-end-radius: 8px;
  border-end-end-radius: 8px;
  border-end-end-radius: 8px;
  border-end-end-radius: 8px; */
  border-radius: 8px;
}
.erp-v-navigation-drawer-right {
  /* border-start-start-radius: 8px;
  border-end-start-radius: 8px; */
  border-radius: 8px;
}
.v-navigation-drawer__border {
  display: none;
}
.v-navigation-drawer--right {
  right: 7px !important;
}
.erp-v-navigation-drawer-left {
  left: 7px !important;
}
.v-navigation-drawer--right.erp-v-navigation-drawer-left {
  left: auto !important;
  right: 7px !important;
}
.mini-drawer-left-button {
  padding: 10px 12px;
  font-size: 14px;
}
.mini-drawer-left-button {
  background-color: var(--v-white-base);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.103);
  transition: all 0.5s ease-in-out;
}
.mini-drawer-left-button:active {
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.103);
}
.mini-drawer-button-tab {
  padding: 10px 12px;
  font-size: 14px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.103);
  background-color: var(--v-white-base);
  transition: all 0.5s ease-in-out;
}
.mini-drawer-left-search-inpur-container {
  min-width: 238px;
}

.mini-drawer-left-search-inpur {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.103);
  width: 100%;
  /* border: 1px solid black; */
  border-color: var(--v-border-gray-base);
  transition: all 0.1s ease-in-out;
  border-radius: 4px;
  padding: 8px 20px;
  height: 41px;
  background-color: var(--v-white-base);
}
.mini-drawer-left-search-inpur:focus {
  transition: all 0.1s ease-in-out;
  border-color: var(--v-primary-base);
  outline: none;
}
.mini-drawer-left-container-border {
  border-bottom: 2px solid var(--v-primary-base);
  opacity: 0.4;
}
.mini-drawer-white-area-p {
  height: calc(100% - 75px);
}
.mini-drawer-white-area {
  height: calc(100%);
  overflow: scroll;
  scrollbar-color: var(--v-seashell-base) var(--v-white-base);
  scrollbar-width: thin;
}

.mini-drawer-white-area::-webkit-scrollbar-thumb {
  background-color: var(--v-white-base);
}
.mini-drawer-white-area::-webkit-scrollbar-thumb {
  background-color: var(--v-white-base);
}
.mini-drawer-white-area::-webkit-scrollbar-button {
  background-color: var(--v-white-base);
}
.mini-drawer-white-area::-webkit-scrollbar-thumb {
  background-color: var(--v-white-base);
}
.mini-drawer-white-area::-webkit-scrollbar-track {
  background-color: var(--v-white-base);
}
.mini-drawer-white-area::-webkit-scrollbar-track-piece {
  background-color: var(--v-white-base);
}
.mini-drawer-white-area::-webkit-resizer {
  background-color: var(--v-white-base);
}
.mini-drawer-white-area::-webkit-scrollbar-corner {
  background-color: var(--v-white-base);
}
/* Works on Chrome, Edge, and Safari */
.mini-drawer-white-area::-webkit-scrollbar {
  width: 8px;
}

.mini-drawer-white-area::-webkit-scrollbar-track {
  background-color: var(--v-white-base);
}

.mini-drawer-white-area::-webkit-scrollbar-thumb {
  background-color: var(--v-seashell-base);
  /* border: 1px solid var(--v-primary-base); */
  border-radius: 20px;
}
.mini-drawer-left-tab-container {
  width: fit-content;
}
.mini-drawer-left-tabs-button {
  background-color: var(--v-seashell-base);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.103);

  transition: all 0.2s ease-in;
  padding: 10px 12px;
  font-size: 14px;
  border-inline-start-width: 3px;
  border-color: transparent;
  border-style: solid;
}
.active-tab-sideleft {
  border-color: var(--v-primary-base);
}
</style>
<style lang="scss">
@import "./style.scss";
</style>
