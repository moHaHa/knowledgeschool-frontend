<template>
    <v-app>
       <router-view></router-view>
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
    this.$store.registerModule('school', {
      namespaced:true,
      state:{
        user:'user',
        isLogin:false,
        isRegistered:false,
        userData:{}
      },
      getters:{
        isLogin(state){
          return state.isLogin
        },
        isRegistered(state){
          return state.isRegistered
        }
      },
      mutations:{
        login (state ){
         
          state.isLogin = true
        },
        logout (state){
          state.isLogin = false
        },
        register (state, userData){
          this.isRegistered = true
          state.userData = userData
        }
      }
    })
    this.$vuetify.rtl  = true
  }
}
</script>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');
*:not(.fas) {
  font-family: 'Cairo', sans-serif !important;
}

</style>
