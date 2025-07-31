<script setup lang="ts">

</script>

<template>
  <div class="favorite">
    <div class="favorite__image">
      <img src="/images/favorite/favorite.png" alt="favorite book">
    </div>
    <div class="favorite__text">
      <div class="favorite__text-title">
        Find Your favorite
        <p class="highlight">book here!</p>
      </div>
      <div class="favorite__text-description">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Quo ad non reprehenderit. Reiciendis illo iusto
          incidunt distinctio exercitationem officiis dicta dolores
          dolorem ea! Non saepe, voluptatum cupiditate beatae
          in dolore!</p>
      </div>
      <div class="favorite__text-statistics statistics__items">
        <div class="statistics__item">
          <div class="statistics__item-number">
            800+
          </div>
          <div class="statistics__item-name">
            Book Listing
          </div>
        </div>
        <div class="statistics__item">
          <div class="statistics__item-number">
            550+
          </div>
          <div class="statistics__item-name">
            Register User
          </div>
        </div>
        <div class="statistics__item">
          <div class="statistics__item-number">
            1,200+
          </div>
          <div class="statistics__item-name">
            Books Sold
          </div>
        </div>
      </div>
      <button class="favorite__text-explore-button">Explore Now</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.favorite {
  min-height: 438px;
  display: flex;
  column-gap: 160px;
  padding: 16px 63px 22px 63px;

  &__text-title {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    text-transform: capitalize;
    color: #1C2024;
    margin-bottom: 17px;

    .highlight {
      color: #6366F1;
    }
  }

  &__text-description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #1C2024;
    margin-bottom: 17px;
  }

  .statistics__items {
    display: flex;
    flex-wrap: wrap;
    column-gap: 67px;
    margin-bottom: 32px;

    .statistics__item {
      &-number {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: #1C2024;
      }

      &-name {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #1C2024;
      }
    }
  }

  &__text-explore-button {
    background: #6366F1;
    border-radius: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    height: 32px;
    width: 107px;
  }
}
</style>