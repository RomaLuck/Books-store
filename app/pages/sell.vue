<script setup lang="ts">
import * as z from "zod";
import {ref, watch} from "vue";
import {BOOK_CONDITIONS} from "@/utils/bookConditions";

const schema = z.object({
  title: z.string().min(3, "Title is required"),
  author: z.string().min(3, "Author is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.number().min(0, "Price must be a positive number"),
  category: z.string().min(3, "Category is required"),
  condition: z.enum(BOOK_CONDITIONS.map(c => c.value), "Condition is required"),
  image: z.file().mime(["image/jpeg", "image/png"], "Only JPEG or PNG images are allowed"),
});

type Schema = z.infer<typeof schema>;

const formData = reactive<Schema>({
  title: "",
  author: "",
  description: "",
  price: 0,
  category: "",
  condition: "new",
  image: undefined as unknown as File,
});

const defaultCover = "/images/award/award.png";
const previewUrl = ref<string>(defaultCover);

watch(
    () => formData.image,
    (file) => {
      if (file && file instanceof File) {
        previewUrl.value = URL.createObjectURL(file);
      } else {
        previewUrl.value = defaultCover;
      }
    }
);

const handleSubmit = async () => {
  const result = schema.safeParse(formData);
  if (!result.success) {
    console.error(result.error.message);
  } else {
    const fd = new FormData();
    fd.append("title", formData.title);
    fd.append("description", formData.description);
    fd.append("price", formData.price.toString());
    fd.append("category", formData.category);
    fd.append("condition", formData.condition);
    fd.append("image", formData.image)

    const response = await $fetch("/api/sell", {
      method: "POST",
      body: fd,
    });

    console.log(response);
  }
};
</script>

<template>
  <Navigation/>
  <div class="main">
    <form @submit.prevent="handleSubmit" class="form">
      <div class="form-group">
        <label for="title">Title:</label>
        <input
            type="text"
            id="title"
            v-model="formData.title"
            placeholder="Input book title"
            required
        />
      </div>
      <div class="form-group">
        <label for="author">Author:</label>
        <input
            type="text"
            id="author"
            v-model="formData.author"
            placeholder="Input author name"
            required
        />
      </div>
      <div class="form-group">
        <label for="description">Input description:</label>
        <textarea
            id="description"
            v-model="formData.description"
            placeholder="Input book description"
            rows="10"
            required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input
            type="number"
            id="price"
            v-model.number="formData.price"
            min="0"
            placeholder="Input price"
            required
        />
      </div>
      <div class="form-group">
        <label for="category">Category:</label>
        <input
            type="text"
            id="category"
            v-model="formData.category"
            placeholder="Input category"
            required
        />
      </div>
      <div class="form-group">
        <label for="condition">Condition:</label>
        <select id="condition" v-model="formData.condition" required>
          <option v-for="condition in BOOK_CONDITIONS" :key="condition.value" :value="condition.value">
            {{ condition.label }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="image">Photo:</label>
        <input
            type="file"
            id="image"
            accept="image/jpeg, image/png"
            @change="e => formData.image = e.target?.files[0]"
            required
        />
      </div>
      <button type="submit" class="form-button">Add book</button>
    </form>
    <div class="image-preview-container">
      <NuxtImg :src="previewUrl" alt="Preview" class="image-preview"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: space-between;
  min-height: calc(100vh - 60px);
  background-color: #f0f0f0;

  .form {
    max-width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;

    .form-group {
      margin-bottom: 15px;

      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }

      input, textarea, select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
      }

      textarea {
        resize: vertical;
      }
    }

    .form-button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  .image-preview-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    margin: 20px;
    border-radius: 4px;

    .image-preview {
      max-width: 100%;
      height: auto;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }

}
</style>
