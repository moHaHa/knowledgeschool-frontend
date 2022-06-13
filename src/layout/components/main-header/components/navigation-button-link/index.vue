<template>
  <div
    class="
      body-border-item-link
     
      active:tw-border-primary
      tw-border-transparent tw-border-1
     
      tw-rounded-lg
      navigation-button-link

    "
    :class="'is-new-parent'"
    @click="addTab({ title: child.nameChild, path: child.path })"
  >
  <div v-if="child.isNew" class="is-new-child">
  </div>
    <router-link :to="child.path" v-if="index < num" class="tw-block">
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
              class="tw-p-3 tw-text-2xl"
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
    </router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    child: {
      type: Object
    },
   
    index: {
      type: Number
    },
    num: {
      type: Number
    }
  },
  methods: {
    ...mapActions('Layout/Tabs', ['addTab'])
  }
}
</script>

<style>

.body-border-item-link {
  background-color: var(--v-seashell-base);
}
.is-new-parent {
  position: relative;
} 
.is-new-child {
  position: absolute;
  top: -5px;
  left: -5px;
  width: 10px ;
  height: 10px ;
  border-radius: 140px;
  background-color: var(--v-warning-base);

} 
</style>
