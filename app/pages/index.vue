<script setup lang="ts">
import BooksListRow from "~/components/BooksListRow.vue";
import Book from "~/components/Book.vue";

const runtimeConfig = useRuntimeConfig()

const books: Book = [
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
  <BooksListRow :books="books" :title="`Best Seller Books`"/>
  <Footer/>
</template>

<style scoped lang="scss">

</style>