<template>
  <div class="ERP-Modules-List tw-w-full">
    <div class="tw-flex ERP-Modules-Item-All">
      <div class="tw-mx-4 tw-align-center tw-flex Logo-Container">
        <router-link to="/" class="tw-w-full tw-flex align-center">
          <logoSvg v-if="!globalLoading" width="188" height="30" />
          <logoSvgLoading v-if="globalLoading" width="188" height="30" />
        </router-link>
      </div>

      <div style="width: 90%">
        <v-slide-group class="tw-w-full" show-arrows>
          <router-link
            v-for="(erpModule, index) in modulesList"
            :key="index"
            :to="erpModule.path"
            class="
              ERP-Modules-Item
              tw-rounded tw-text-sm tw-transition tw-border-solid
            "
          >
            <div class="tw-w-full tw-h-full">
              {{ erpModule.name }}
            </div>
          </router-link>
        </v-slide-group>
      </div>
      <div>
        <ApiDataDialog />
      </div>
    </div>
  </div>
</template>

<script>
import logoSvg from '@/assets/images/logo/logoSvg.vue'
// import logoSvgLoading from '@/assets/images/logo/logoSvgLoading.vue'

import { mapGetters } from 'vuex'
import ApiDataDialog from '../api-data-dialog'
export default {
  components: {
    logoSvg,
    // logoSvgLoading,
    ApiDataDialog
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters('Layout', {
      activeModule: 'activeModule',
      modulesList: 'modulesList'
    }),
    activeClasses () {
      return ['bg-primary', 'text-white']
    },
    notActiveClasses () {
      return ['bg-white', 'text-dark-blue']
    }
  },
  methods: {},
  created () {}
}
</script>

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
  padding-block-end: 3px;
}
.ERP-Modules-List {
  border-bottom: 5px solid var(--v-cool-black-base);
}
</style>
