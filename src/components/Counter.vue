<script setup>
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();
const resetHandler = ()=> {
  counterStore.$patch({
    count: 0,
    nameInput: '',
  })
}
console.log(counterStore.theme);
</script>
<template>
  <div>
    <span>名字: </span><input type="text" v-model="counterStore.nameInput">
    <h1>{{ counterStore.count }}</h1>
    <h1>{{ counterStore.clickShow }}</h1>
    <button @click="counterStore.increment()">+1</button>
    <button @click="resetHandler">Reset</button>
  </div>
</template>

<style scoped></style>
