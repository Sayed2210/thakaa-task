<template>
  <div class="sub-email py-5 text-center">
    <h4>!اشتراك ليصلك كل جديد</h4>
    <p>.قم بالتسجيل بالنشرة الاخبارية لتلقي التحديثات والاخبار الجديدة</p>
    <div class="email d-flex flex-row-reverse justify-center" style="gap: 10px">
      <input
        type="email"
        name=""
        id=""
        class="py-2 px-2"
        placeholder="ادخل بريدك الالكتروني"
        dir="rtl"
      />
      <button type="submit" class="py-2 px-3">اشتراك</button>
    </div>
  </div>
</template>

<style lang="scss">
.sub-email {
  background-image: url(../assets/Background\ blue.jpg);
  background-position: top left;
  background-size: cover;
  margin-top: -10px;
  h4 {
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
  p {
    font-size: 16px;
    font-weight: normal;
    color: white;
  }
  .email {
    input {
      background-color: white;
      outline: none;
      border-radius: 5px;
      width: 320px;
    }
    button {
      background-color: #28649c;
      color: white;
      border-radius: 5px;
    }
  }
}
</style>
