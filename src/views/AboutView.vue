<template>
  <div class="about">
    <h1 v-if="shown">This is an about page</h1>
    <button @click="clickHandler">{{ shown === true ? 'HIDE' : 'SHOW'  }}</button>
  </div>
</template>


<script setup>
import { ref } from 'vue';


const shown = ref(true);

const clickHandler = ()=> {
  shown.value = !shown.value;
}

</script>


<style>
.about {
  width: 300px;
}
</style>
