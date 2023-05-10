<template>
  <div class="card">
    <CardTitle :msg="msg" />
    <CardContent class="content-class" :test="dataContent" />
  </div>
</template>

<script setup>
import { provide, ref, onMounted } from "vue";
import CardContent from "./CardContent.vue";
import CardTitle from "./CardTitle.vue";

const cardData = {
  title: "Card Title",
  content: "Card Content",
};
const msg="message"
const dataContent = ref("卡片內容")

onMounted(() => {
  setTimeout(() => {
    dataContent.value = "改變後的卡片內容" 
  }, 2000);
}),

provide("title",cardData.title)
provide("content",cardData.content)
</script>

<style lang="scss" scoped></style>
