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
      :buttonListText="'قائمة استمارات التسجيل'"
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
      endPoint: 'form',
      form: [
        { field: 'name', display_name: 'الاسم', type: 'text-read' },
        { field: 'gender', display_name: 'الجنس', type: 'text-read' },
        { field: 'language', display_name: 'اللغة المطلوب تعليمها له', type: 'text-read' },
        { field: 'can_speek', display_name: 'يستطيع التحدث بها  ', type: 'text-read' },
        { field: 'did_study_it', display_name: 'درسها من قبل', type: 'text-read' },
        { field: 'language_level', display_name: 'مستواه في هذه اللغة', type: 'text-read' },
        { field: 'language_level', display_name: 'اسم الاب', type: 'text-read' },
        { field: 'language_level', display_name: 'اسم الام', type: 'text-read' },
        { field: 'language_level', display_name: 'المشرف', type: 'text-read' },
        { field: 'language_level', display_name: 'البريد الالكتروني', type: 'text-read' },
        { field: 'country', display_name: 'البلد التي يقيم فيها', type: 'text-read' },
        { field: 'address', display_name: 'العنوان', type: 'textarea-read' },
        { field: 'message', display_name: 'رسالة', type: 'textarea-read' },
       
      ]
    }
  }
}
</script>
