<template>
  <div>
    <form action="" @submit.prevent>
      <label for="">姓名</label>
      <input type="text" v-model="name">
      <label for="">生日</label>
      <input type="date" v-model="birthday">
    </form>
  </div>
</template>

<script setup> 
import { ref } from 'vue';

const name = ref('')
const birthday = ref('')
</script>

<style scoped>
div form{
  display: flex;
  flex-direction: column;
}
</style>