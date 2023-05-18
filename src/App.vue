<script setup></script>

<template>
  <nav>
    <router-link to="/">頁面1</router-link>
    <router-link :to="{ name: 'user', params: { id: 20 } }">頁面2</router-link>
    <router-link :to="{ name: 'data', params: { id: 30 } }">頁面3</router-link>
  </nav>

  <router-view></router-view>
</template>

<style scoped></style>
