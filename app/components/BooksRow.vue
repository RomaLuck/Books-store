<script setup lang="ts">
import Book from "~/components/Book.vue";

defineProps<{
  title?: string
  books?: IBook[]
}>()

</script>

<template>
  <div class="books">
    <h3 class="books__title">
      {{ title }}
    </h3>
    <div class="books__list">
      <Book v-for="book in books" :book="book" :key="book.id"/>
    </div>
    <div class="scroll-buttons">
      <img src="/images/svg/button-scroll.svg" alt="button scroll">
      <img src="/images/svg/button-scroll.svg" alt="button scroll">
      <img src="/images/svg/button-scroll.svg" alt="button scroll">
      <img src="/images/svg/button-scroll.svg" alt="button scroll">
      <img src="/images/svg/button-scroll.svg" alt="button scroll">
      <img src="/images/svg/button-scroll.svg" alt="button scroll">
      <img src="/images/svg/button-scroll.svg" alt="button scroll">
      <img src="/images/svg/button-scroll.svg" alt="button scroll">
      <img src="/images/svg/button-scroll.svg" alt="button scroll">
      <img src="/images/svg/button-scroll.svg" alt="button scroll">
    </div>
  </div>
</template>

<style scoped lang="scss">
.books {
  min-height: 495px;

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #1C2024;
    padding-bottom: 32px;
  }

  &__list {
    display: flex;
    flex-wrap: nowrap;
    gap: 40px;
    margin-inline: 32px;
    padding-inline: 16px;
    margin-bottom: 26px;
  }
}

.scroll-buttons {
  display: flex;
  flex-wrap: nowrap;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 33px;
}
</style>