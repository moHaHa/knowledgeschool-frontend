<template>
  <div>
    <content-once
      :RecordsJSONPath="'data'"
      :existedRecordJSONPath="'data'"
      :vuexModuleName="endPoint"
      :endPoint="endPoint"
      :form="form"
      :buttonNewText="'إضافة اغنية جديدة'"
      :buttonListText="'قائمة الأغاني'"
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
      endPoint: 'song',
      form: [
        { field: 'title', display_name: 'الاسم', type: 'text' },
        { field: 'url', display_name: 'رابط الإغنية youtube', type: 'text' },
        { field: 'image', display_name: 'الصورة', type: 'image' },
        ]
    }
  }
}
</script>
