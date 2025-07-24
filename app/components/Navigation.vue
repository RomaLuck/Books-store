<script setup lang="ts">

</script>

<template>
  <header class="header">
    <div class="header__items">
      <div class="header__logo">
        Books
      </div>
      <div class="header__navigation">
        <ul class="header__navigation__list">
          <li class="header__navigation__list-item">Home</li>
          <li class="header__navigation__list-item">Explore</li>
          <li class="header__navigation__list-item">Shop</li>
          <li class="header__navigation__list-item">Sell Your Book</li>
        </ul>
        <img src="/images/header/Img.png" alt="buy" loading="lazy">
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  font-family: Segoe UI, sans-serif;
  background-color: #E4E4E7;
  color: #1E1B4B;

  &__items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 63px;
    flex-wrap: wrap;
  }

  &__logo {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }

  &__navigation {
    display: flex;
    column-gap: 20px;
    flex-wrap: wrap;

    &__list {
      display: flex;
      column-gap: 20px;
      text-transform: uppercase;
      font-size: 12.8px;
      flex-wrap: wrap;
    }
  }

}
</style>