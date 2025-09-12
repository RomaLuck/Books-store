<script setup lang="ts">
import type {NuxtError} from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const errorDescriptions: Record<number, string> = {
  404: "The page you're looking for could not be found.",
  500: "Something went wrong on our end. Please try again later.",
  403: "You do not have permission to access this page.",
  400: "Bad request. Please check your input and try again.",
}

const statusCode = props.error?.statusCode || 500;
const description = errorDescriptions[statusCode];
</script>

<template>
  <div class="error">
    <h1 class="error__code">{{ statusCode }}</h1>
    <h2 class="error__message">Oops! {{ error?.message || "Something went wrong" }}</h2>
    <p class="error__description">{{ description }}</p>
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
  padding: 10px;

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

  .back-home-button {
    gap: 8px;
  }
}

</style>
