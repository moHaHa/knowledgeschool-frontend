import { mapMutations, mapGetters} from 'vuex'

export default {
  methods: {
    ...mapMutations('GlobalStore/Breadcrumbs', {
      setBreadcrumbs: 'set',
      pushBreadcrumb: 'push',
      popBreadcrumb: 'pop',
      replaceBreadcrumb: 'replace',
      emptyBreadcrumbs: 'empty'
    })
  },
  computed : {...mapGetters('GlobalStore/Breadcrumbs', ['breadcrumbs'])},
  beforeMount () {
    const fullPath = this.$route.path.split('/').slice(1)
    this.setBreadcrumbs(fullPath)
  }
}