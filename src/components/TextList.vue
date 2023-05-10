<template>
  <div>
    <h3>行數: {{ data.length }}</h3>
    <ul>
      <li v-for="data in data" :key="data.id">{{ data.text }}</li>
    </ul>
  </div>
</template>

<script setup>
import { toRefs, watch } from "vue";
const props = defineProps(["data", "number"]);
const { number } = toRefs(props);

watch(
  () => number.value,
  () => {
    console.log(number.value);
  }
);

const { data } = props;
</script>

<style lang="scss" scoped></style>
