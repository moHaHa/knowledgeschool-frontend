<template>
  <div>
    <v-app>
      <v-system-bar color="primary" height="auto">
        <div
          style="padding: 0.93rem 7%"
          class="d-flex tw-w-full justify-space-between align-center"
        >
          <div  @click="goHome" style="cursor: pointer;text-decoration: underline;font-size: 1.5rem;" class=" me-2 white--text "> <i class="fas fa-user-graduate"></i> مدرسة المعرفة </div>
          <div style="padding-top: 0.5rem;
padding-bottom: 0.5rem;">
            <router-link  style="text-decoration: underline; font-size: 1.25rem;" class=" mx-2 white--text " v-for="(link , index) in header" :key="index" :to="link.path">{{link.text}}</router-link>
          </div>
          <div>
            
             <v-icon  @click="logout" color="white" style="transform: rotate(180deg);" size="30">mdi-logout</v-icon>
          </div>
        </div>
      </v-system-bar>
      <v-main class="secondary">
        <v-container>
          <v-row>
             <v-col cols="10">
            
              <router-view></router-view>
            
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
import {mapMutations} from 'vuex'
export default {
created(){
  let _html = document.querySelector('.html')
  
  _html.classList.add('html-font')
},
beforeDestroy(){
  let _html = document.querySelector('.html')
  _html.classList.remove('html-font')
},  
methods:{
      ...mapMutations('school', ['login', 'logout' , 'register']),
goHome(){
  this.$router.push({path:'/#home'})
}
},
data: () => ({
    adminViews: [
      { path: '/admin/movies', text: 'الافلام' },
      { path: '/admin/songs', text: 'الأغاني' },
      { path: '/admin/users', text: 'الاعضاء المسجلين' }
    ],
        
    header: [
      { path: '', text: 'الصفحة الرئيسة' },
      { path: '/#about', text: 'حول المدرسة' },
      { path: '/#course', text: 'الصفوف والاسعار' },
      { path: '/#library', text: 'المكتبة' },
      { path: '/#contact', text: 'التواصل' },
      { path: '/admin', text: 'مدير النظام ' },
     
    ]
    
  })
}
</script>
<style lang="scss">
.html-font {
  font-size: 100% !important;
  transition: none !important;
}

        .ag-row-pinned {
            background-color: var(--v-primary-base);
            :first-child {
                display: none;
            }
        }
        .ag-root-wrapper {
            border-top-left-radius: 12px !important;
            border-top-right-radius: 12px !important;
        }

        .ag-pinned-right-header {
            background-color: var(--v-primary-base);
        }
        .ag-header-viewport {
            background-color: var(--v-primary-base);
            font-weight: 600;
        }

        .ag-header-cell-text {
            color: white;
            font-weight: 600;
        }
        .ag-header-cell-resize {
            height: 70%;
            top: 15%;
            background-color: rgba(255, 255, 255, 0.5);
            width: 6px;
        }

</style>
