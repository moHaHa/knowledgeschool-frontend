<template>
     <router-view></router-view>
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
        isLogin:true
      },
      getters:{
        isLogin(state){
          return state.isLogin
        }
      }
    })
    console.log(this.$vuetify);
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
