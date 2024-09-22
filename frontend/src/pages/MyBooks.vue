<template>
    <div class="min-h-screen p-6 bg-gray-50">
        <h2 class="text-3xl font-bold text-blue-600 mb-4">My Books</h2>
        <!-- Add Book Form -->
        <form @submit.prevent="addBook" class="mb-8">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Book Title</label>
                <input
                type="text"
                v-model="newBook.title"
                id="title"
                class="w-full px-3 py-2 border border-gray-300 rounded"
                required
                />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="status">Status</label>
                <select
                v-model="newBook.status"
                id="status"
                class="w-full px-3 py-2 border border-gray-300 rounded"
                >
                <option value="unread">Unread</option>
                <option value="read">Read</option>
                </select>
            </div>
            <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Add Book
            </button>
        </form>
  
        <!-- Read Books List -->
        <div v-if="books.read.length" class="mb-8">
            <h3 class="text-xl font-semibold text-green-600 mb-4">Read Books</h3>
            <ul>
                <li
                v-for="book in books.read"
                :key="book.id"
                class="mb-2 p-3 border rounded bg-white flex items-center justify-between"
                >
                <div class="flex items-center">
                    <button
                    @click="deleteBook(book, 'read')"
                    class="text-red-500 hover:text-red-700 mr-2"
                    aria-label="Delete Book"
                    >
                    <i class="fas fa-trash"></i> <!-- Trash icon using Font Awesome -->
                    </button>
                    <span>{{ book.title }}</span>
                </div>
                </li>
            </ul>
        </div>
  
        <!-- Unread Books List -->
        <div v-if="books.unread.length">
            <h3 class="text-xl font-semibold text-red-600 mb-4">Unread Books</h3>
            <ul>
                <li
                v-for="book in books.unread"
                :key="book.id"
                class="mb-2 p-3 border rounded bg-white flex items-center justify-between"
                >
                <div class="flex items-center">
                    <button
                    @click="deleteBook(book, 'unread')"
                    class="text-red-500 hover:text-red-700 mr-2"
                    aria-label="Delete Book"
                    >
                    <i class="fas fa-trash"></i> <!-- Trash icon using Font Awesome -->
                    </button>
                    <span>{{ book.title }}</span>
                </div>
                <button @click="markAsRead(book)" class="ml-2 text-blue-600 hover:underline">
                    Mark as Read
                </button>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "MyBooks",
    data() {
      return {
        newBook: {
          title: "",
          status: "unread", // default status
        },
        books: {
          read: [],
          unread: [],
        },
      };
    },
    methods: {
      addBook() {
        const book = {
          id: Date.now(),
          title: this.newBook.title,
          status: this.newBook.status,
        };
  
        if (book.status === "read") {
          this.books.read.push(book);
        } else {
          this.books.unread.push(book);
        }
  
        // Reset the form fields
        this.newBook.title = "";
        this.newBook.status = "unread";
      },
      markAsRead(book) {
        // Move book from unread to read list
        this.books.unread = this.books.unread.filter((b) => b.id !== book.id);
        book.status = "read";
        this.books.read.push(book);
      },
      deleteBook(book, type) {
        // Delete book based on its type (read or unread)
        if (type === "read") {
          this.books.read = this.books.read.filter((b) => b.id !== book.id);
        } else {
          this.books.unread = this.books.unread.filter((b) => b.id !== book.id);
        }
      },
    },
};
</script>
  
<style scoped>
  /* Add any additional styling as needed */
</style>
  