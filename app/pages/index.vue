<script setup lang="ts">
import BooksRow from "~/components/BooksRow.vue";

const runtimeConfig = useRuntimeConfig()

const books: IBook[] = await $fetch('/api/books');

</script>

<template>
  <Navigation/>
  <main class="main">
    <MainIntro/>
    <BooksRow :books="books" :title="`Best Seller Books`"/>
    <MainFavorite/>
    <MainAward/>
    <BooksRow :books="books" :title="`New Releases`"/>
  </main>
  <Footer/>
</template>

<style scoped lang="scss">

</style>