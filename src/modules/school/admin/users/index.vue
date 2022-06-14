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
        { field: 'name', display_name: 'name', type: 'text' },
        { field: 'email', display_name: 'email', type: 'text' },
        { field: 'password', display_name: 'password', type: 'text' },
        { field: 'phone', display_name: 'phone', type: 'text' },
        { field: 'address', display_name: 'address', type: 'textarea' },
        ]
    }
  }
}
</script>
