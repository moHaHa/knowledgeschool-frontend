<template>
  <ag-grid-vue
    @cell-key-down="onCellKey"
    @grid-ready="onGridReady"
    rowSelection="single"
    style="height: 475px; width: 100%"
    class="ag-theme-alpine erp-table"
    :columnDefs="columnDefs"
    :rowData="tableModel"
    v-bind="$attrs"
    v-on="$listeners"
    :defaultColDef="defaultColDef"
    :columnHoverHighlight="true"
    :stopEditingWhenCellsLoseFocus="true"
    :autoSizeColumns="true"
  />
</template>
<script>
import { AgGridVue } from 'ag-grid-vue'

export default {
  name: 'erp-data-table',
  model: {
    prop: 'rowData',
    event: 'dataChanged'
  },
  props: {
    columnDefs: Array,
    rowData: Array
  },
  components: {
    AgGridVue
  },
  data () {
    return {
      defaultColDef: {
        minWidth: 15,
        resizable: true,
        lockVisible: true
      }
    }
  },
  computed: {
    tableModel: {
      set (val) {
        this.$emit('dataChanged', val)
      },
      get () {
        return this.rowData
      }
    }
  },
  watch: {
    tableModel: {
      immediate: true,
      deep: true,
      handler (val) {
        if (!this.tableModel) {
          this.tableModel = []
        }
        if (this.tableModel.length == 0) {
          for (let i = 0; i < 10; i++) {
            this.tableModel.push({})
          }
        }
        this.$emit('dataChanged', val)
      }
    }
  },
  methods: {
    onGridReady (params) {
      this.gridApi = params.api
      this.gridColumnApi = params.columnApi
    },
    onCellKey (val) {
      if (val.event.keyCode == 46) {
        if (this.tableModel.length > 1) this.tableModel.splice(val.rowIndex, 1)
      }
      if (val.event.keyCode == 9) {
        if (val.rowIndex == this.tableModel.length - 1) {
          this.tableModel.push({})
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>