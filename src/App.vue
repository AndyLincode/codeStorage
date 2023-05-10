<script setup>
import { ref } from "vue";
import TextList from "./components/TextList.vue";
import UserTable from "./components/UserTable.vue";
import useListData from "./composables/useListData";

const { data, removeItem: removeText, sortByKey } = useListData([
  {id:1, content:"這是訊息1"},
  {id:2, content:"這是訊息2"},
  {id:3, content:"這是訊息3"},
  {id:4, content:"這是訊息4"},
  {id:5, content:"這是訊息5"},
]);
</script>

<template>

  <div>
    <button @click="sortByKey('content', 'desc')">排序</button>
    <TextList :data="data" @remove="removeText" />
  </div>
  <UserTable />
</template>

<style scoped>
.wrapper {
  flex-direction: column;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
.about {
  width: 800px;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
button {
  width: 80px;
  height: 30px;
}
</style>
