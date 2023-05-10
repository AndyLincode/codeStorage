<template>
  <h1>
    {{ title }}
  </h1>
</template>

<script setup>
import { inject } from "vue";

const title = inject("title");
</script>

<style lang="scss" scoped></style>
