<template>
  <div>
    {{ content }}
  </div>
</template>

<script setup>
import { inject, useAttrs, watchEffect } from "vue";

const content = inject("content");
const attrs = useAttrs();

watchEffect(()=> console.log(attrs.test))

</script>

<style lang="scss" scoped></style>
