<script setup lang="ts">
defineEmits(['click'])
</script>

<template>
  <button @click="$emit('click')">
    <slot/>
  </button>
</template>

<style scoped lang="scss">
button {
  background: #6366F1;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  height: 32px;
  width: 107px;
  cursor: pointer;
  transition: background 0.2s ease;
}
</style>