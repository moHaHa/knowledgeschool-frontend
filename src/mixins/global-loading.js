import { mapActions, mapGetters } from 'vuex'
export const globalLoading = {
  computed: {
    ...mapGetters('Layout', ['globalLoading'])
  },
  methods : {
    ...mapActions('Layout', ['changeGlobalLoading'])
  }
}