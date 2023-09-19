<template>
  <v-layout>
    <AppNav />
    <v-main>
      <LandingSec />
      <AboutUs />
      <HowWork />
      <OurService />
      <TechSoultion />
      <VideoSec />
      <SubEmail />
    </v-main>
  </v-layout>
</template>

<script>
import AppNav from "@/components/AppNav.vue";
import LandingSec from "@/components/LandingSec.vue";
import AboutUs from "@/components/AboutUs.vue";
import HowWork from "@/components/HowWork.vue";
import OurService from "@/components/OurService.vue";
import TechSoultion from "@/components/TechSoultions.vue";
import VideoSec from "@/components/VideoSec.vue";
import SubEmail from "@/components/SubEmail.vue";
export default {
  components: {
    AppNav,
    LandingSec,
    AboutUs,
    HowWork,
    OurService,
    TechSoultion,
    VideoSec,
    SubEmail,
  },
};
</script>
