<template>
  <div>
    <p v-fsize:[unit]="fontSize">這是一段文字</p>
    <button @click="fontSize++">A</button>
    <button @click="fontSize--">a</button>
  </div>
</template>

<script setup> 
import { ref } from 'vue'; 

const fontSize = ref(36)
const unit = ref('rem')
</script>

