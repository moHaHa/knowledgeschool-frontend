<template>
  <div>
    <content-once
      :RecordsJSONPath="'data'"
      :existedRecordJSONPath="'data'"
      :vuexModuleName="endPoint"
      :endPoint="endPoint"
      :form="form"
    />
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
      endPoint: 'article',
      form: [{ field: 'title', display_name: 'title', type: 'text' }]
    }
  }
}
</script>
