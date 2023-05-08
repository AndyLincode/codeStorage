<template>
  <div>
    <form action="" @submit.prevent>
      <label for="">手機</label>
      <input type="text" v-model="phone">
      <label for="">驗證碼</label>
      <input type="text" v-model="validation">
      <button>傳送驗證碼</button>
    </form>

  </div>
</template>

<script setup> 
import { ref } from 'vue';

const phone = ref('')
const validation = ref('')
</script>

<style scoped>
div form {
  display: flex;
  flex-direction: column;
}
button {
  width: 100px;
}
</style>