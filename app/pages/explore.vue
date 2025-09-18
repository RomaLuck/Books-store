<script setup lang="ts">
import BooksRow from "~/components/BooksRow.vue";

const books: IBook[] = await $fetch('/api/books');

</script>

<template>
  <Navigation/>
  <main class="main">
    <ExploreHero/>
    <BooksRow :books="books" :title="`New Releases`"/>
    <BooksRow :books="books" :title="`Top Rated Books`"/>
    <BooksRow :books="books" :title="`Our Suggetion`"/>
    <BooksRow :books="books" :title="`Most Popular Books`"/>
  </main>
  <Footer/>
</template>

<style scoped lang="scss">

</style>