<script setup lang="ts">
import BooksRow from "~/components/BooksRow.vue";

const books: IBook[] = [
  {
    id: 1,
    name: "Cooking Made Easy",
    description: "Simple and delicious recipes for everyday cooking.",
    price: "₹9.99",
    rating: 5,
    image_url: "/images/best-seller-books/cooking-made-easy.png"
  },
  {
    id: 1,
    name: "Cooking Made Easy",
    description: "Simple and delicious recipes for everyday cooking.",
    price: "₹9.99",
    rating: 5,
    image_url: "/images/best-seller-books/cooking-made-easy.png"
  },
  {
    id: 1,
    name: "Cooking Made Easy",
    description: "Simple and delicious recipes for everyday cooking.",
    price: "₹9.99",
    rating: 5,
    image_url: "/images/best-seller-books/cooking-made-easy.png"
  },
  {
    id: 1,
    name: "Cooking Made Easy",
    description: "Simple and delicious recipes for everyday cooking.",
    price: "₹9.99",
    rating: 5,
    image_url: "/images/best-seller-books/cooking-made-easy.png"
  },
  {
    id: 1,
    name: "Cooking Made Easy",
    description: "Simple and delicious recipes for everyday cooking.",
    price: "₹9.99",
    rating: 5,
    image_url: "/images/best-seller-books/cooking-made-easy.png"
  }
]
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