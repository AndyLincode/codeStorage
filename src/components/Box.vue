<template>
  <div>
    <div class="box"></div>
    <input type="range" min="0" max="360" v-model="degree" />
    <p>{{ degree }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const degree = ref(0);

const degreeStr = computed(() => {
  return degree.value + "deg";
});

</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
  transform: rotate(v-bind(degreeStr));
  margin-bottom: 20px;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
