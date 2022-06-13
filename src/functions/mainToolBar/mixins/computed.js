import { mapGetters } from 'vuex'
export const computedMixin = {
  computed: {
    ...mapGetters('GlobalStore/BaseCRUD', {
      // mainElementContent: 'mainElementContent',
      endPoint: 'endPoint',
      apiResponse: 'apiResponse',
      apiContent: 'apiContent',
      pageNumArray: 'pageNumArray',
      forms: 'forms',
      //
      formsIds: 'formsIds',
      formsRealLengths: 'formsRealLengths',
      //
      lengthVal: 'lengthVal',
      watchLengthVal: 'watchLengthVal',
      formsRealLine: 'formsRealLine',
      realForm: 'realForm',
      countOfLastPage: 'countOfLastPage'
    })
  }
}
