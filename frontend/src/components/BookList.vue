<template>
    <div class="book-list">
      <h2 class="text-2xl font-bold">Your Book Collection</h2>
      <BookList :books="books" @markAsRead="handleMarkAsRead" @addReview="handleAddReview" />
      <div class="grid grid-cols-3 gap-4">
        <BookItem v-for="book in books" :key="book._id" :book="book" />
      </div>
    </div>
  </template>
  
  <script>
  import BookItem from './BookItem.vue';
  
  export default {
    name: 'BookList',
    components: { BookItem },
    props: {
      books: Array,
    },
  };
  </script>
  
  <style scoped>
  .book-list {
    padding: 1rem;
  }
  </style>  