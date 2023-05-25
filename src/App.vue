<script setup>
import Counter from './components/Counter.vue';
import { useUserStore } from './stores/user';

const userStore = useUserStore();
</script>

<template>
<Counter />
<p class="user">目前登入: {{ userStore.user.name }}</p>
</template>

<style  scoped>
a {
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  background-color: cadetblue;
  color: #fff
}
</style>
