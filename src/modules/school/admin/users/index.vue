<template>
  <div>
    <content-once
        :RecordsJSONPath="'data'"
      :existedRecordJSONPath="'data'"
      :vuexModuleName="endPoint"
      :endPoint="endPoint"
      :form="form"
      :tableView="true"
      :buttonNewText="false"
      :buttonListText="false"
    />
  </div>
</template>

<script>
import content from '@/components/content'
export default {
  components: {
    'content-once': content
  },
  data () {
    return {
      endPoint: 'user',
      form: [
        { field: 'name', display_name: 'الاسم', type: 'text' },
        { field: 'email', display_name: 'البريد الإلكتروني', type: 'text' },
        { field: 'password', display_name: 'كلمة المرور', type: 'text' },
        { field: 'phone', display_name: 'الهاتف', type: 'text' },
        { field: 'address', display_name: 'العنوان', type: 'text' },
        ]
    }
  }
}
</script>
