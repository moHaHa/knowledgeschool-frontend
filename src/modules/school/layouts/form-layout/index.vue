<template>
  <div>
    <v-app>
      <v-main class="secondary">
        <v-container>
          <v-row justify="center">
            <v-col cols="12">
              <div>
                <v-btn color="primary" v-ripple="false">
                  <v-icon small>mdi-arrow-right</v-icon>
                  العودة للرئيسية
                </v-btn>
              </div>
            </v-col>
            <v-col>
              <div class="text-center">
                للإشتراك الرجاء تعبئة استمارة التسجيل
              </div>
              <div class="text-center">
                هذه الاستمارة لتسجيل طالب واحد فقط، اذا رغبت في تسجيل اكثر من
                طفل يرجى تعبئة استمارة لكل واحد منهم.
              </div>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
         <form @submit.prevent="submit" >

             <v-row>
            <v-col cols="6">
              <v-text-field
                label="الاسم"
                dense
                v-model="form.name"
                solo
                required
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="تاريخ الميلاد"
                    append-icon="mdi-calendar"
                    readonly
                    dense
                    hide-details="auto"
                    solo
                    required
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6" offset="3">
              <v-select
                dense
                :items="['ذكر', 'انثى']"
                label="الجنس"
                solo
                required
                v-model="form.gender"
                hide-details="auto"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                dense
                :items="[
                  'العربية',
                  'الانجليزية',
                  'الفرنسية',
                  'الروسية',
                  'الكورية',
                  'اليابانية',
                ]"
                label="اختر اللغة التي تريد تعليمها لطفلك"
                solo
                required
                hide-details="auto"
                v-model="form.language"
              ></v-select>
            </v-col>
            <v-col cols="6"></v-col>
            <v-col cols="4">
              <v-select
                dense
                :items="['نعم', 'لا']"
                label="هل يستطيع طفلك التحدث بها"
                solo
                required
                hide-details="auto"
                v-model="form.can_speak"
              ></v-select>
            </v-col>
            <v-col cols="4">
              <v-select
                dense
                :items="['نعم', 'لا']"
                label="هل درسها سابقا"
                solo
                required
                hide-details="auto"
                v-model="form.did_study_it"
              ></v-select>
            </v-col>
            <v-col cols="4">
              <v-select
                dense
                :items="['مبتدأ ', 'متوسط', 'جيد ']"
                label="ما هو مستواه/ها بها  "
                solo
                required
                hide-details="auto"
                v-model="form.did_study_it"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="اسم الاب"
                v-model="form.dad"
                solo
                required
                hide-details="auto"
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="اسم الام"
                v-model="form.mom"
                solo
                required
                hide-details="auto"
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                dense
                :items="['الاب ', 'الام ']"
                label="المشرف"
                solo
                required
                hide-details="auto"
                v-model="form.how_is_dad"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="البريد الالكتروني"
                v-model="form.email"
                solo
                required
                hide-details="auto"
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="البلد التي يقيم فيها حاليا"
                v-model="form.country"
                solo
                hide-details="auto"
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="عنوان سكن الطفل"
                v-model="form.address"
                solo
                hide-details="auto"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="رسالتك أو سؤالك للمدرسة"
                v-model="form.message"
                solo
                hide-details="auto"
              ></v-textarea>
            </v-col>
            <v-col>
              <div>
                <v-btn type="submit" color="primary" ripple="false" :loading="formLoading" :disabled="formLoading"> ارسال </v-btn> <span class="mx-3">{{msgForm}} </span>
              </div>
            </v-col>
          </v-row>
         </form>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from '@/axios'
export default {
  data () {
    return {
      date: '',
      menu: false,
      form: {},
      formLoading:false,
      msgForm:''
    }
  },
  methods:{
    async submit(){
         try {
             this.formLoading = true
        let res = await axios.post('/form', this.form)
        console.log(res)
        this.register(this.form)
        this.formLoading = false
        this.formLoading = false
        this.msgForm = 'تم الارسال بنجاح'
      } catch (err) {
        this.formLoading = false
        console.log(err)
        this.formLoading = err
      }
    },
    ...mapMutations('school', ['login', 'logout', 'register']),
    goHome () {
      this.$router.push({ path: '/#home' })
    }
  },
  created () {
    this.$vuetify.rtl = true
    let _html = document.querySelector('.html')

    _html.classList.add('html-font')
  },
  beforeDestroy () {
    let _html = document.querySelector('.html')
    _html.classList.remove('html-font')
  },

}
</script>
<style lang="scss">
.html-font {
  font-size: 100% !important;
  transition: none !important;
}
</style>
