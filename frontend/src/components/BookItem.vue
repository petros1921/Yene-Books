<template>
    <div class="book-item p-4 border rounded-lg">
      <img :src="book.coverImage" alt="book cover" class="w-full h-40 object-cover mb-4" />
      <h3 class="text-xl font-semibold">{{ book.title }}</h3>
      <p class="text-gray-600">{{ book.author }}</p>
      <div class="actions mt-4">
        <button @click="markAsRead(book)" class="bg-blue-500 text-white py-1 px-3 rounded">Mark as Read</button>
        <button @click="addReview(book)" class="bg-green-500 text-white py-1 px-3 ml-2 rounded">Add Review</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookItem',
    props: {
      book: Object,
    },
    methods: {
      markAsRead(book) {
        this.$emit('markAsRead', book);
      },
      addReview(book) {
        this.$emit('addReview', book);
      },
    },
  };
  </script>
  
  <style scoped>
  .book-item {
    transition: box-shadow 0.3s ease;
  }
  .book-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  </style>
  