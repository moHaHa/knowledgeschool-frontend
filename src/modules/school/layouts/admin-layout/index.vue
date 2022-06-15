<template>
<div>
      <header>

     <div id="menu" class="fas fa-bars"></div>

    <a href="index.html" class="logo"><i class="fas fa-user-graduate"></i>     مدرسة المعرفة   </a>

    <nav class="navbar">
        <ul>
            <li><a class="active" href="#home">الصفحة الرئيسة</a></li>
            <li><a href="#about">حول المدرسة </a></li>
            <li><a href="#course">الصفوف والاسعار</a></li>
            <li><a href="#library">المكتبة</a></li>
            <li><a href="#contact">التواصل </a></li>
        </ul>
    </nav>

    

<v-dialog
      v-model="dialog"
      max-width="360"
    >
      <template v-slot:activator="{ on, attrs }">
        <div  v-bind="attrs"
          v-on="on" id="login" class="fas fa-user-circle"></div> 
      </template>
      <div class="login-form">

   



      <form action="">
        <h3>تسجيل دخول</h3>
        <input type="email" placeholder="اسم مستخدم" class="box">
        <input type="password" placeholder="كلمة المررو" class="box">
        <p>نسيت كلمه المرور ؟ <a href="#">انقر هنا</a></p>
        <p>ليس لديك حساب ؟ <a href="#">سجل الان</a></p>
        <input type="submit" class="btn" value="login">
        <i @click="dialog = false" class="fas fa-times"></i>
    </form>
    </div>
    </v-dialog>
<v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
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


</header>
</div>
  
</template>

<script>
export default {
  data: () => ({
    adminViews: [
      { path: '/svu/admin/movies', text: 'الافلام' },
      { path: '/svu/admin/stories', text: 'القصص' },
      { path: '/svu/admin/songs', text: 'الأغاني' }
    ]
  })
}
</script>