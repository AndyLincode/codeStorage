import { createApp } from "vue";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

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
app.use(createPinia());
app.use(router);
app.use(vuetify);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount("#app");
