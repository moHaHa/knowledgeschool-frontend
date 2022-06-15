<template>
  <div>
    <content-once
      :RecordsJSONPath="'data'"
      :existedRecordJSONPath="'data'"
      :vuexModuleName="endPoint"
      :endPoint="endPoint"
      :form="form"
      :buttonNewText="'إضافة فيلم جديد'"
      :buttonListText="'قائمة الأفلام'"
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
      endPoint: 'movie',
      form: [
        { field: 'title', display_name: 'الاسم', type: 'text' },
        { field: 'url', display_name: 'رابط فيديو youtube', type: 'text' },
        { field: 'image', display_name: 'الصورة', type: 'image' },
        ]
    }
  }
}
</script>
