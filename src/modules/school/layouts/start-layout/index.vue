<template>
  <v-app id="inspire">
   <v-system-bar color="primary" app height="auto">
      <div style="padding:1.5rem 7%;" class="tw-w-full d-flex justify-space-between">
      <div class="secondary--text h5-text">
         مدرسة المعرفة 
      </div>
      <div class="">

        <router-link  class="white--text me-3" :to="'/svu/views/home#about'">logo</router-link>
        <router-link  class="white--text me-3" :to="'/svu/views/home#about'">logo</router-link>
        <router-link  class="white--text me-3" :to="'/svu/views/home#about'">logo</router-link>
        <router-link  class="white--text me-3" :to="'/svu/views/home#about'">logo</router-link>
      </div>
      <div>
        logo
      </div>
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
