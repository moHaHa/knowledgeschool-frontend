<template>
    <div class="tw-flex tw-justify-around tw-w-full">
        <v-tabs fixed-tabs v-for="(item, i) in items" :key="i">
            <v-tab> {{ item.name }}</v-tab>
        </v-tabs>
    </div>
</template>
<script>
export default {
  props: {
    items: {
      typeof: Object
    }
  }
}
</script>
