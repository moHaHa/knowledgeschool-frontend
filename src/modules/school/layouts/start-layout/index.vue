<template>
  <v-app id="inspire">
   <v-system-bar app height="auto">
      <div style="padding:1.5rem 7%;" class="tw-w-full d-flex justify-space-between">
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>
      </div>
   </v-system-bar>

    <v-main class="grey lighten-3">
     <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data(){
    return {
       links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
    }
  },
  created(){
    console.log(this.$vuetify);
    this.$vuetify.rtl  = true
  }
}
</script>