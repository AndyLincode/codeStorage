<template>
  <div class="about">
    <h1>v-if</h1>
    <h2 v-if="shown">Hello A</h2>
    <h2 v-else>Hello B</h2>
    <button @click="clickHandler">{{ shown === true ? 'Show B' : 'Show A'  }}</button>
    <h1>v-show</h1>
    <h2 v-show="shown2">Hello A</h2>
    <h2 v-show="!shown2">Hello B</h2>
    <button @click="clickHandler2">{{ shown2 === true ? 'Show B' : 'Show A'  }}</button>
  </div>
</template>


<script setup>
import { ref } from 'vue';


const shown = ref(true);
const shown2 = ref(true);

const clickHandler = ()=> {
  shown.value = !shown.value;
}
const clickHandler2 = ()=> {
  shown2.value = !shown2.value;
}

</script>


<style scoped>
h2 {
  color: red
}
</style>
