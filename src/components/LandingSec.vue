<template>
  <div class="landing-sec">
    <swiper :slides-per-view="1" autoplay :modules="modules" effect="fade">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.src" class="w-100 bg-img" alt="" />
        <div class="overlay"></div>
      </swiper-slide>
    </swiper>
    <div class="info text-right">
      <p>...ذكاء الدولية توفر لك</p>
      <div class="typing-demo">.البرمجة</div>
      <p>
        نقدم لك جميع خدمات المواقع الإلكترونية وتطبيقات الموبايل وبرامج إدارة
        المؤسسات وكل الحلول التقنية الذكية التي تحتاجها في إنشاء وتطوير أعمالك
        لتنقل أعمالك للمستقبل وتواكب تقنيات الذكاء الاصطناعي.
      </p>
      <v-btn color="#00abad" style="font-size: 13px">تواصل معانا</v-btn>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Autoplay, EffectFade } from "swiper";
export default {
  components: {
    SwiperSlide,
    Swiper,
  },
  setup() {
    return {
      modules: [Autoplay, EffectFade],
    };
  },
  data() {
    return {
      slides: [
        { src: require("@/assets/Pic1.jpg") },
        { src: require("@/assets/Pic2.jpg") },
        { src: require("@/assets/Pic3.jpg") },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.landing-sec {
  position: relative;
  .info {
    color: white;
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 80%;
    transform: translate(-80%, -50%);
    p {
      color: var(--White, #fff);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.8;
      min-width: 600px;
      white-space: pre-wrap;
    }
  }
}
.typing-demo {
  overflow: hidden;
  margin-left: auto;
  border-left: 3px solid #00abad;
  text-align: right;
  font-size: 26px;
  color: #00abad;
  font-weight: bold;
  white-space: nowrap;
  width: 0;
  max-width: 85px;
  animation: typing-animation 8s steps(30, end) forwards,
    blink 0.5s step-end infinite alternate;
}

@keyframes typing-animation {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
