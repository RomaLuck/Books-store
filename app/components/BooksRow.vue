<script setup lang="ts">
import Book from "~/components/Book.vue";
import {ref} from 'vue';

defineProps<{
  title?: string
  books?: IBook[]
}>()

const carouselRef = ref<HTMLElement | null>(null);
const currentIndex = ref(0);
const scrollAmount = 300;

const updateCurrentIndex = () => {
  if (carouselRef.value) {
    const scrollLeft = carouselRef.value.scrollLeft;
    currentIndex.value = Math.round(scrollLeft / scrollAmount);
  }
};

const scrollLeft = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  }
};

const scrollRight = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
};

const scrollToIndex = (index: number) => {
  if (carouselRef.value) {
    carouselRef.value.scrollTo({
      left: index * scrollAmount,
      behavior: 'smooth'
    });
    currentIndex.value = index;
  }
};
</script>

<template>
  <div class="books">
    <h3 class="books__title">
      {{ title }}
    </h3>
    <div class="books__container">
      <button class="scroll-button scroll-button--left" @click="scrollLeft">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="#1C2024" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="books__list carousel" ref="carouselRef" @scroll="updateCurrentIndex">
        <Book v-for="book in books" :book="book" :key="book.id"/>
      </div>
      <button class="scroll-button scroll-button--right" @click="scrollRight">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="#1C2024" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="carousel-dots">
      <button
          v-for="(_, index) in books"
          :key="index"
          class="dot"
          :class="{ 'dot--active': index === currentIndex }"
          @click="scrollToIndex(index)"
      ></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.books {
  min-height: 495px;
  position: relative;

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #1C2024;
    padding-bottom: 32px;
  }

  &__container {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 26px;
  }

  .carousel {
    width: 100%;
    overflow-x: auto;
    display: flex;
    padding-inline: 16px;
    gap: 40px;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #E0E0E0;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &--active {
    background-color: #1C2024;
    transform: scale(1.2);
  }

  &:hover {
    transform: scale(1.2);
  }
}

.scroll-button {
  position: absolute;
  z-index: 1;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);

    svg path {
      stroke: #666;
    }
  }

  &--left {
    left: 0;

    svg {
      transform: rotate(180deg);
    }
  }

  &--right {
    right: 0;
  }

  svg {
    transition: transform 0.2s ease;

    path {
      transition: stroke 0.2s ease;
    }
  }
}
</style>