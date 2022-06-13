<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <!-- <fake
          ref="toolbar"
          @first="ToolBarFirst"
          @prev="ToolBarPrev"
          @next="ToolBarNext"
          @last="ToolBarLast"
          @inputEnter="ToolBarInputEnter"
          v-model="lengthInputVal"
          @newClicked="onNew"
          @saveClicked="ToolBarSave"
          @updateClicked="ToolBarUpdate"
          @deleteClicked="ToolBarDelete"
        /> -->
        <div class="tw-mt-4">
          <div :class="[fullRow]">
            <div :class="[medCol]" v-for="element in schema" :key="element.id">
              <!-- <span>{{ element }}</span> -->
              <component
                :is="getElementComponent(element.type)"
                v-bind="
                  getAttrComponent(element.type, {
                    display_name: element.display_name,
                    details: element.details,
                    required: element.required,
                  })
                "
                v-model="mainForm[element.field]"
              />
              <!-- <span>{{
                getAttrComponent(element.type, {
                  display_name: element.display_name,
                  details: element.details,
                  required: element.required,
                })
              }}</span> -->
            </div>
            <!-- <erp-input label="test validate" rules="required"> </erp-input> -->
            <!-- <v-text-field :success="false" label="nnnnkkk"></v-text-field> -->
          </div>
        </div>
      </template>
      <template v-slot:rightSide>
        {{ mainForm }}
        <br />
        <!-- <span>--------------------------------------------------------</span> -->
        <!-- <br /> -->
        <!-- {{ realForm }} -->
        <!-- {{ page }} -->
      </template>
    </main-page>
  </div>
</template>

<script>
import axios from './axios'
import storeContentMixin from '../../../../../functions/mainToolBar/mixins/index'
// import fake from '@/components/toolbar'
import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
extend('required', {
  message: 'this field is required',
  ...required
})

export default {
  components: {
    //   fake
  },
  mixins: [...storeContentMixin],
  data () {
    return {
      mainForm: {},
      slug: 'user',
      page: {
        filters: [{ field: 'slug', operator: '=', value: 'users' }]
      },
      schema: {}
    }
  },
  methods: {
    getElementComponent (type) {
      let component = null
      switch (type) {
      case 'relationship':
        component = 'erp-select-full'

        break

      default:
        component = 'erp-input'
        break
      }
      return component
    },
    getAttrComponent (type, element) {
      let newaAttr = {}
      switch (type) {
      case 'relationship':
        newaAttr.title = element.display_name
        newaAttr.api = element.details.table
        newaAttr.name = element.field
        newaAttr.reduce = (x) => x.id
        break

      default:
        newaAttr.label = element.display_name
        element.required
          ? (newaAttr.rules = 'required')
          : (newaAttr.rules = false)
        break
      }
      return newaAttr
    }
  },
  async created () {
    console.log(this.slug)
    await axios.post('/data-type/search', this.page).then((res) => {
      console.log(res.data.data[0].data_row)
      this.schema = res.data.data[0].data_row
    })
    // this.putEndPoint({ endPoint: '/Skill' })
    // this.goodMorningPage()
  }
}
</script>
