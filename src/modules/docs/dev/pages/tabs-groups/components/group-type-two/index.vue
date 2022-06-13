<template>
  <div>
    <div>
      after {{ countOfUnNeededItems }} items have to show {{ itemsNeededCount }}
    </div>

    <div class="group-type-two">
      <div
        class="px-2"
        :class="index >= countOfUnNeededItems ? 'blue' : 'red'"
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item.name }} {{ index }}
      </div>
      <div class="small-group-count">asd</div>
    </div>

    <div class="group-type-two">
      <div class="px-2 blue" v-for="(item, index) in neededList" :key="index">
        {{ item.name }} {{ index }}
      </div>
      
    </div>
    <div class="group-type-two mt-5">
      <div
        class="small-group"
        v-for="(arrayGroup, index) in smallGroupArray"
        :key="index"
      >
      <div v-for="(cleanChild, i) in arrayGroup" :key="i">
          {{cleanChild.name}}
      </div>
      </div>
      
    </div>
    <div></div>
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
      countOfUnNeededItems: 3,
      smallGroupItemsCount: 3
      //   smallGroupArray: null
    }
  },
  computed: {
    neededList () {
      let copyOfItems = JSON.parse(JSON.stringify(this.items))
      let neededList = copyOfItems.splice(this.countOfUnNeededItems)
      return neededList
    },
    itemsNeededCount () {
      let itemsNeededCount = JSON.parse(
        JSON.stringify(this.items.length - this.countOfUnNeededItems)
      )
      return itemsNeededCount
    },
    smallGroupsCount () {
      let num = this.itemsNeededCount / this.smallGroupItemsCount
      let smallGroupsCount = null
      if (num % 1 === 0) {
        smallGroupsCount = JSON.parse(JSON.stringify(num))
      } else {
        smallGroupsCount = Math.floor(JSON.parse(JSON.stringify(num))) + 1
      }

      return smallGroupsCount
    },
    smallGroupArray () {
      let array = new Array()
      let countOfSets = JSON.parse(JSON.stringify(this.smallGroupItemsCount))
      let copyOfneededList = JSON.parse(JSON.stringify(this.neededList))
      let i = 0,
        n = copyOfneededList.length
      while (i < n) {
        array.push(copyOfneededList.slice(i, (i += countOfSets)))
      }
      return array
    }
  }
}
</script>

<style>
.small-group {
  border: 1px solid gold;
}
</style>
