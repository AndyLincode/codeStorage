<template>
  <div class="card">
    <slot name="title"></slot>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>


const props = defineProps(['title'])

</script>

<style lang="scss" scoped>

</style>