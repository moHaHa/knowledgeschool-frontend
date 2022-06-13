<template>
  <div v-if="schemaLoader">
    <div class="tw-flex align-center justify-center">
      <v-progress-circular
        :size="100"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
  </div>
  <div v-else>
    <div v-if="pageStatus === 'list'">
      <div>
        <v-dialog v-model="deleteDialog" persistent max-width="290">
          <v-card>
            <v-card-title class="text-h5"> Record Delete </v-card-title>
            <v-card-text>sure you want to delete this record ?</v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey darken-1" text @click="deleteDialog = false">
                cancel
              </v-btn>
              <v-btn color="red darken-1" text @click="deleteMethod">
                sure
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-progress-linear
          v-if="recordsLoader"
          indeterminate
          color="yellow darken-2"
        ></v-progress-linear>
      </div>
      <div class="my-2">
        <v-btn @click="newButton">new</v-btn>
        <v-btn
          class="ms-2"
          @click="pageStatusToList(vuexModuleNameComputed)"
          small
          icon
        >
          <v-icon> mdi-reload </v-icon>
        </v-btn>
      </div>

      <div></div>
      <AgGridVue
        style="height: 500px"
        class="ag-theme-alpine"
        :columnDefs="newColumnDefs"
        :rowData="items"
        :context="context"
        :defaultColDef="defaultColDef"
      />
    </div>
    <div v-if="pageStatus === 'existedForm'">
      <v-progress-linear
        v-if="singleRecordsLoader"
        indeterminate
        color="red darken-2"
      ></v-progress-linear>
      <v-progress-linear
        v-if="updateRecordsLoader"
        indeterminate
        color="purple darken-2"
      ></v-progress-linear>
      <v-btn @click="pageStatusToList(vuexModuleNameComputed)"> list </v-btn>
      <div>
        <div class="tw-mt-4">
          <div :class="[fullRow]">
            <div :class="[medCol]" v-for="element in schema" :key="element.id">
              <component
                :is="getElementComponent(element.type)"
                v-bind="getAttrComponent(element)"
                v-model="mainForm[element.field]"
              />
            </div>
          </div>
        </div>
        <div>
          <v-btn color="teal" outlined @click="update"> update </v-btn>
        </div>
      </div>
    </div>
    <div
      v-if="pageStatus === 'emptyForm' || pageStatus === 'emptyForm_changed'"
    >
      <v-progress-linear
        v-if="storeRecordsLoader"
        indeterminate
        color="teal darken-2"
      ></v-progress-linear>
      <div class="form">
        <v-btn @click="pageStatusToList(vuexModuleNameComputed)"> list </v-btn>
        <div>
          <div class="tw-mt-4">
            <div :class="[fullRow]">
              <div
                :class="[medCol]"
                v-for="element in schema"
                :key="element.id"
              >
                <component
                  :is="getElementComponent(element.type)"
                  v-bind="getAttrComponent(element)"
                  v-model="mainForm[element.field]"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <v-btn class="ma-2" outlined color="indigo" @click="save">save</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
extend('required', {
  message: 'this field is required',
  ...required
})

import { AgGridVue } from 'ag-grid-vue'
import vuexChildStoreArgument from './store'
import rowButtons from './components/row-buttons'
import {
  fillformInMainForm,
  getAttrComponent,
  getElementComponent,
  schemaTo
} from './functions'
export default {
  components: {
    AgGridVue,
    // eslint-disable-next-line vue/no-unused-components
    'row-buttons': rowButtons
  },
  data () {
    return {
      deleteDialog: false,
      defaultColDef: {
        editable: false,
        sortable: false,
        flex: 1,
        minWidth: 100,
        filter: false,
        resizable: true
      },
      context: { componentParent: this },
      mainForm: {}
    }
  },
  props: {
    form: {
      type: [Array]
    },
    vuexModuleName: {
      type: String
    },
    endPoint: {
      type: String
    },
    RecordsJSONPath: {
      type: String,
      default: () => 'data.data'
    },
    existedRecordJSONPath: {
      type: String,
      default: () => 'data.data'
    },
    records: {
      type: Array
    }
  },
  computed: {
    schema: {
      get () {
        return this.$store.getters[`${this.vuexModuleNameComputed}/schema`]
      }
    },
    schemaLoader: {
      get () {
        return this.$store.getters[
          `${this.vuexModuleNameComputed}/schemaLoader`
        ]
      }
    },
    mappingData: {
      get () {
        return schemaTo.mappingData(this.schema)
      }
    },
    columnDefs: {
      get () {
        return schemaTo.columnDefs(this.schema)
      }
    },
    // 1
    vuexModuleNameComputed: {
      get () {
        return `ViewTable${this.vuexModuleName}`
      }
    },
    hasEndPoint: {
      get () {
        return !!this.endPoint
      }
    },
    items: {
      get () {
        if (this.hasEndPoint) {
          return this.$store.getters[`${this.vuexModuleNameComputed}/records`]
        } else {
          return this.records
        }
      }
    },
    storeHasThisvuexModuleName: {
      get () {
        return this.$store.hasModule(this.vuexModuleNameComputed)
      }
    },
    //
    recordsLoader: {
      get () {
        return this.$store.getters[
          `${this.vuexModuleNameComputed}/recordsLoader`
        ]
      }
    },
    pageStatus: {
      get () {
        return this.$store.getters[`${this.vuexModuleNameComputed}/pageStatus`]
      }
    },
    // single record
    singleRecordsLoader: {
      get () {
        return this.$store.getters[
          `${this.vuexModuleNameComputed}/singleRecordsLoader`
        ]
      }
    },
    existedRecord: {
      get () {
        return this.$store.getters[
          `${this.vuexModuleNameComputed}/existedRecord`
        ]
      }
    },
    singleRecordInfo: {
      get () {
        return this.$store.getters[
          `${this.vuexModuleNameComputed}/singleRecordInfo`
        ]
      }
    },

    // store record
    storeRecordsLoader: {
      get () {
        return this.$store.getters[
          `${this.vuexModuleNameComputed}/storeRecordsLoader`
        ]
      }
    },
    // update
    updateRecordsLoader: {
      get () {
        return this.$store.getters[
          `${this.vuexModuleNameComputed}/updateRecordsLoader`
        ]
      }
    },

    // 2
    newColumnDefs: {
      get () {
        let newColumnDefs = JSON.parse(JSON.stringify(this.columnDefs))
        newColumnDefs.push({
          field: '',
          width: 200,
          pinned: 'right',
          cellRenderer: 'row-buttons',
          resizable: false
        })
        return newColumnDefs
      }
    }
  },
  methods: {
    getAttrComponent,
    getElementComponent,
    // 1
    registerVuexModule (
      endPoint,
      vuexModuleNameComputed,
      vuexChildStoreParameter
    ) {
      if (endPoint) {
        this.$store.registerModule(
          vuexModuleNameComputed,
          vuexChildStoreParameter
        )
      }
    },
    setEndPoint (vuexModuleNameComputed, endPoint) {
      this.$store.commit(
        `${vuexModuleNameComputed}/setAPIInfo_endPoint`,
        endPoint
      )
    },
    setRecordsJSONPath (vuexModuleNameComputed, RecordsJSONPath) {
      this.$store.commit(
        `${vuexModuleNameComputed}/setAPIInfo_recordsJSONPath`,
        RecordsJSONPath
      )
    },
    pageStatusToList (vuexModuleNameComputed) {
      this.$store.dispatch(`${vuexModuleNameComputed}/pageStatusToList`)
    },
    pageStatusToEmptyForm (vuexModuleNameComputed) {
      this.$store.dispatch(`${vuexModuleNameComputed}/pageStatusToEmptyForm`)
    },
    // 2 existedRecord
    setExistedRecordJSONPath (vuexModuleNameComputed, existedRecordJSONPath) {
      this.$store.commit(
        `${vuexModuleNameComputed}/setSingleRecordInfo_existedRecordJSONPath`,
        existedRecordJSONPath
      )
    },
    setExistedRecordId (vuexModuleNameComputed, existedRecordId) {
      this.$store.commit(
        `${vuexModuleNameComputed}/setSingleRecordInfo_existedRecordId`,
        existedRecordId
      )
    },
    setPageStatus_ToExistedRecord (vuexModuleNameComputed) {
      this.$store.commit(
        `${vuexModuleNameComputed}/setPageStatus`,
        'existedForm'
      )
    },

    setExistedRecord (id) {
      this.setExistedRecordJSONPath(
        this.vuexModuleNameComputed,
        this.existedRecordJSONPath
      )
      this.setExistedRecordId(this.vuexModuleNameComputed, id)
    },
    pageStatusToExistedFrom (vuexModuleNameComputed) {
      this.$store.dispatch(`${vuexModuleNameComputed}/pageStatusToExistedFrom`)
    },
    // pageStatusToExistedRecord () {
    //      this.$store.commit(
    //     `${vuexModuleNameComputed}/setAPIInfo_recordsJSONPath`,
    //     RecordsJSONPath
    //   )
    // },
    //3
    async editButton (cell) {
      this.mainForm = {}
      this.setExistedRecord(cell.data.id)

      this.setPageStatus_ToExistedRecord(this.vuexModuleNameComputed)
      await this.$store.dispatch(
        `${this.vuexModuleNameComputed}/FetchAPISingleRecord`
      )
      this.formInMainForm()
    },

    newButton () {
      this.mainForm = {}
      this.pageStatusToEmptyForm(this.vuexModuleNameComputed)
    },
    setFormBodyToStore () {
      this.$store.commit(
        `${this.vuexModuleNameComputed}/setBodyTargerToStore`,
        this.mainForm
      )
    },
    // storeRecord () {

    // },
    async save () {
      this.setFormBodyToStore()
      await this.$store.dispatch(`${this.vuexModuleNameComputed}/storeRecord`)
    },

    // update
    setRecordIdTargetedForUpdate () {
      this.$store.commit(
        `${this.vuexModuleNameComputed}/setRecordIdTargetedForUpdate`,
        this.singleRecordInfo.existedRecordId
      )
    },
    setBodyTargerToUpdate () {
      this.$store.commit(
        `${this.vuexModuleNameComputed}/setBodyTargerToUpdate`,
        this.mainForm
      )
    },
    async update () {
      this.setRecordIdTargetedForUpdate()
      this.setBodyTargerToUpdate()
      await this.$store.dispatch(`${this.vuexModuleNameComputed}/updateRecord`)
    },
    // bodyTargerToUpdate
    formInMainForm () {
      console.log(this.mainForm)
      this.mainForm = JSON.parse(
        JSON.stringify(
          fillformInMainForm.draw(this.existedRecord, this.mappingData).fill
        )
      )
    },
    // delete record
    openToDelete (cell) {
      let id = cell.data.id
      this.$store.commit(
        `${this.vuexModuleNameComputed}/recordIdTargetedForDeletion`,
        id
      )
      this.deleteDialog = true
    },
    deleteCanceled () {
      this.$store.commit(
        `${this.vuexModuleNameComputed}/recordIdTargetedForDeletion`,
        null
      )
      this.deleteDialog = false
    },
    async deleteMethod () {
      await this.$store.dispatch(`${this.vuexModuleNameComputed}/deleteRecord`)
      this.$store.commit(
        `${this.vuexModuleNameComputed}/recordIdTargetedForDeletion`,
        null
      )
      this.pageStatusToList(this.vuexModuleNameComputed)
      this.deleteDialog = false
    },
    getStarted () {
      this.registerVuexModule(
        this.endPoint,
        this.vuexModuleNameComputed,
        vuexChildStoreArgument
      )
      this.setEndPoint(this.vuexModuleNameComputed, this.endPoint)
      this.setRecordsJSONPath(this.vuexModuleNameComputed, this.RecordsJSONPath)
    }
  },
  async created () {
    this.getStarted()
    await this.$store.dispatch(
      `${this.vuexModuleNameComputed}/getSchema`,
      this.form
    )
    this.pageStatusToList(this.vuexModuleNameComputed)
  },

  beforeDestroy () {
    if (this.$store.hasModule(this.vuexModuleNameComputed)) {
      this.$store.unregisterModule(this.vuexModuleNameComputed)
    }
  }
}
</script>

<style></style>
