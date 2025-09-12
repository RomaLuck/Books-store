<script setup lang="ts">

import Book from "~/components/Book.vue";
import Filters from "~/components/Filters.vue";

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
  <div class="main">
    <Filters/>
    <div class="books-list">
      <Book v-for="book in books" :book="book" :key="book.id"/>
    </div>
  </div>
  <!--  todo pagination-->
  <Footer/>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  gap: 20px;

  #product-filter {
    width: 250px;
    padding: 20px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;

    @media (width < 480px) {
      display: none;
    }

    h4 {
      font-size: 16px;
      margin-bottom: 10px;
      color: #333;
      border-bottom: 2px solid #4F46E5;
      padding-bottom: 5px;
    }

    .refinement {
      margin-bottom: 20px;

      .refinement__detail-list, .refinement-detail-list {
        list-style-type: none;
        padding: 0;

        li {
          margin-bottom: 8px;

          a {
            text-decoration: none;
            color: #1C2024;
            display: flex;
            justify-content: space-between;

            &:hover {
              text-decoration: underline;
            }
          }

          .b-checkbox {
            display: flex;
            align-items: center;

            input[type="checkbox"] {
              margin-right: 8px;
            }

            label {
              cursor: pointer;
              display: flex;
              justify-content: space-between;
              width: 100%;

              .results {
                color: #666;
              }
            }
          }
        }
      }
    }
  }

  .books-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    margin: 1em;
  }
}
</style>