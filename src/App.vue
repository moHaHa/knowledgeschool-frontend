<template>
  <router-view />
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters('Language', ['locale']),
    ...mapGetters('Colors', ['isThemeDark'])
  },
  created () {
    this.$i18n.locale = this.locale
    document.getElementsByTagName('html')[0].lang = this.locale
    if (this.locale === 'ar') this.$vuetify.rtl = true
    this.$vuetify.theme.dark = this.isThemeDark === 'true'
  }
}
</script>
<style lang="scss">
*:lang(ar) {
  font-family: "Tajawal", sans-serif !important;
}
@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
@import "~ag-grid-community/dist/styles/ag-grid.css";
@import "~ag-grid-community/dist/styles/ag-theme-alpine.css";
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
