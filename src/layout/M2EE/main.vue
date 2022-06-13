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
      namePascalCase: 'M2EE'
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
