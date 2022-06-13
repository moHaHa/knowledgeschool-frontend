<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <ToolBar />
        <div>
          <div
            class="
              tw-text-xl
              tw-bg-light-flat-primary
              tw-rounded-xl
              tw-shadow-2xl
              tw-p-2
              tw-m-2
            "
          >
            THIS IS SAMPLE DUMMY DATA FROM DUMMY API : {{ sample }}
          </div>
          <erp-select-full
            title="Reference"
            name="account"
            :api="'account'"
            v-model="mainForm.reference_id"
          />
        </div>
        <v-treeview
          dense
          v-model="tree"
          selectable
          expand-icon="mdi-chevron-down"
          :items="items"
          on-icon="mdi-bookmark"
          off-icon="mdi-bookmark-outline"
          indeterminate-icon="mdi-bookmark-minus"
          @input="input"
        >
          <template v-slot:prepend="{ leaf }">
            <v-icon v-text="leaf ? 'mdi-leaf' : 'mdi-folder'"></v-icon>
          </template>
          <template v-slot:label="{ item }">
            <div>{{ item.name }}</div>
          </template>
        </v-treeview>
        <div class="py-3"></div>
      </template>

      <template v-slot:rightSide> </template>
    </main-page>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    mainForm: {},
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ],
    tree: [24, 25, 23, 8, 9],
    img: ''
  }),
  methods: {
    theInput () {},

    ...mapActions('Base/SubModule1/Sample', ['fetchData'])
  },
  computed: {
    ...mapGetters('Base/SubModule1/Sample', ['sample'])
  },
  created () {
    this.fetchData()
  }
}
</script>
