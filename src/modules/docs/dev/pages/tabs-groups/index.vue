<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div class="d-flex">
          <div>
            <div class="d-flex justify-center">list</div>
            <div class="list">
              <div class="px-2" v-for="(item, index) in list" :key="index">
                {{ item.name }} {{ index }}
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div>
            <div class="d-flex justify-center">list</div>
            <div class="list">
              <group-type-one :items="list" />
              <group-type-two :items="list" />
              
              
            </div>
          </div>
        </div>
      </template>
      <template v-slot:rightSide> </template>
    </main-page>
  </div>
</template>

<script>
import groupTypeOne from './components/group-type-one'
import groupTypeTwo from './components/group-type-two'
export default {
  components: {
    'group-type-one': groupTypeOne,
    'group-type-two': groupTypeTwo
  },
  data () {
    return {
      list: [
        { name: 'one' },
        { name: 'two' },
        { name: 'three' },
        { name: 'four' },
        { name: 'five' },
        { name: 'six' },
        { name: 'seven' },
        { name: 'eight' },
        { name: 'nine' },
        { name: 'ten' },
        { name: 'eleven' },
        { name: 'twelve' },
        { name: 'last' }
      ]
    }
  }
}
</script>
<style>
div.list {
  display: flex;
  padding: 4px 15px;
  border: 1px solid white;
}
div.group-type-one {
  border: 1px solid purple;
  display: flex;
}
div.group-type-two {
  border: 1px solid rgb(28, 176, 187);
  display: flex;
}
</style>
