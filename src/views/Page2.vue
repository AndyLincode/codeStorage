<script setup></script>
<template>
  <div>
    <h1>頁面2</h1>
    <h2>{{ $route.params.id }}</h2>
    <nav>
      <router-link to="/2/work">Work </router-link>
      <router-link to="/2/education">Education</router-link>
      <router-view></router-view>
    </nav>
  </div>
</template>

<style scoped>
div {
  width: 100vw;
  height: 100vh;
  background-color: slategray;
}
</style>
