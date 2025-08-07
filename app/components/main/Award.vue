<script setup lang="ts">

</script>

<template>
  <div class="award">
    <div class="award__info">
      <div class="award__info-title">
        2025 National Book Awards for Fiction Shortlist
      </div>
      <Button class="award__info-button">
        Explore Now
      </Button>
    </div>
    <div class="award__image">
      <img src="/images/award/award.png" alt="award">
    </div>
  </div>
</template>

<style scoped lang="scss">
.award {
  min-height: 282px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  padding-inline: 63px;
  background-color: #FEF9C3;

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    row-gap: 16px;

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