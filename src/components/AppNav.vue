<template>
  <v-app-bar class="text-right" elevation="1">
    <v-container>
      <v-row class="flex-row-reverse justify-space-between align-center">
        <v-app-bar-nav-icon
          ><img src="@/assets/logo_thakaa.png" alt="" class="w-100"
        /></v-app-bar-nav-icon>
        <div class="links d-flex align-center text-right flex-row-reverse">
          <a href="#" class="active">الرئسية</a>
          <a href="#">من نحن</a>
          <a href="#">خدمتنا</a>
          <a href="#">تواصل معانا</a>
          <a href="#">وظائفنا</a>
        </div>
        <v-btn variant="outlined">EN <v-icon icon="mdi-earth"></v-icon></v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss">
.links {
  gap: 12px;
  a {
    color: #12151c;
    text-decoration: none;
    padding: 10px;
    text-align: right;
    /* 16 Reg */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
    transition: 0.3s;
    &.active::before,
    &:hover::before {
      content: "";
      position: absolute;
      height: 5px;
      width: 100%;
      left: 0;
      bottom: -15px;
      background-color: #00abad;
    }
  }
}
</style>
