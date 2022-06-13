<template>
  <v-app>
    <erp-header></erp-header>
    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

import erpHeader from '../components/erp-header'
export default {
  data () {
    return {
      namePascalCase: 'Docs'
    }
  },
  components: {
    'erp-header': erpHeader
  },
  computed: {},
  methods: {
    ...mapActions('Layout', ['fillActiveModule'])
  },
  created () {
    this.fillActiveModule({ namePascalCase: this.namePascalCase })
    
  }
}
</script>
<style>
div.theme--light.v-application {
  color: var(--v-text-black-base);
  /* color: red; */
}
div.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled)
  .v-list-item__content {
  color: var(--v-text-black-base);
}
.tabs-menue-others .v-list-item .v-list-item__title {
  color: var(--v-text-black-base);
}
</style>