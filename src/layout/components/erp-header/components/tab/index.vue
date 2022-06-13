<template>
  <div>
    <div
      v-if="tab.path"
      :to="tab.path"
      class="erp-tabs-group-item"
      :class="
        this.$route.path === tab.path && activeTabIndex === index
          ? 'activeTab primary tw-transition-colors'
          : 'unActiveTab'
      "
    >
      <div
        class="
          erp-tabs-group-item-text
          tw-text-center tw-w-full tw-cursor-pointer
        "
        @click="changeActiveTabIndex(index)"
      >
        {{ $t(tab.title) }}
      </div>
      <div
        v-if="tab.title !== 'home'"
        @click="remove(index)"
        class="erp-tabs-group-item-icon tw-cursor-pointer"
      >
        <!-- <close /> -->
        <div>
          <close-once />
        </div>
        <div>
          <!-- <other /> -->
        </div>
        <!-- <span @click="remove(index)" class="icon-erp-library-add"></span> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import close from '../close'

export default {
  components: {
    'close-once': close
  },
  props: {
    tab: {
      type: Object
    },
    index: {
      type: [Number]
    }
  },
  computed: {
    ...mapGetters('Layout/Tabs', ['activeTabIndex', 'tabs'])
  },
  methods: {
    ...mapMutations('Layout/Tabs', ['changeActiveTabIndex']),
    ...mapActions('Layout/Tabs', ['removeTab']),
    dd () {},
    remove (index) {
      this.removeTab({ index })
      if (this.tabs.length === 0) {
        this.$router.push({ path: '/' })
      } else if (this.activeTabIndex === index && this.activeTabIndex !== 0) {
        this.changeActiveTabIndex(index - 1)
      } else if (this.activeTabIndex > index) {
        this.changeActiveTabIndex(this.activeTabIndex - 1)
      }

      // switch (this.activeTabIndex) {
      // case index:
      //   this.changeActiveTabIndex(index - 1)

      //   break
      // case 0:
      //

      //   break

      // default:
      //   break
      // }
    }
  }
}
</script>

<style>
.erp-tabs-group-item {
  background-color: var(--v-seashell-base);
  margin-inline-end: 5px;

  min-width: 100px;
  border-top-right-radius: 18px;
  border-top-left-radius: 18px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.erp-tabs-group-item-icon {
  opacity: 1;
  transition: all 0.2s ease;
  display: flex;
  padding-top: 10px;
  padding-bottom: 5px;
  padding-inline: 10px;
}
.erp-tabs-group-item-text {
  padding-top: 7px;
  padding-bottom: 2px;
  padding-inline: 12px;
  color: var(--v-white-base);
}
.unActiveTab .erp-tabs-group-item-text {
  color: var(--v-black-base);
}
.unActiveTab .erp-tabs-group-item-icon {
  color: var(--v-black-base);
}
.activeTab .erp-tabs-group-item-text {
  color: var(--v-white-base);
}
.activeTab .erp-tabs-group-item-icon {
  color: var(--v-white-base);
}
</style>
