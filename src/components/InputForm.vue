<template>
  <div>
    <input type="text" :value="inputValue" @input="inputHandler" />
    <!-- @input="$emit('update:inputValue', $event.target.value)" -->
    <br />
    <select :value="selectValue" @change="changeHandler">
      <!-- @change="$emit('update:selectValue', $event.target.value)" -->
      <option value="default">預設</option>
      <option value="frontend">前端</option>
      <option value="backend">後端</option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps(["inputValue", "selectValue"]);
const emit = defineEmits(["update:inputValue", "update:selectValue"]);

const inputHandler = (event) => {
  emit("update:inputValue", event.target.value);
};
const changeHandler = (event) => {
  emit("update:selectValue", event.target.value);
};
</script>

<style lang="scss" scoped></style>
