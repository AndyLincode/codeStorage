<template>
  <div class="card">
    <CardTitle />
    <CardContent />
  </div>
</template>

<script setup>
import { provide } from "vue";
import CardContent from "./CardContent.vue";
import CardTitle from "./CardTitle.vue";

const cardData = {
  title: "Card Title",
  content: "Card Content",
};

provide("title",cardData.title)
provide("content",cardData.content)
</script>

<style lang="scss" scoped></style>
