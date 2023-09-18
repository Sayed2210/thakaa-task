import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
const vuetify = createVuetify({
  components,
  directives,
});


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

//config swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

createApp(App).use(store).use(router).use(vuetify).mount("#app");
