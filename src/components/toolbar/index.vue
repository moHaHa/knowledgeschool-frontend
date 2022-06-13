<template>
  <div class="tw-w-full tw-flex tw-flex-col tw-gap-4 tw-p-4 main-toolbar">
    <div class="tw-flex tw-flex-row tw-items-center tw-gap-2 tw-width-full">
      <v-btn small height="33px" class="list-btn" color="primary" elevation="0"
        ><div class="tw-flex tw-gap-1 tw-items-center">
          <span
            class="mdi mdi-format-list-bulleted tw-font-light tw-text-lg"
          ></span
          ><span>{{ $t("list") }}</span>
        </div>
      </v-btn>
      <v-breadcrumbs
        :items="breadcrumbs"
        class="tw-overflow-x-auto tw-w-1/2 tw-flex tw-flex-nowrap"
      >
        <template v-slot:divider> </template>
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item class="tw-p-1 tw-truncate">
            {{ $t(item) | capitalize }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <div
        class="tw-flex tw-gap-2"
        :class="$vuetify.rtl ? 'tw-mr-auto' : 'tw-ml-auto'"
      >
        <v-btn color="#cccccc" outlined small icon>
          <v-icon size="20px">mdi mdi-account</v-icon>
        </v-btn>

        <div class="pagination-max-width">
          <div class="tw-w-full tw-h-full tw-relative">
            <div class="layer-one-pagin">
              <div class="tw-w-full tw-h-full tw-flex">
                <div
                  v-ripple
                  @click="first"
                  class="
                    tw-w-1/5 tw-cursor-pointer tw-flex
                    pagination-main-border pagination-first-button
                    align-center
                    tw-justify-center tw-bg-white
                  "
                >
                  <span
                    :class="
                      $vuetify.rtl
                        ? 'icon-erp-fast-forward '
                        : 'icon-erp-fast-rewind '
                    "
                    class="pagination-icon-font"
                  >
                  </span>
                </div>
                <div class="tw-w-full"></div>
                <div
                  @click="last"
                  v-ripple
                  class="
                    tw-w-1/5 tw-cursor-pointer
                    pagination-main-border pagination-last-button
                    tw-flex
                    align-center
                    tw-justify-center tw-bg-white
                  "
                >
                  <span
                    class="pagination-icon-font"
                    :class="
                      $vuetify.rtl
                        ? 'icon-erp-fast-rewind '
                        : 'icon-erp-fast-forward '
                    "
                  >
                  </span>
                </div>
              </div>
            </div>
            <div class="layer-two-pagin">
              <div class="tw-w-full tw-h-full tw-flex">
                <div
                  v-ripple
                  @click="prev"
                  class="
                    tw-w-1/3 tw-cursor-pointer
                    pagination-main-border
                    tw-flex
                    align-center
                    pagination-prev-button
                    tw-bg-white tw-justify-center
                  "
                >
                  <span
                    class="pagination-icon-font"
                    :class="
                      $vuetify.rtl
                        ? 'icon-erp-arrow-right '
                        : 'icon-erp-arrow-left '
                    "
                  >
                  </span>
                </div>
                <div class="tw-w-full"></div>
                <div
                  v-ripple
                  @click="next"
                  class="
                    tw-w-1/3 tw-flex
                    pagination-main-border
                    tw-align-center
                    align-center
                    tw-cursor-pointer
                    pagination-next-button
                    tw-justify-center tw-bg-white
                  "
                >
                  <span
                    class="
                      tw-font-xl tw-mr-2 tw-user-select-none
                      pagination-icon-font
                    "
                    :class="
                      $vuetify.rtl
                        ? 'icon-erp-arrow-left '
                        : 'icon-erp-arrow-right '
                    "
                  >
                  </span>
                </div>
              </div>
            </div>
            <div class="layer-three-pagin">
              <div
                class="
                  tw-w-full tw-justify-around tw-h-full
                  align-center
                  tw-rounded-full tw-bg-primary tw-flex
                "
              >
                <div class="tw-text-white tw-h-full">
                  <input
                    v-model.number="val"
                    v-on:keyup.enter="inputEnter"
                    v-on:focusout="inputEnter"
                    class="
                      input-pagination-in-med
                      tw-rounded-full tw-w-full tw-h-full
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="white tw-rounded-lg py-2 px-2">
      <div
        class="
          tw-flex tw-gap-2
          align-center
          tw-items-center
          buttons-section
          tw-w-full tw-flex
        "
      >
        <div class="tw-flex tw-gap-2">
          <button
            v-ripple
            v-for="(button, index) in buttons"
            :key="index"
            class="toolbar-btn"
            @click="$emit(`${button.event}`)"
          >
            {{ $t(button.label) | capitalize }}
            <span
              left
              :class="[
                button.icon,
                button.icon.slice(0, 3) === 'mdi' ? 'mdi' : '',
              ]"
            >
            </span>
          </button>
        </div>
        <div
          class="tw-w-1/5 toolbar-search"
          :class="$vuetify.rtl ? 'tw-mr-auto' : 'tw-ml-auto'"
        >
          <v-text-field
            dense
            solo
            append-icon="mdi-magnify "
            :label="$t('search') | capitalize"
          />
        </div>

        <v-btn small height="32px" elevation="0" color="primary"
          ><div class="tw-flex tw-gap-1">
            <span>{{ $t("settings") | capitalize }}</span
            ><span class="mdi mdi-cog" /></div
        ></v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import breadcrumbsMapper from '@/mixins/breadcrumbs-mapper.js'

export default {
  name: 'toolbar',
  mixins: [breadcrumbsMapper],
  props: {
    buttons: {
      type: Array,
      default: () => [
        {
          label: 'new',
          id: 1,
          event: 'newClicked',
          icon: 'icon-erp-library-add'
        },
        {
          label: 'save',
          id: 2,
          event: 'saveClicked',
          icon: 'mdi-plus-circle-outline'
        },
        {
          label: 'update',
          id: 3,
          event: 'updateClicked',
          icon: 'icon-erp-history'
        },
        {
          label: 'delete',
          id: 4,
          event: 'deleteClicked',
          icon: 'icon-erp-delete'
        }
      ]
    },
    value: {
      type: [Number, String]
    }
  },
  watch: {
    value () {
      this.$emit('input', this.value)
    }
  },
  computed: {
    val: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    first () {
      this.$emit('first')
    },
    last () {
      this.$emit('last')
    },
    prev () {
      this.$emit('prev')
    },
    next () {
      this.$emit('next')
    },
    inputEnter () {
      this.$emit('inputEnter')
    }
  }
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
