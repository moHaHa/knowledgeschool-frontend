<template>
  <div class="home-namespace">
    <header>
      <div id="menu" class="fas fa-bars"></div>

         <router-link to="/home" class="logo"
        ><i class="fas fa-user-graduate"></i> مدرسة المعرفة
      </router-link>

      <nav class="navbar">
        <ul>
          <li><router-link class="active" to="#home">الصفحة الرئيسة</router-link></li>
          <li><router-link to="#about">حول المدرسة </router-link></li>
          <li><router-link to="#course">الصفوف والاسعار</router-link></li>
          <li><router-link to="#library">المكتبة</router-link></li>
          <li><router-link to="#contact">التواصل </router-link></li>
          <li>
            <router-link v-if="isLogin" to="/admin"
              >مدير النظام
            </router-link>
          </li>
        </ul>
      </nav>

      <v-btn v-if="isLogin" @click="logout" icon>
        <v-icon style="transform: rotate(180deg); color: white" size="30"
          >mdi-logout</v-icon
        >
      </v-btn>
      <div
        v-else
        @click="dialog = true"
        id="login"
        class="fas fa-user-circle"
      ></div>
      <v-dialog v-model="dialog" max-width="360">
        <div class="login-form">
          <form @submit.prevent="log">
            <h3>تسجيل دخول</h3>
            <input
              v-model="loginForm.user"
              placeholder="اسم مستخدم"
              class="box"
            />
            <input
              v-model="loginForm.password"
              type="text"
              placeholder="كلمة المررو"
              class="box"
            />
            <p class="red--text">{{ msg }}</p>
            <!-- <p>نسيت كلمه المرور ؟ <a href="#">انقر هنا</a></p> -->
            <!-- <p>ليس لديك حساب ؟ <a href="#">سجل الان</a></p> -->
            <input type="submit" @click="log" class="btn" value="login" />

            <i @click="dialog = false" class="fas fa-times"></i>
          </form>
        </div>
      </v-dialog>
    </header>
    <div class="s">
      <div class="overlay"></div>
      <div class="container-fluid">
        <h1
          class="px-5-lg p-5 fs-1 fw-bold lh-lg px-4 mx-3 pt-5 fw-bold"
          style="border: none"
        >
          مكتبة متنوعة (قصص - أفلام - أغاني)
        </h1>
      </div>
    </div>

    <div class="containe">
      <p class="mt-5 text-center" style="font-size: 50px">القصص</p>

      <p class="mt-3 fs-2 text-center">
        لدينا مجموعة متنوعة من القصص المتوفرة مجاناً لكل زوار موقعنا حيث يمكنهم
        قراءتها أو تحميلها مجاناً
      </p>
    </div>

    <div class="container" style="display: flex; justify-content: center">
      <div
        class="card m-3 w-25"
        style="
          position: relative;
          border: none;
          border-radius: 20px !important;
          align-items: center;
        "
      >
        <img
          src="https://i.ibb.co/fGqptR4/Mosque1-removebg-preview.png"
          class="card-img-top hvr-float-shadow hvr-glow w-50"
          alt="..."
        />

        <div class="card-body">
          <p class="mt-5 text-center fs-1 fw-bold">قصص إسلامية</p>

          <p class="mt-3 fs-3 text-center">
            مكتبة متنوعة من قصص السيرة والأنبياء
          </p>
        </div>
      </div>

      <div
        class="card m-3 w-25"
        style="
          position: relative;
          border: none;
          border-radius: 20px !important;
          align-items: center;
        "
      >
        <img
          src="https://i.ibb.co/bXZPBB4/tar.png"
          class="card-img-top hvr-float-shadow hvr-glow w-50"
          alt="..."
        />
        <div class="card-body">
          <p class="mt-5 text-center fs-1 fw-bold">قصص تربوية</p>

          <p class="mt-3 fs-3 text-center">مكتبة من القصص الهادفة والمتنوعة</p>
        </div>
      </div>

      <div
        class="card m-3 w-25"
        style="
          position: relative;
          border: none;
          border-radius: 20px !important;
          align-items: center;
        "
      >
        <img
          src="https://i.ibb.co/4gk6Kz9/world-book-fun-billboard-03.png"
          class="card-img-top hvr-float-shadow hvr-glow w-50"
          alt="..."
        />
        <div class="card-body">
          <p class="mt-5 text-center fs-1 fw-bold">قصص ترفيهية متنوعة</p>

          <p class="mt-3 fs-3 text-center">مكتبة من القصص الممتعة والرائعة</p>
        </div>
      </div>
    </div>

    <div class="containe">
      <p class="mt-5 text-center" style="font-size: 50px">الأفلام</p>
    </div>
    <p class="mt-3 fs-2 text-center">
      هنا مجموعة متنوعة من الرسوم المتحركة المفيدة والمسلية لمختلف الأعمار
    </p>

    <v-container>
      <v-row>
          <v-col v-for="(movie , i ) in movies" :key="i" cols="4">
          <d-vid :item="movie"> </d-vid>
        </v-col>
      </v-row>
    </v-container>
    <div class="containe">
      <p class="mt-5 text-center" style="font-size: 50px">الأغاني</p>

      <p class="mt-3 fs-2 text-center">
        لدينا مجموعة متنوعة من الأناشيد والأغاني المسلية والمفيدة بآن واحد
      </p>
    </div>

    <v-container>
      <v-row>
        <v-col v-for="(song , i ) in songs" :key="i" cols="4">
          <d-song :item="song"> </d-song>
        </v-col>
       
      </v-row>
    </v-container>

    <!-- footer section starts  -->

    <div class="footer">
      <div class="box-container">
        <div class="box">
          <h3>روابط سريعة</h3>
          <a href="#">الصفحة الرئيسة</a>
          <a href="#">حول المدرسة</a>
          <a href="#">الصفوف والاسعار </a>
          <a href="#">المكتبة</a>
          <a href="#">التواصل </a>
        </div>

        <div class="box">
          <h3>معلومات الاتصال</h3>
          <p><i class="fas fa-map-marker-alt"></i> syria.</p>
          <p><i class="fas fa-envelope"></i> Knowledge School@gmail.com</p>
          <p><i class="fas fa-phone"></i> +963 56 2248449</p>
        </div>
      </div>

      <h1 class="credit">
        Copyright © 2022 | <a href="#">Knowledge School</a> all rights reserved.
      </h1>
      <h1 class="credit">
        Design by students: hiba_114565 | reem_130110 | shahd-156257 |
        marim_156262<br />
        <small>
          virtual university, Information Technology Engineering | Web
          Programming 1 (BWP401) F21 Homework, Dr. Bassel AlKhatib
        </small>
      </h1>
    </div>

    <!-- footer section ends -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import axios from '@/axios'
import dSong from './components/d-song'
import dVid from './components/d-vid'
export default {
  components: {
    'd-song': dSong,
    'd-vid': dVid
  },
  data () {
    return {
      msg: '',
    songs: [],
    movies: [],
      msgContack: '',
      contactLoading: false,
      dialog: false,
      loginForm: {
        user: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters('school', ['isLogin', 'user', 'isRegistered', 'userData'])
  },
  methods: {
    async fetchSongs(){
      try {

        let res = await axios.get('/song')
        this.songs = res.data
      } catch(err) {
        console.log(err);
      }

    },
    async fetchVids(){
      try {

        let res = await axios.get('/movie')
        this.movies = res.data
      } catch(err) {
        console.log(err);
      }

    },
    log () {
      if (
        (this.loginForm.user === 'admin') &
        (this.loginForm.password == '123')
      ) {
        this.dialog = false
        this.login()
        setTimeout(() => {
          this.$router.push('/admin')
        }, 1000)
      } else {
        this.msg = 'خطأ في اسم المستخدم او كلمة المرور'
      }
    },

    ...mapMutations('school', ['login', 'logout', 'register'])
  },
  created() {
    this.fetchSongs()
    this.fetchVids()
  }
}
</script>

<style lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css');
@import './assets/lib.scss';
.home-namespace {
  background-color: #ece7b4;
}
</style>
