<template>
  <div class="video-sec">
    <video class="full-width-video" autoplay controls="false">
      <source src="@/assets/join_us_section_2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="content text-center">
      <h4>.انضم الينا</h4>
      <p>!دعونا نبني أشياء عظيمة معا</p>
      <v-btn class="spe-btn py-2">تعرف علي الوظائف المتاحة</v-btn>
    </div>
  </div>
</template>

<style lang="scss">
.full-width-video {
  width: 100%;
}

.full-width-video::-webkit-media-controls {
  display: none;
}
.video-sec {
  position: relative;
  &:hover {
    .content {
      display: block;
    }
  }
  .content {
    display: none;
    transition: 0.8s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h4 {
      font-weight: bold;
      color: white;
    }
    p {
      font-size: 18px;
      color: white;
    }
    .spe-btn {
      color: #00abad;
      &:hover {
        background-color: #00abad;
        color: white;
      }
    }
  }
}
</style>
