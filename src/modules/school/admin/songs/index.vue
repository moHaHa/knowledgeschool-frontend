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
      endPoint: 'song',
      form: [
        { field: 'title', display_name: 'title', type: 'text' },
        { field: 'image', display_name: 'image', type: 'iamge' },
        { field: 'url', display_name: 'url', type: 'text' },
        ]
    }
  }
}
</script>
