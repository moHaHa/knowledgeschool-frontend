import { mapActions } from 'vuex'
import { fillformInMainForm } from '../../../functions/mainToolBar/global/global'

export const methodsMixin = {
  methods: {
    // isRequiredElement (nameEl, array) {
    //   const obj = JSON.parse(
    //     JSON.stringify(array.find((el) => (el.name = nameEl)))
    //   )
    //   return obj
    // },
    getNewPage () {
      this.fetchForms({
        pageNumber: parseInt(JSON.parse(JSON.stringify(this.pageNum))),
        lastPageNum: parseInt(this.apiContent.last_page)
      })
    },

    async chooseNewFormByLength (lengthVal) {
      await this.chooseLengthVal(lengthVal)
      this.lengthInputVal = parseInt(JSON.parse(JSON.stringify(this.lengthVal)))
    },
    formInMainForm () {
      this.mainForm = JSON.parse(
        JSON.stringify(
          fillformInMainForm.draw(this.realForm, this.mappingData).fill
        )
      )
    },
    fillMainId () {
      this.mainId = parseInt(JSON.parse(JSON.stringify(this.realForm.id)))
    },

    refillFormInMainForm () {
      if (this.lengthVal <= this.apiContent.total) {
        this.formInMainForm()
      }
      if (this.lengthVal <= this.apiContent.total) {
        this.fillMainId()
      }
    },
    fillEmtyObjInMainForm () {
      this.mainForm = new Object()
      this.mainStaticFrom = new Object()
      this.mainId = undefined
    },

    sendThisForm () {
      this.storeForm({ mainForm: this.mainForm })
    },
    watchLengthValMethod () {
      this.refillFormInMainForm()
      this.lengthInputVal = parseInt(JSON.parse(JSON.stringify(this.lengthVal)))
    },

    ...mapActions('GlobalStore/BaseCRUD', {
      resetGetApiData: 'resetGetApiData',
      resetState: 'resetState',
      putEndPoint: 'putEndPoint',
      fetchForms: 'fetchForms',
      chooseLengthValForNewForm: 'chooseLengthValForNewForm',
      chooseLengthVal: 'chooseLengthVal',

      chooseRealForm: 'chooseRealForm',
      //
      storeForm: 'storeForm',
      updateForm: 'updateForm',
      deleteForm: 'deleteForm'
    }),
    async getSomePages () {
      
      await this.fetchForms({ pageNumber: 1 })
      await this.fetchForms({ pageNumber: this.apiContent.last_page })
    },

    async goodMorningPage () {
      await this.getSomePages()
      this.chooseNewFormByLength(this.apiContent.total)
      this.chooseLengthValForNewForm()
    },
    async refrechAfterSave () {
      this.resetGetApiData()
      
      this.putEndPoint({ endPoint: this.endPointName })
      await this.getSomePages()
      //   this.chooseNewFormByLength(this.apiContent.total)
    },
    ToolBarFirst () {
      this.chooseNewFormByLength(1)
      this.watchLengthValMethod()
    },
    ToolBarLast () {
      this.chooseNewFormByLength(this.apiContent.total)
      this.watchLengthValMethod()
    },
    ToolBarPrev () {
      this.chooseNewFormByLength(this.lengthVal - 1)
      this.watchLengthValMethod()
    },
    ToolBarNext () {
      this.chooseNewFormByLength(this.lengthVal + 1)
      this.watchLengthValMethod()
    },
    ToolBarInputEnter () {
      this.chooseNewFormByLength(this.lengthInputVal)
      this.watchLengthValMethod()
    },
    //
    ToolBarNew () {
      this.chooseNewFormByLength(this.apiContent.total)
      this.chooseLengthValForNewForm()
      this.fillEmtyObjInMainForm()
    },
    async ToolBarSave () {
      this.endPointName = this.endPoint
      await this.storeForm({ mainForm: this.mainForm }).then(() => {
        
        this.refrechAfterSave()
      })
    },
    async ToolBarUpdate () {
      await this.updateForm({ mainForm: this.mainForm, id: this.mainId })
    },
    async ToolBarDelete () {
      await this.deleteForm({ id: this.mainId })
    }
  }
}
