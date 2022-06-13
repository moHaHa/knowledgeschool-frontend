/* eslint-disable prefer-template */
<template>
  <v-list-item class="white black--text rounded" link @click="fun">
    {{ itemChild.name }}
  </v-list-item>
</template>

<script>
export default {
  props: {
    itemChild: {
      type: Object
    },
    path: {
      type: String
    }
  },
  methods: {
    fun () {
      this.$emit('chocho')

      // eslint-disable-next-file space-infix-ops
      // eslint-disable-next-file prefer-template

      let path = `/${this.path}/${this.itemChild.type}/${this.itemChild.id}`

      this.$router.push({
        path
      })
    }
  }
}
</script>

<style>
</style>