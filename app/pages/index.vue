<script setup lang="ts">
import Favorite from "~/components/Favorite.vue";
import BooksRow from "~/components/BooksRow.vue";

const runtimeConfig = useRuntimeConfig()

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
  <Intro/>
  <BooksRow :books="books" :title="`Best Seller Books`"/>
  <Favorite/>
  <Award/>
  <Footer/>
</template>

<style scoped lang="scss">

</style>