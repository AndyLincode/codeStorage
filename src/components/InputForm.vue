<template>
  <div>
<input type="text" :value="modelValue" @input="inputHandler">
  </div>
</template>

<script setup> 

const props = defineProps(["modelValue"])
const emit = defineEmits(["update:modelValue"])

const inputHandler = (event)=>{
  emit('update:modelValue', event.target.value)
}


</script>

<style lang="scss" scoped>

</style>