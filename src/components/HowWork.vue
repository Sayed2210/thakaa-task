<template>
  <div class="how-work">
    <v-container>
      <Swiper
        :slides-per-view="1"
        autoplay
        :modules="modules"
        :navigation="{ prevIcon: '.swiper-prev' }"
      >
        <swiper-slide>
          <v-row class="swiper-content d-flex align-center">
            <v-col cols="5"
              ><img src="@/assets/image_20.png" alt="" class="w-100"
            /></v-col>
            <v-col cols="7"
              ><div class="info text-right">
                <h5>كيف نعمل</h5>
                <h4>الحصول على المعلومات</h4>
                <p>
                  نحن لا ننظر فقط إلى البيانات. نحن نبحث عن المعلومات. المعلومات
                  التي تقود التحليل والرؤى ، والتي تمكننا من اكتساب فهم أفضل
                  للأفراد والصناعة والأسواق ، وبالتالي تساعدنا على رسم طريق أفضل
                  لتحقيق نتائج أفضل.
                </p>
              </div></v-col
            >
          </v-row>
        </swiper-slide>
        <swiper-slide>
          <v-row class="swiper-content d-flex align-center">
            <v-col cols="5"
              ><img src="@/assets/image_22.png" alt="" class="w-100"
            /></v-col>
            <v-col cols="7"
              ><div class="info text-right">
                <h5>كيف نعمل</h5>
                <h4>التفكير في التصميم</h4>
                <p>
                  يساعدنا العصف الزهني في التفكير التصميمي على تحدي الافتراضات
                  والتوصل إلى أفكار مبتكرة ومبدعة.
                </p>
              </div></v-col
            >
          </v-row>
        </swiper-slide>
        <swiper-slide>
          <v-row class="swiper-content d-flex align-center">
            <v-col cols="5"
              ><img src="@/assets/image_19.png" alt="" class="w-100"
            /></v-col>
            <v-col cols="7"
              ><div class="info text-right">
                <h5>كيف نعمل</h5>
                <h4>الإبداع أولا</h4>
                <p>
                  نضع حلول التحول الفكرة الإبداعية لدينا في مركز المحتوى الخاص
                  بنا ، بغض النظر عن التنسيق أو الوسائط وهذا من أجل الحصول على
                  أفكار إبداعية في البداية .
                </p>
              </div></v-col
            >
          </v-row>
        </swiper-slide>
        <swiper-slide>
          <v-row class="swiper-content d-flex align-center">
            <v-col cols="5"
              ><img src="@/assets/image_21.png" alt="" class="w-100"
            /></v-col>
            <v-col cols="7"
              ><div class="info text-right">
                <h5>كيف نعمل</h5>
                <h4>البرمجة والتطوير</h4>
                <p>
                  نحن لا نكتفي بأخذ موجز وتقديمه. نحن نعمل مع عملائنا لإيجاد
                  حلول برمجية متطورة قائمة على المحتوى لأهداف أو قضايا العمل.
                  نحن نعمل كشركاء ، وفي معظم الحالات ، تكون حلولنا عصرية ومنتجة.
                </p>
              </div></v-col
            >
          </v-row>
        </swiper-slide>
      </Swiper>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Autoplay, Navigation } from "swiper";
export default {
  components: {
    SwiperSlide,
    Swiper,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.how-work {
  background-image: url(../assets/Background\ blue.jpg);
  background-size: cover;
  background-position: top left;
  .info {
    h5 {
      color: var(--Blue2, #28649c);
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    h4 {
      color: var(--White, #fff);
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      color: var(--White, #fff);
    }
  }
  .swiper-button-prev {
    left: -20px;
    z-index: 100;
  }
  .swiper-button-prev:after {
    content: url(../assets/arrow.svg);
    width: 15px;
  }
  .swiper-button-next:after {
    opacity: 0;
  }
}
</style>
