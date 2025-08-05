<script setup lang="ts">

</script>

<template>
  <div class="intro">
    <div class="intro__hero">
      <div class="intro__hero-title">
        Buy and sell your
        books
        <span class="highlight">for the best
        prices</span>
      </div>
      <div class="intro__hero-description">
        Find and read more your'll love, and keep track of the books you want to read.
        Be part of the word's largeest community of book lovers on Goodreads.
      </div>
      <div class="intro__hero-search input-wrapper">
        <input type="text" class="intro__input input" placeholder="Search..."/>
      </div>
    </div>
    <div class="intro__image">
      <img class="intro__image-first" src="/images/intro/Background1.png" alt="intro-book-first" loading="lazy">
      <img class="intro__image-second" src="/images/intro/Background2.png" alt="intro-book-second" loading="lazy">
      <img class="intro__image-third" src="/images/intro/Background3.png" alt="intro-book-third" loading="lazy">
      <img class="intro__image-fourth" src="/images/intro/Background4.png" alt="intro-book-fourth" loading="lazy">
    </div>
  </div>
</template>

<style scoped lang="scss">
.intro {
  min-height: 570px;
  font-family: Segoe UI, sans-serif;
  background-color: #E4E4E7;
  color: #1E1B4B;
  display: flex;
  justify-content: space-between;
  padding: 87px 160px 87px 63px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  &__hero {
    display: flex;
    flex-direction: column;
    max-width: 560px;
    row-gap: 16px;

    &-search {
      width: 300px;
    }

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 56px;
      line-height: 74px;

      .highlight {
        color: #6366F1;
      }
    }
  }

  &__image {
    position: relative;
    width: 280px;

    @media (width < 1100px) {
      display: none;
    }

    img {
      position: absolute;
    }

    &-first {
      z-index: 5;
    }

    &-second {
      z-index: 4;
      left: 25px;
    }

    &-third {
      z-index: 3;
      left: 44px;
    }

    &-fourth {
      z-index: 2;
      left: 60px;
    }
  }

}
</style>