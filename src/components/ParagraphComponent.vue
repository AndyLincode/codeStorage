<template>
  <p>
    <TextComponent>一些文字</TextComponent>
  </p>
</template>

<script setup>
import TextComponent from "./TextComponent.vue";
</script>

<style scoped>
p {
  background-color: lightyellow;
  padding: 1.2em;
  border-radius: 8px;
  font-size: 28px;
}

.text {
  color: red;
}

.text :deep(a) {
  outline: 2px solid burlywood;
}
</style>
