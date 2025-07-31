<script setup lang="ts">
defineProps<{
  book: IBook
}>()
</script>

<template>
  <div class="book">
    <div class="book__image">
      <img :src="book.image_url" alt="cooking made easy" loading="lazy">
      <div class="book__price">{{ book.price }}</div>
    </div>
    <div class="book__name">{{ book.name }}</div>
    <div class="book__rating">{{ book.rating }}</div>
    <div class="book__description">{{ book.description }}</div>
    <button class="book__add-button">
      Add To Cart
    </button>
  </div>
</template>

<style scoped lang="scss">
.book {
  width: 232px;
  height: 390px;
  border-radius: 10px;
  background-color: #EEF2FF;
  padding: 16px;
  position: relative;

  &__image {
    width: 200px;
    height: 200px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    .book__price {
      position: absolute;
      left: 0;
      bottom: 13px;
      top: auto;
      background-color: #EEF2FF;
      color: #4F46E5;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      padding: 2px 8px;
      border-radius: 0 4px 4px 0;
    }
  }

  &__name {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #1C2024;
  }

  &__description {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #1C2024;
  }

  &__add-button {
    position: absolute;
    left: 16px;
    bottom: 16px;
    right: 16px;
    height: 32px;
    background-color: #18181B;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    border-radius: 4px;

    &::before {
      content: '';
      position: absolute;
      background-image: url('/images/svg/trolley.svg');
      background-size: 20px;
      background-repeat: no-repeat;
      left: 30px;
      top: 6px;
      width: 20px;
      height: 20px;
    }
  }
}
</style>