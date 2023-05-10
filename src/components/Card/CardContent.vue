<template>
  <div>
    {{ content }}
  </div>
</template>

<script setup>
import { inject } from "vue";

const content = inject("content");
</script>

<style lang="scss" scoped></style>
