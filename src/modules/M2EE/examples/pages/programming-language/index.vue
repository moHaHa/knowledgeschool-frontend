<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <content-once :vuexModuleName="endPoint" :endPoint="endPoint" />
      </template>
      <template v-slot:rightSide> </template>
    </main-page>
  </div>
</template>

<script>
import content from '@/components/SVC/content'
export default {
  components: {
    'content-once': content
  },
  data () {
    return {
      endPoint: 'skills'
    }
  }
}
</script>
