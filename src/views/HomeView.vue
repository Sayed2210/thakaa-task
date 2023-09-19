<template>
  <v-layout>
    <AppNav />
    <v-main>
      <LandingSec />
      <AboutUs />
      <HowWork />
      <OurService />
      <TechSoultion />
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
export default {
  components: {
    AppNav,
    LandingSec,
    AboutUs,
    HowWork,
    OurService,
    TechSoultion,
  },
};
</script>
