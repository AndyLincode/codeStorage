<template>
  <div>
    <h3>行數: {{ data.length }}</h3>
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.content }}<button @click="removeText(item.id)">刪除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { toRefs, watch } from "vue";
const props = defineProps(["data"]);
const emits = defineEmits(["remove"]);
const { data } = toRefs(props);


const removeText = (id) => {
  emits("remove", id);
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>
