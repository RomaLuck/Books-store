<script setup lang="ts">

</script>

<template>
  <div class="hero">
    <div class="hero__info">
      <div class="hero__info-title">
        Find Your Favorite — 1200+ Books Available
      </div>
      <div class="hero__info-search">
        <div class="input-wrapper">
          <input type="text" name="search-book" id="search-book" class="input" placeholder="Search For Books"/>
        </div>
      </div>
    </div>
    <div class="hero__image">
      <NuxtImg src="/images/explore/hero/award.png" alt="award"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 63px;
  background-color: #E4E4E7;
  color: #FFFFFF;
  flex-wrap: wrap;
  margin-bottom: 32px;

  &__info {
    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      color: #1C2024;
    }
  }
}
</style>