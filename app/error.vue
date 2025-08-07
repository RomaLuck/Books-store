<script setup lang="ts">
import type {NuxtError} from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="error">
    <h1 class="error__code">{{ error?.statusCode }}</h1>
    <h2 class="error__message">Oops! Page Not Found</h2>
    <p class="error__description">It seems like you've wandered off the path. The page you're
      looking for doesn't exist or has been moved.</p>
    <NuxtLink to="/">
      <Button type="button" class="back-home-button button">
        <img src="/images/svg/back-home.svg" alt="back home">
        Back to Home
      </Button>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.error {
  background-color: #F5F5F5;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__code {
    font-style: normal;
    font-weight: 700;
    font-size: 120px;
    line-height: 180px;
    color: #FF4D4F;
    margin-bottom: 10px;
  }

  &__message {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #333333;
    margin-bottom: 40px;
  }

  &__description {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #333333;
    margin-bottom: 20px;
    max-width: 500px;
  }

  .back-home-button{
    gap: 8px;
  }
}

</style>
