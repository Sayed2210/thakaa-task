<template>
  <v-layout>
    <AppNav />
    <v-main>
      <LandingSec />
    </v-main>
  </v-layout>
</template>

<script>
import AppNav from "@/components/AppNav.vue";
import LandingSec from "@/components/LandingSec.vue";
export default {
  components: {
    AppNav,
    LandingSec,
  },
};
</script>
