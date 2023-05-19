<script setup></script>

<template>
  <nav>
    <router-link to="/">頁面1</router-link>
    <router-link :to="{ name: 'user', params: { id: 20 } }">頁面2</router-link>
    <router-link :to="{ name: 'data', params: { id: 30 } }">頁面3</router-link>
  </nav>
  <button @click="$router.push('/')">跳轉到頁面1</button>
  <button
    @click="
      $router.push({
        name: 'user',
        params: { id: 20 },
      })
    "
  >
    跳轉到頁面2
  </button>
  <button @click="$router.replace({
        name: 'data',
        params: { id: 30 },
      })">跳轉到頁面3</button>
  <button @click="$router.go(-1)">上一頁</button>
  <button @click="$router.go(1)">下一頁</button>
  <button @click="$router.go(0)">刷新</button>

  <router-view></router-view>
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
