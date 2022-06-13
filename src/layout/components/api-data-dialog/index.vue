<template>
  <div v-if="true" class="tw-h-full tw-px-2">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn small color="primary" dark v-bind="attrs" v-on="on">
          api content
        </v-btn>
      </template>
      <v-card class="api-data-dialog overflow-hidden">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>api info</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-sheet class="overflow-y-scroll" height="height">
          <v-container>
            <div :class="[fullRow]">
              <div :class="[medCol]">
                <div>requests</div>

                <v-expansion-panels>
                  <v-expansion-panel
                    v-for="(req, i) in axiosData.requests"
                    :key="i"
                  >
                    <v-expansion-panel-header
                      :expand-icon="chooseIcon(req.method)"
                    >
                      <div class="tw-flex tw-justify-between">
                        <div class="tw-mr-3">
                          {{ req.method }}
                        </div>
                      </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="tw-p-2">
                        {{ req.baseURL }}
                      </div>

                      <div class="tw-p-2">
                        {{ req.url }}
                      </div>
                      <div class="tw-p-2">
                        {{ req.data }}
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
              <div :class="[medCol]">
                <div>response</div>

                <v-expansion-panels>
                  <v-expansion-panel
                    v-for="(res, i) in axiosData.responses"
                    :key="i"
                  >
                    <v-expansion-panel-header
                      class=""
                      :expand-icon="chooseIcon(res.config.method)"
                      :class="[res.status === 200 ? 'status-200' : '']"
                      v-if="res"
                    >
                      <div class="tw-flex">
                        <div class="tw-mr-3">{{ res.config.method }}</div>
                        <div>{{ res.config.url }}</div>
                      </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content v-if="res">
                      <!--  -->

                      <v-expansion-panels>
                        <v-expansion-panel
                          v-for="(item, key) in res"
                          :key="key"
                        >
                          <v-expansion-panel-header
                            expand-icon="mdi-chevron-down"
                          >
                            {{ key }}
                            <!--  -->
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            {{ item }}

                            <!--  -->
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>

                      <!--  -->

                      <div
                        class="tw-my-3"
                        v-if="
                          res.config.method === 'post' ||
                          res.config.method === 'put'
                        "
                      >
                        <div v-if="res.status === 200">
                          <div class="tw-text-sm">{{ res.data.content }}</div>
                          <div class="tw-text-sm">{{ res.data.message }}</div>
                        </div>
                        <div v-if="res.status === 422">
                          {{ res.data.content }}
                          <div
                            v-for="(input, i) of res.data.errors"
                            :key="i"
                            class="tw-border"
                          >
                            {{ input }}
                          </div>
                        </div>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </div>
          </v-container>
        </v-sheet>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  },
  computed: {
    ...mapGetters('Layout', {
      axiosData: 'axiosData'
    })
  },
  methods: {
    chooseIcon (method) {
      if (method === 'post') {
        return 'mdi-send'
      } else if (method === 'put') {
        return 'mdi-comment-edit'
      } else if (method === 'get') {
        return 'mdi-import'
      }
    }
  }
}
</script>

<style lang="scss">
.api-data-dialog {
  .status-200 {
    border-inline: 1px solid var(--v-success-base);
  }
  .v-expansion-panel--active
    > .v-expansion-panel-header--active
    .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) {
    .v-icon.mdi-send,
    .v-icon.comment-edit,
    .v-icon.mdi-import {
      transform: none;
    }
  }
}
</style>
