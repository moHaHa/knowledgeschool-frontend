<template>
  <v-system-bar
    class="tw-flex-col tw-px-0 erp-v-system-bar"
    app
    :height="headerHeight"
    @mouseenter="mouseEnterHeader"
    @mouseleave="mouseLeaveHeader"
  >
    <div class="tw-w-full tw-h-full v-system-bar-container">
      <div class="tw-w-full tw-mb-auto">
        <div class="ERP-Modules-List tw-w-full">
          <div class="tw-flex ERP-Modules-Item-All">
            <div class="tw-mx-4 tw-align-center tw-flex Logo-Container">
              <router-link to="/" class="tw-w-full tw-flex align-center">
                <logoSvg v-if="!globalLoading" width="188" height="30" />
                <logoSvgLoading v-if="globalLoading" width="188" height="30" />
              </router-link>
            </div>

            <div>
              <v-slide-group
                v-click-outside="{
                  handler: makeHeaderUnVisible,
                  include: keepHeaderVisible,
                }"
                class="tw-w-full"
                show-arrows
              >
                <div
                  @click="makeHeaderVisible(erpModule)"
                  v-for="(erpModule, index) in modulesList"
                  :key="index"
                  :class="[
                    erpModule.namePascalCase === headerListNamePascalCase
                      ? 'ERP-Modules-Item-active'
                      : '',
                  ]"
                  class="
                    ERP-Modules-Item
                    tw-rounded tw-text-sm tw-transition tw-border-solid
                  "
                >
                  <div class="tw-w-full tw-h-full">
                    {{ $t(erpModule.name) | taareef }}
                  </div>
                </div>
              </v-slide-group>
            </div>
            <div
              class="tw-mr-1 tw-space-x-1"
              :class="$vuetify.rtl ? 'tw-mr-auto' : 'tw-ml-auto'"
            >
              <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn color="primary" v-on="tooltip" icon @click="setTheme">
                    <!-- <v-icon class="light-dark-icon-theme cool-black--text tw-text-md"> mdi-weather-night </v-icon> -->
                    <v-icon
                      v-if="$vuetify.theme.dark"
                      class="light-dark-icon-theme"
                    >
                      mdi-weather-sunny
                    </v-icon>
                    <v-icon v-else class="light-dark-icon-theme">
                      mdi-weather-night
                    </v-icon>
                    <!-- <v-icon class="light-dark-icon-theme cool-black--text"> mdi-theme-light-dark </v-icon> -->
                  </v-btn>
                </template>
                <span>{{ $t("theme") | capitalize | taareef }}</span>
              </v-tooltip>
              <!-- <v-menu>
                <template v-slot:activator="{ on: menu, attrs }">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on: tooltip }">
                      <v-btn
                        v-bind="attrs"
                        v-on="{ ...tooltip, ...menu }"
                        small
                        icon
                        color="primary"
                      >
                        <v-icon>mdi mdi-invert-colors</v-icon>
                </v-btn>
                    </template>
                    <span>{{ $t('theme') }}</span>
                  </v-tooltip>
                </template>
                <v-list>
                  <v-list-item
                    @click="setTheme(theme)"
                    v-ripple
                    v-for="(theme, index) in themes"
                    :key="index"
                  >
                    <v-list-item-title>{{ $t(theme.label) }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu> -->

              <v-menu>
                <template v-slot:activator="{ on: menu, attrs }">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on: tooltip }">
                      <v-btn
                        v-bind="attrs"
                        v-on="{ ...tooltip, ...menu }"
                        class="tw-ml-auto"
                        small
                        icon
                        color="primary"
                      >
                        <v-icon v-if="$i18n.locale === 'ar'"
                          >mdi mdi-abjad-arabic</v-icon
                        >
                        <v-icon v-if="$i18n.locale === 'en'"
                          >mdi mdi-alphabet-latin</v-icon
                        >
                      </v-btn>
                    </template>
                    <span>{{ $t("language") | capitalize | taareef }}</span>
                  </v-tooltip>
                </template>
                <v-list>
                  <v-list-item
                    @click="setLocale(language)"
                    v-ripple
                    v-for="(language, index) in locales"
                    :key="index"
                  >
                    <v-list-item-title>{{
                      $t(language.label)
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <transition name="slide-fade">
            <MainHeader
              v-if="headerType === 'absolute'"
              v-show="showHeader"
              class="absolute-header-type erp-module-navigatoin-main-header"
              :list="headerList"
              :type="headerType"
            />
            <MainHeader
              v-else
              class="absolute-header-type erp-module-navigatoin-main-header"
              :list="headerList"
              :type="headerType"
            />
          </transition>
          <div class="tw-px-4">
            <div class="erp-tabs-group">
              <transition-group name="list-complete" tag="div">
                <div
                  v-for="(tab, index) in tabs"
                  :key="tab.timestamp"
                  class="list-complete-item"
                >
                  <erp-tab-group-item :index="index" :tab="tab" />
                </div>
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-system-bar>
</template>

<script>
import logoSvg from '@/assets/images/logo/logoSvg.vue'
import logoSvgLoading from '@/assets/images/logo/logoSvgLoading.vue'
import erpTabGroupItem from './components/tab'
import MainHeader from '../main-header'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  components: {
    MainHeader,
    logoSvg,
    logoSvgLoading,
    'erp-tab-group-item': erpTabGroupItem
  },
  data () {
    return {
      list: [],
      indexNumActive: null,
      showHeader: false,
      moduleName: null,
      mouseIsOut: true
    }
  },
  computed: {
    ...mapGetters('Layout', [
      'modulesList',
      'headerList',
      'headerListNamePascalCase',
      'headerHeight',
      'headerType',
      'activeModule'
    ]),
    ...mapGetters('Layout/Tabs', ['tabs', 'activeTabIndex', 'hasTabs']),
    ...mapGetters('Colors', ['themes', 'activeTheme']),
    ...mapGetters('Language', ['locales'])
  },
  methods: {
    ...mapMutations('Layout', ['setHeaderList', 'setHeaderListNamePascalCase']),
    ...mapMutations('Layout/Tabs', ['changeActiveTabIndex']),
    ...mapActions('Layout/Tabs', ['addTab', 'removeTab']),
    ...mapActions('Layout', ['autoChangeHeaderHeight']),
    mouseLeaveHeader () {
      if (this.headerType === 'absolute' && this.showHeader === true) {
        this.mouseIsOut = true
        setTimeout(() => {
          if (this.mouseIsOut) {
            this.showHeader = false
            this.setHeaderListNamePascalCase(null)
          }
        }, 3000)
      }
    },
    mouseEnterHeader () {
      if (this.headerType === 'absolute' && this.showHeader === true) {
        this.mouseIsOut = false
        this.showHeader = true
      }
    },
    ...mapActions('Language', ['changeLocale']),
    ...mapActions('Colors', ['changeTheme']),

    setTheme () {
      if (this.$vuetify.theme.dark === false) {
        this.changeTheme({
          app: this,
          theme: { lable: 'dark', value: 'dark' }
        })
      } else {
        this.changeTheme({
          app: this,
          theme: { lable: 'light', value: 'light' }
        })
      }
      // this.changeTheme({ app: this, theme: { lable: 'dark', value: 'dark' } })
      // } else {

      // this.changeTheme({ app: this, theme: { lable: 'light', value: 'light' } })
      // }
      // this.changeTheme({ app: this, theme })
      //
      // this.changeTheme({ app: this, theme })
    },
    setLocale (locale) {
      this.changeLocale({ app: this, locale })
    },
    makeHeaderVisible (module) {
      this._selectModule(module)
      this.showHeader = true
    },
    makeHeaderUnVisible () {
      // this.setHeaderList(null)
      if (this.headerType === 'absolute') {
        this.setHeaderListNamePascalCase(null)
      }
      this.showHeader = false
    },
    keepHeaderVisible () {
      return [document.querySelector('.erp-module-navigatoin-main-header')]
    },
    _selectModule (module) {
      this.setHeaderList(
        this.$store.getters[`Layout/Data/${module.namePascalCase}/list`]
      )
      this.setHeaderListNamePascalCase(module.namePascalCase)
    }
  },
  created () {
    this.autoChangeHeaderHeight()
  }
}
</script>

<style lang="scss">
.v-system-bar.tw-px-0 {
  padding-inline: 0 !important;
}
.erp-v-system-bar.v-system-bar--fixed {
  z-index: 7;
}
.list-complete-item {
  transition: all 0.2s;
  display: inline-block;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.v-application--is-rtl {
  .list-complete-enter,
  .list-complete-leave-to {
    transform: translateX(+30px);
  }
}

.list-complete-leave-active {
  position: absolute;
}
</style>
<style>
.ERP-Modules-Item {
  margin-inline-end: 4px;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
}
.ERP-Modules-Item > div {
  padding: 5px 10px;
}
.ERP-Modules-Item-All {
  padding-bottom: 3px;
}
.ERP-Modules-Item-All .ERP-Modules-Item:last-child {
  border-end-end-radius: 5px;
  border-start-end-radius: 5px;
}
.ERP-Modules-Item-All .ERP-Modules-Item:first-child {
  border-end-start-radius: 5px;
  border-start-start-radius: 5px;
}
.Logo-Container {
  width: 120px;
}
.ERP-Modules-List .v-slide-group__prev {
  transform: translateX(2rem);
  z-index: 1;
  padding-inline-end: 2rem;
}
.ERP-Modules-List {
  padding-block-start: 7px;
  padding-block-end: 0;
}
.ERP-Modules-List {
  border-bottom: 5px solid var(--v-primary-base);
}
.erp-tabs-group {
  display: flex;
  padding: 5px 10px 0;
}
.erp-module-navigatoin-main-header {
  z-index: 9;
}
</style>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.light-dark-icon-theme {
  transition: all 0.5s ease-in-out;
}
</style>