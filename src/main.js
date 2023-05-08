import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { createVuetify } from "vuetify/lib/framework.mjs";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});
// app.directive('fsize', {
//   mounted(el, binding) {
//     el.style.fontSize = binding.value + "px";
//   },
//   updated(el, binding) {
//     el.style.fontSize = binding.value + "px";
//   }
// })
app.directive('fsize', (el, binding)=> {
  el.style.fontSize = binding.value + (binding.arg || "px");
})

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
