<template>
  <div class="home-namespace">
    <!-- header section ends -->

    <!-- login form  -->

    <!-- home section starts  -->
    <header>
      <div id="menu" class="fas fa-bars"></div>

      <a href="index.html" class="logo"
        ><i class="fas fa-user-graduate"></i> مدرسة المعرفة
      </a>

      <nav class="navbar">
        <ul>
          <li><a class="active" href="#home">الصفحة الرئيسة</a></li>
          <li><a href="#about">حول المدرسة </a></li>
          <li><a href="#course">الصفوف والاسعار</a></li>
          <li><a href="#library">المكتبة</a></li>
          <li><a href="#contact">التواصل  </a></li>
          <li><router-link v-if="isLogin" to="/svu/admin">مدير النظام  </router-link></li>

        </ul>
      </nav>

    <v-btn  v-if="isLogin"  icon>
          <v-icon
             
              
              style="transform: rotate(180deg);color: white;"
              size="30"
              >mdi-logout</v-icon
            >
    </v-btn>
      <v-dialog  v-else v-model="dialog" max-width="360">
        <template v-slot:activator="{ on, attrs }">
      
          <div
         
            v-bind="attrs"
            v-on="on"
            id="login"
            class="fas fa-user-circle"
          ></div>
        </template>
        <div class="login-form">
          <form action="">
            <h3>تسجيل دخول</h3>
            <input type="email" placeholder="اسم مستخدم" class="box" />
            <input type="password" placeholder="كلمة المررو" class="box" />
            <p>نسيت كلمه المرور ؟ <a href="#">انقر هنا</a></p>
            <p>ليس لديك حساب ؟ <a href="#">سجل الان</a></p>
            <input type="submit" class="btn" value="login" />
            
            <i  @click="dialog = false" class="fas fa-times"></i>
          </form>
        </div>
      </v-dialog>
    </header>
    <section class="home" id="home">
      <h1>مدرسة المعرفة</h1>
      <p>
        مدرستنا تسعى الى بناء منظومة تربوية قائمة على تطوير مهني وخلق بيئة
        تربوية حافزة. يتفاعل فيها الطالب والمعلم والمجتمع وذلك لتخريج جيل فعال
        قادر على مواجهة التحديات. .
      </p>
      <a href="#"><button class="btn">سجل الان</button></a>

      <div class="shape"></div>
    </section>

    <!-- home section ends -->

    <!-- about section starts  -->

    <section class="about" id="about">
      <div class="image">
        <img src="https://i.ibb.co/8xcY2LZ/Contact-us-1.gif" alt="" />
      </div>

      <div class="content">
        <h3>نبذة عنا :</h3>
        <div class="mb-2">
          <p>
            المعرفة هي مجتمع تعليمي مشوّق و متنوع و متقدم يحقق سنويًا بعضًا من
            أفضل نتائج الثانوية الدولية و المستوى المتقدم في جمهورية العربية
            السورية . إن منهجنا المعترف به عالمياً و الذي يحظى بالإعجاب دوليا، و
            وجود معلمين أكفاء متفانين و شغوفين، بالاضافة الى التدريس و التعليم
            الاستثنائيين؛ هو ما يميزنا و يجعل من مدرسة المعرفة مكاناً فريداً و
            متميزاً. نحن فخورون للغاية يتقييم دائرة التعليم و المعرفة الذي تم
            إجراؤه مؤخرًا، و الذي صنف أكاديمية الياسمينة بأنها “متميزة” و ذلك في
            جميع معايير الأداء الستة.
          </p>
        </div>
      </div>
    </section>

    <!-- about section ends -->

    <!-- course section starts  -->

    <section class="course" id="course">
      <h1 class="heading">الصفوف والاسعار</h1>

      <div class="box-container">
        <div class="box">
          <img src="https://i.ibb.co/t3NTJDT/Best-School-AR2202202-2.png" />
          <h3 class="price">$40</h3>
          <div class="content">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half"></i>
            </div>
            <a href="#" class="title">الحلقة الاولى</a>
            <p>
              يركز منهج الحلقة الأولى إلى حد كبير على إتقان الحروف العربية بشكلٍ
              متقن وجميع والأصوات والتشكيل كالتنوين والقدره على تشكيل كلمات
              ونطقها جيداً. يمكنك ملاحظة تطور طفلك بشكل تدريجي في إتقان القراءة
              واكتساب مزيد من المفردات السماعية وكتابة الحروف الأبجدية. ولا ننسى
              بأننا سننهي هذه المرحله بتعلم الأشكال الهندسية وإتقان الأرقام
              وحفظها حتى الرقم 30.
            </p>
          </div>
        </div>

        <div class="box">
          <img src="https://i.ibb.co/N2XyVK5/image.png" alt="" />
          <h3 class="price">$60</h3>
          <div class="content">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half"></i>
            </div>
            <a href="#" class="title">الحلقة الثانية </a>
            <p>
              أما في الحلقة الثانية فهنا سيتزايد اهتمام الطفل ، مما يعني أنه
              قادر على تعلم مفاهيم أكثر صعوبة في بيئة واحدة وتطبيقها على حالات
              أخرى.حيث أننا سنعمل على تطوير المهارات الاجتماعيه والتحدث بشكل
              سليم ليصبح قارئا بطلاقة. وسيتعلم مهارة تركيب الجمل وتحليلها ايضا
              والتعبير عنها بشكلٍ صحيح. وسنأخذ بعضاً من الأفعال والصفات المفيده.
            </p>
          </div>
        </div>

        <div class="box">
          <img src="https://i.ibb.co/w0KxZL1/image.png" alt="" />
          <h3 class="price">$80</h3>
          <div class="content">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half"></i>
            </div>
            <a href="#" class="title">الحلقة الثالثة</a>
            <p>
              نتضمن في هذه الحلقه التركيز على تعلم مفردات جديدة للقدره على إنشاء
              نص متقن. حيث أنه يستطيع ادراك بعض المهارات والمفاهيم الشائعة
              للتعلم، والتركيز على بعض القواعد الإملائية الهامه . ونهدف في
              النهايك إلى توفير بيئة تعليمية غنية تسهم في تشجيع الطلبة على
              التعلم.
            </p>
          </div>
        </div>

        <div class="box">
          <img
            src="https://i.ibb.co/1MjFSLR/secondary-school-825x510.png"
            alt=""
          />
          <h3 class="price">$100</h3>
          <div class="content">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half"></i>
            </div>
            <a href="#" class="title">الحلقة الرابعة</a>
            <p>
              ما عن هذه الحلقة فسوف يزاد التعمق في النحو والإعراب والنكره
              والمعرفه وغيرها الكثير وسنتبع استراتيجيات حديثه أكثر وجديده لسهوله
              تعليم المبتدأ والخبر وأمثله لكي ترتكز المعلومات وصولاً إلى
              المرفوعات كالفعل والفاعل، والمنصوبات كالمفعول به والمفعول المطلق
              وظرفي الزمان والمكان والحال وغيرهم.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- course section ends -->

    <!-- library section starts  -->

    <section class="library" id="library">
      <h1 class="heading" style="margin-top: 180px">المكتبة</h1>
      <p class="text-center fs-1">مكتبة متنوعة فيها كل ما يلزم أطفالك</p>

      <router-link :to="'/svu/views/library'" target="_blank"
        ><button class="btn">انقر هنا</button></router-link
      >
    </section>

    <!-- library section ends -->

    <!-- contact section starts  -->

    <section class="contact" id="contact">
      <h1 class="heading">تواصل معنا</h1>

      <div class="card mb-3" style="max-width: 100%">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://i.ibb.co/8xcY2LZ/Contact-us-1.gif"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="row w-75">
                <form action="">
                  <input type="text" placeholder="الاسم كامل" class="box" />
                  <input
                    type="email"
                    placeholder="بريدك الالكتروني"
                    class="box"
                  />
                  <input type="password" placeholder="كلمة السر " class="box" />
                  <input type="number" placeholder="هاتفك" class="box" />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    class="box address"
                    placeholder="عنوانك"
                  ></textarea>
                  <input type="submit" class="btn" value="ارسال الان" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
import { mapGetters } from 'vuex'
export default {
    computed:{
      ...mapGetters('school', ['isLogin'])
    },
    data(){
        return {
            dialog: false
        }
    }
    
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css');
</style>
