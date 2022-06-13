<template>
  <v-menu class="doEditsmenu" offset-y v-model="tree">
    <template v-slot:activator="{ on, attrs }">
      <div
        class="
          body-border-item-link
          active:tw-border-primary
          tw-border-transparent tw-border-1
          hover:tw-bg-light-flat-error
          tw-rounded-lg
        "
        :class="[tree ? 'tw-border-primary' : '']"
        v-on="on"
        v-bind="attrs"
      >
        <div @click="fun(child)" v-if="index < num" class="tw-block">
          <div class="tw-flex tw-justify-center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span
                  v-if="child.icomType === 'erp-icon'"
                  class="tw-p-2 tw-text-2xl"
                  :class="[child.iconName]"
                ></span>
                <v-icon
                  v-else
                  class="tw-p-2 tw-text-2xl"
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ child.iconName }}
                </v-icon>
              </template>
              <span> {{ child.nameChild }}</span>
            </v-tooltip>
          </div>
        </div>
      </div>
    </template>
    <v-list max-width="300" min-width="300" class="doEditsList rounded">
      <component
        v-for="(item, index) in items"
        :key="index"
        :is="chooseComponent(item)"
        :itemChild="item"
        @chacha="fun"
        @chocho="fu"
        :childsProperty="childsProperty"
        :path="path"
      />
    </v-list>
  </v-menu>
</template>

<script>
import treeStore from './store'
import singleItem from './components/single-item'
import folderItem from './components/menu-nested'
export default {
  components: {
    singleItem,
    folderItem
  },
  props: {
    child: {
      type: Object
    },
    index: {
      type: Number
    },
    num: {
      type: Number
    },
    api: {
      type: String
    },
    name: {
      type: String
    },
    treeList: {
      type: Array
    },
    childsProperty: {
      type: String
    },
    path: {
      type: String
    }
  },
  watch: {
    api (api) {
      if (!this.isRegistered) {
        this.$store.registerModule(this.moduleName, treeStore)
        this.$store.commit(`${this.moduleName}/registerModule`)
        this.isRegistered = true
      }
      this.$store.dispatch(`${this.moduleName}/fetchOptions`, { ep: api })
    }
  },
  computed: {
    moduleName () {
      return `TEMP${this.name}`
    },
    items () {
      if (!this.api) {
        return this.treeList
      } else {
        return this.$store.getters[`${this.moduleName}/treeList`]
      }
    }
  },
  methods: {
    fun () {},
    fu () {
      this.tree = false
    },
    chooseComponent (item) {
      if (item.type) {
        return 'singleItem'
      } else {
        return 'folderItem'
      }
    }
  },
  created () {
    if (this.api) {
      this.$store.registerModule(this.moduleName, treeStore)
      this.$store.dispatch(`${this.moduleName}/fetchOptions`, { ep: this.api })
      this.$store.commit(`${this.moduleName}/registerModule`)
      this.isRegistered = true
    }
  },
  mounted () {
    let doEditsmenu = document.querySelectorAll('.v-menu__content')
    doEditsmenu.forEach((el) => {
      if (el.firstElementChild.classList.contains('doEditsList')) {
        el.classList.add('doEditsmenu')
      }
    })
  },
  updated () {
    let doEditsmenu = document.querySelectorAll('.v-menu__content')
    doEditsmenu.forEach((el) => {
      if (el.firstElementChild.classList.contains('doEditsList')) {
        el.classList.add('doEditsmenu')
      }
    })
  },
  beforeDestroy () {
    this.$store.unregisterModule(this.moduleName)
  },
  data () {
    return {
      tree: false,
      list: [
        {
          name: 'name ',
          type: 'folder',
          list: [
            {
              name: 'name ',
              type: 'folder',
              list: [
                { name: 'name ', type: 'single-itme' },
                { name: 'name ', type: 'single-itme' },
                { name: 'name ', type: 'single-itme' },
                {
                  name: 'name ',
                  type: 'folder',
                  list: [
                    { name: 'name ', type: 'single-itme' },
                    { name: 'name ', type: 'single-itme' },
                    { name: 'name ', type: 'single-itme' }
                  ]
                }
              ]
            },
            { name: 'name ', type: 'single-itme' },
            {
              name: 'name ',
              type: 'folder',
              list: [
                {
                  name: 'name ',
                  type: 'folder',
                  list: [
                    {
                      name: 'name ',
                      type: 'folder',
                      list: [
                        { name: 'name ', type: 'single-itme' },
                        { name: 'name ', type: 'single-itme' },
                        { name: 'name ', type: 'single-itme' },
                        {
                          name: 'name ',
                          type: 'folder',
                          list: [
                            { name: 'name ', type: 'single-itme' },
                            { name: 'name ', type: 'single-itme' },
                            { name: 'name ', type: 'single-itme' }
                          ]
                        }
                      ]
                    },
                    { name: 'name ', type: 'single-itme' },
                    {
                      name: 'name ',
                      type: 'folder',
                      list: [
                        { name: 'name ', type: 'single-itme' },
                        { name: 'name ', type: 'single-itme' },
                        { name: 'name ', type: 'single-itme' }
                      ]
                    }
                  ]
                },
                { name: 'name single-itme', type: 'single-itme' },
                {
                  name: 'name ',
                  type: 'folder',
                  list: [
                    {
                      name: 'name ',
                      type: 'folder',
                      list: [
                        { name: 'name ', type: 'single-itme' },
                        { name: 'name ', type: 'single-itme' },
                        { name: 'name ', type: 'single-itme' },
                        {
                          name: 'name ',
                          type: 'folder',
                          list: [
                            { name: 'name ', type: 'single-itme' },
                            { name: 'name ', type: 'single-itme' },
                            { name: 'name ', type: 'single-itme' }
                          ]
                        }
                      ]
                    },
                    { name: 'name ', type: 'single-itme' },
                    {
                      name: 'name ',
                      type: 'folder',
                      list: [
                        {
                          name: 'name ',
                          type: 'folder',
                          list: [
                            {
                              name: 'name ',
                              type: 'folder',
                              list: [
                                { name: 'name ', type: 'single-itme' },
                                { name: 'name ', type: 'single-itme' },
                                { name: 'name ', type: 'single-itme' },
                                {
                                  name: 'name ',
                                  type: 'folder',
                                  list: [
                                    { name: 'name ', type: 'single-itme' },
                                    { name: 'name ', type: 'single-itme' },
                                    { name: 'name ', type: 'single-itme' }
                                  ]
                                }
                              ]
                            },
                            { name: 'name ', type: 'single-itme' },
                            {
                              name: 'name ',
                              type: 'folder',
                              list: [
                                { name: 'name ', type: 'single-itme' },
                                { name: 'name ', type: 'single-itme' },
                                { name: 'name ', type: 'single-itme' }
                              ]
                            }
                          ]
                        },
                        { name: 'name single-itme', type: 'single-itme' },
                        {
                          name: 'name ',
                          type: 'folder',
                          list: [
                            {
                              name: 'name ',
                              type: 'folder',
                              list: [
                                { name: 'name ', type: 'single-itme' },
                                { name: 'name ', type: 'single-itme' },
                                { name: 'name ', type: 'single-itme' },
                                {
                                  name: 'name ',
                                  type: 'folder',
                                  list: [
                                    { name: 'name ', type: 'single-itme' },
                                    { name: 'name ', type: 'single-itme' },
                                    { name: 'name ', type: 'single-itme' }
                                  ]
                                }
                              ]
                            },
                            { name: 'name ', type: 'single-itme' },
                            {
                              name: 'name ',
                              type: 'folder',
                              list: [
                                {
                                  name: 'name ',
                                  type: 'folder',
                                  list: [
                                    {
                                      name: 'name ',
                                      type: 'folder',
                                      list: [
                                        { name: 'name ', type: 'single-itme' },
                                        { name: 'name ', type: 'single-itme' },
                                        { name: 'name ', type: 'single-itme' },
                                        {
                                          name: 'name ',
                                          type: 'folder',
                                          list: [
                                            {
                                              name: 'name ',
                                              type: 'single-itme'
                                            },
                                            {
                                              name: 'name ',
                                              type: 'single-itme'
                                            },
                                            {
                                              name: 'name ',
                                              type: 'single-itme'
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    { name: 'name ', type: 'single-itme' },
                                    {
                                      name: 'name ',
                                      type: 'folder',
                                      list: [
                                        {
                                          name: 'name ',
                                          type: 'folder',
                                          list: [
                                            {
                                              name: 'name ',
                                              type: 'folder',
                                              list: [
                                                {
                                                  name: 'name ',
                                                  type: 'single-itme'
                                                },
                                                {
                                                  name: 'name ',
                                                  type: 'single-itme'
                                                },
                                                {
                                                  name: 'name ',
                                                  type: 'single-itme'
                                                },
                                                {
                                                  name: 'name ',
                                                  type: 'folder',
                                                  list: [
                                                    {
                                                      name: 'name ',
                                                      type: 'single-itme'
                                                    },
                                                    {
                                                      name: 'name ',
                                                      type: 'single-itme'
                                                    },
                                                    {
                                                      name: 'name ',
                                                      type: 'single-itme'
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              name: 'name ',
                                              type: 'single-itme'
                                            },
                                            {
                                              name: 'name ',
                                              type: 'folder',
                                              list: [
                                                {
                                                  name: 'name ',
                                                  type: 'single-itme'
                                                },
                                                {
                                                  name: 'name ',
                                                  type: 'single-itme'
                                                },
                                                {
                                                  name: 'name ',
                                                  type: 'single-itme'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          name: 'name single-itme',
                                          type: 'single-itme'
                                        },
                                        {
                                          name: 'name ',
                                          type: 'folder',
                                          list: [
                                            {
                                              name: 'name ',
                                              type: 'folder',
                                              list: [
                                                {
                                                  name: 'name ',
                                                  type: 'single-itme'
                                                },
                                                {
                                                  name: 'name ',
                                                  type: 'single-itme'
                                                },
                                                {
                                                  name: 'name ',
                                                  type: 'single-itme'
                                                },
                                                {
                                                  name: 'name ',
                                                  type: 'folder',
                                                  list: [
                                                    {
                                                      name: 'name ',
                                                      type: 'single-itme'
                                                    },
                                                    {
                                                      name: 'name ',
                                                      type: 'single-itme'
                                                    },
                                                    {
                                                      name: 'name ',
                                                      type: 'single-itme'
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            {
                                              name: 'name ',
                                              type: 'single-itme'
                                            },
                                            {
                                              name: 'name ',
                                              type: 'folder',
                                              list: [
                                                {
                                                  name: 'name ',
                                                  type: 'single-itme'
                                                },
                                                {
                                                  name: 'name ',
                                                  type: 'single-itme'
                                                },
                                                {
                                                  name: 'name ',
                                                  type: 'single-itme'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          name: 'name ',
                                          type: 'folder',
                                          list: [
                                            //   {
                                            //     name: "name ",
                                            //     type: "folder",
                                            //     list: [
                                            //       { name: "name ", type: "single-itme" },
                                            //       { name: "name ", type: "single-itme" },
                                            //       { name: "name ", type: "single-itme" },
                                            //     ],
                                            //   },
                                            {
                                              name: 'name ',
                                              type: 'single-itme'
                                            },
                                            {
                                              name: 'name ',
                                              type: 'single-itme'
                                            },
                                            {
                                              name: 'name ',
                                              type: 'single-itme'
                                            },
                                            {
                                              name: 'name ',
                                              type: 'single-itme'
                                            }
                                            // {
                                            //   name: "name ",
                                            //   type: "folder",
                                            //   list: [
                                            //     { name: "name ", type: "single-itme" },
                                            //     { name: "name ", type: "single-itme" },
                                            //     { name: "name ", type: "single-itme" },
                                            //   ],
                                            // },
                                          ]
                                        },
                                        { name: 'name ', type: 'single-itme' }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  name: 'name single-itme',
                                  type: 'single-itme'
                                },
                                {
                                  name: 'name ',
                                  type: 'folder',
                                  list: [
                                    {
                                      name: 'name ',
                                      type: 'folder',
                                      list: [
                                        { name: 'name ', type: 'single-itme' },
                                        { name: 'name ', type: 'single-itme' },
                                        { name: 'name ', type: 'single-itme' },
                                        {
                                          name: 'name ',
                                          type: 'folder',
                                          list: [
                                            {
                                              name: 'name ',
                                              type: 'single-itme'
                                            },
                                            {
                                              name: 'name ',
                                              type: 'single-itme'
                                            },
                                            {
                                              name: 'name ',
                                              type: 'single-itme'
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    { name: 'name ', type: 'single-itme' },
                                    {
                                      name: 'name ',
                                      type: 'folder',
                                      list: [
                                        { name: 'name ', type: 'single-itme' },
                                        { name: 'name ', type: 'single-itme' },
                                        { name: 'name ', type: 'single-itme' }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  name: 'name ',
                                  type: 'folder',
                                  list: [
                                    //   {
                                    //     name: "name ",
                                    //     type: "folder",
                                    //     list: [
                                    //       { name: "name ", type: "single-itme" },
                                    //       { name: "name ", type: "single-itme" },
                                    //       { name: "name ", type: "single-itme" },
                                    //     ],
                                    //   },
                                    { name: 'name ', type: 'single-itme' },
                                    { name: 'name ', type: 'single-itme' },
                                    { name: 'name ', type: 'single-itme' },
                                    { name: 'name ', type: 'single-itme' }
                                    // {
                                    //   name: "name ",
                                    //   type: "folder",
                                    //   list: [
                                    //     { name: "name ", type: "single-itme" },
                                    //     { name: "name ", type: "single-itme" },
                                    //     { name: "name ", type: "single-itme" },
                                    //   ],
                                    // },
                                  ]
                                },
                                { name: 'name ', type: 'single-itme' }
                              ]
                            }
                          ]
                        },
                        {
                          name: 'name ',
                          type: 'folder',
                          list: [
                            //   {
                            //     name: "name ",
                            //     type: "folder",
                            //     list: [
                            //       { name: "name ", type: "single-itme" },
                            //       { name: "name ", type: "single-itme" },
                            //       { name: "name ", type: "single-itme" },
                            //     ],
                            //   },
                            { name: 'name ', type: 'single-itme' },
                            { name: 'name ', type: 'single-itme' },
                            { name: 'name ', type: 'single-itme' },
                            { name: 'name ', type: 'single-itme' }
                            // {
                            //   name: "name ",
                            //   type: "folder",
                            //   list: [
                            //     { name: "name ", type: "single-itme" },
                            //     { name: "name ", type: "single-itme" },
                            //     { name: "name ", type: "single-itme" },
                            //   ],
                            // },
                          ]
                        },
                        { name: 'name ', type: 'single-itme' }
                      ]
                    }
                  ]
                },
                {
                  name: 'name ',
                  type: 'folder',
                  list: [
                    //   {
                    //     name: "name ",
                    //     type: "folder",
                    //     list: [
                    //       { name: "name ", type: "single-itme" },
                    //       { name: "name ", type: "single-itme" },
                    //       { name: "name ", type: "single-itme" },
                    //     ],
                    //   },
                    { name: 'name ', type: 'single-itme' },
                    { name: 'name ', type: 'single-itme' },
                    { name: 'name ', type: 'single-itme' },
                    { name: 'name ', type: 'single-itme' }
                    // {
                    //   name: "name ",
                    //   type: "folder",
                    //   list: [
                    //     { name: "name ", type: "single-itme" },
                    //     { name: "name ", type: "single-itme" },
                    //     { name: "name ", type: "single-itme" },
                    //   ],
                    // },
                  ]
                },
                { name: 'name ', type: 'single-itme' }
              ]
            }
          ]
        },
        { name: 'name single-itme', type: 'single-itme' },
        {
          name: 'name ',
          type: 'folder',
          list: [
            {
              name: 'name ',
              type: 'folder',
              list: [
                { name: 'name ', type: 'single-itme' },
                { name: 'name ', type: 'single-itme' },
                { name: 'name ', type: 'single-itme' },
                {
                  name: 'name ',
                  type: 'folder',
                  list: [
                    { name: 'name ', type: 'single-itme' },
                    { name: 'name ', type: 'single-itme' },
                    { name: 'name ', type: 'single-itme' }
                  ]
                }
              ]
            },
            { name: 'name ', type: 'single-itme' },
            {
              name: 'name ',
              type: 'folder',
              list: [
                { name: 'name ', type: 'single-itme' },
                { name: 'name ', type: 'single-itme' },
                { name: 'name ', type: 'single-itme' }
              ]
            }
          ]
        },
        {
          name: 'name ',
          type: 'folder',
          list: [
            //   {
            //     name: "name ",
            //     type: "folder",
            //     list: [
            //       { name: "name ", type: "single-itme" },
            //       { name: "name ", type: "single-itme" },
            //       { name: "name ", type: "single-itme" },
            //     ],
            //   },
            { name: 'name ', type: 'single-itme' },
            { name: 'name ', type: 'single-itme' },
            { name: 'name ', type: 'single-itme' },
            { name: 'name ', type: 'single-itme' }
            // {
            //   name: "name ",
            //   type: "folder",
            //   list: [
            //     { name: "name ", type: "single-itme" },
            //     { name: "name ", type: "single-itme" },
            //     { name: "name ", type: "single-itme" },
            //   ],
            // },
          ]
        },
        { name: 'name ', type: 'single-itme' }
      ]
    }
  }
}
</script>