<template>
  <div>
    <v-app>
      <v-system-bar color="primary" height="auto">
        <div
          style="padding: 0.93rem 7%"
          class="d-flex tw-w-full justify-space-between align-center"
        >
          <div  style="text-decoration: underline;font-size: 1.5rem;" class=" me-2 white--text "> <i class="fas fa-user-graduate"></i> مدرسة المعرفة </div>
          <div style="padding-top: 0.5rem;
padding-bottom: 0.5rem;">
            <router-link  style="text-decoration: underline; font-size: 1.25rem;" class="  me-5 white--text " v-for="(link , index) in header" :key="index" :to="link.path">{{link.text}}</router-link>
          </div>
          <div>
             <v-icon color="white" style="transform: rotate(180deg);" size="30">mdi-logout</v-icon>
          </div>
        </div>
      </v-system-bar>
      <v-main class="secondary">
        <v-container>
          <v-row>
             <v-col cols="10">
              <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view></router-view>
            </v-sheet>
             </v-col>
           
            <v-col cols="2">
              <v-sheet rounded="lg">
                <v-list color="transparent">
                  <v-list-item
                    v-ripple="false"
                    v-for="(item, index) in adminViews"
                    :key="index"
                    link
                    :to="item.path"
                  >
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ item.text }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>

export default {
created(){
  let _html = document.querySelector('.html')
  
  _html.classList.add('html-font')
},
beforeDestroy(){
  let _html = document.querySelector('.html')
  _html.classList.remove('html-font')
},  
data: () => ({
    adminViews: [
      { path: '/svu/admin/movies', text: 'الافلام' },
      { path: '/svu/admin/songs', text: 'الأغاني' },
      { path: '/svu/admin/users', text: 'users' }
    ],
        
    header: [
      { path: '/svu/views/home', text: 'الصفحة الرئيسة' },
      { path: '/svu/views/home#about', text: 'حول المدرسة' },
      { path: '/svu/views/home#course', text: 'الصفوف والاسعار' },
      { path: '/svu/views/home#library', text: 'المكتبة' },
      { path: '/svu/views/home#contact', text: 'التواصل' },
     
    ]
    
  })
}
</script>
<style >
.html-font {
  font-size: 100% !important;
  transition: none !important;
}
</style>
