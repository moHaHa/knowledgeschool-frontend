<template>
  <div>
    <div>{{ defaultCount }} items only here</div>
    <div class="group-type-one">
      <div
        class="px-2"
        :class="index <= defaultCount ? 'blue' : 'red'"
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item.name }} {{ index }}
      </div>
    </div>
    <div class="group-type-one mt-5">
      <div class="px-2" v-for="(item, index) in neededList" :key="index">
        {{ item.name }} {{ index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  },
  data () {
    return {
      defaultCount: 3
    }
  },
  computed: {
    neededList () {
      let copyOfItems = JSON.parse(JSON.stringify(this.items))
      let neededList = copyOfItems.splice(0, this.defaultCount + 1)
      return neededList
    }
  }
}
</script>

<style></style>
