<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  rating: number
  max?: number
}>()

const maxStars = props.max ?? 5

const stars = computed(() => {
  return Array.from({ length: maxStars }, (_, i) => i < props.rating)
})
</script>

<template>
  <div class="stars">
    <span
        v-for="(filled, idx) in stars"
        :key="idx"
        class="star"
        :class="{ filled }"
    >&#9733;</span>
  </div>
</template>

<style scoped lang="scss">
.stars {
  display: flex;
  gap: 4px;
}
.star {
  font-size: 1rem;
  color: #ccc;
  transition: color 0.2s;
}
.star.filled {
  color: #FFD700;
}
</style>
