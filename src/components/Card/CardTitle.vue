<template>
  <h1>
    {{ title }}
  </h1>
  <h2>{{ props.msg }}</h2>
</template>

<script setup>
import { inject } from "vue";

const title = inject("title");
const props = defineProps(["msg"]);
</script>

<style lang="scss" scoped></style>
