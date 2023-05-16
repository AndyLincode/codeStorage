<script setup>
import { ref, computed } from "vue";
import Page1 from "./components/Page1.vue";
import Page2 from "./components/Page2.vue";
import Page3 from "./components/Page3.vue";

const routes = {
  "/": {
    component: Page1,
    label: "頁面1",
  },
  "/2": {
    component: Page2,
    label: "頁面2",
  },
  "/3": {
    component: Page3,
    label: "頁面3",
  },
};

const currentPath = ref(location.pathname);
const currentPage = computed(
  () => routes[currentPath.value].component || Page1
);

const changeRoute = (path) => {
  history.pushState(null, null, path);
  currentPath.value = location.pathname;
};
</script>

<template>
  <nav>
    <a
      v-for="(route, path) in routes"
      :href="path"
      @click.prevent="changeRoute(path)"
    >
      {{ route.label }}
    </a>
    <component :is="currentPage" />
  </nav>
</template>

<style scoped></style>
