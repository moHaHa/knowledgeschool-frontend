<template>
  <div class="tw-flex align-center justify-space-around">
    <v-btn @click="invokeParentMethod_deleteButton" x-small icon fab outlined color="primary"
      ><v-icon>mdi-close</v-icon></v-btn
    >
    <v-btn class="mx-2" @click="invokeParentMethod_editButton" x-small icon fab  outlined color="primary"
      ><v-icon>mdi-pencil</v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
  methods: {
    invokeParentMethod_editButton () {
      this.params.context.componentParent.editButton(this.params)
    },
    invokeParentMethod_deleteButton () {
      this.params.context.componentParent.openToDelete(this.params)
    }
  }
}
</script>

<style></style>
