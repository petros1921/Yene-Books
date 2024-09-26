<template>
  <div class="min-h-screen p-6 bg-gray-50">
    <h2 class="text-4xl font-extrabold text-blue-600 mb-6">My Books</h2>
    <!-- Add Book Form -->
    <form @submit.prevent="addBook" class="mb-10 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <div class="mb-5">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Book Title</label>
        <input
          type="text"
          v-model="newBook.title"
          id="title"
          class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200"
          placeholder="Enter book title"
          required
        />
      </div>
      <div class="mb-5">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="status">Status</label>
        <select
          v-model="newBook.status"
          id="status"
          class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200"
        >
          <option value="unread">Unread</option>
          <option value="read">Read</option>
          <option value="reading">Currently Reading</option> <!-- New status option -->
        </select>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition duration-300 font-semibold"
      >
        Add Book
      </button>
    </form>

    <!-- Currently Reading Books List -->
    <div v-if="books.reading.length" class="mb-8">
      <h3 class="text-2xl font-bold text-yellow-600 mb-4">Currently Reading</h3>
      <ul class="space-y-4">
        <li
          v-for="book in books.reading"
          :key="book.id"
          class="p-4 border rounded-lg bg-white flex items-center justify-between shadow hover:shadow-lg transition"
        >
          <div class="flex items-center">
            <button
              @click="deleteBook(book, 'reading')"
              class="text-red-500 hover:text-red-700 mr-4 focus:outline-none"
              aria-label="Delete Book"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
            <span class="text-lg">{{ book.title }}</span>
          </div>
          <div>
            <button @click="markAsUnread(book)" class="text-blue-600 hover:text-blue-800 hover:underline ml-4">
              Mark as Unread
            </button>
            <button @click="markAsRead(book)" class="text-green-600 hover:text-green-800 hover:underline ml-4">
              Mark as Read
            </button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Read Books List -->
    <div v-if="books.read.length" class="mb-8">
      <h3 class="text-2xl font-bold text-green-600 mb-4">Read Books</h3>
      <ul class="space-y-4">
        <li
          v-for="book in books.read"
          :key="book.id"
          class="p-4 border rounded-lg bg-white flex items-center justify-between shadow hover:shadow-lg transition"
        >
          <div class="flex items-center">
            <button
              @click="deleteBook(book, 'read')"
              class="text-red-500 hover:text-red-700 mr-4 focus:outline-none"
              aria-label="Delete Book"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
            <span class="text-lg">{{ book.title }}</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- Unread Books List -->
    <div v-if="books.unread.length">
      <h3 class="text-2xl font-bold text-red-600 mb-4">Unread Books</h3>
      <ul class="space-y-4">
        <li
          v-for="book in books.unread"
          :key="book.id"
          class="p-4 border rounded-lg bg-white flex items-center justify-between shadow hover:shadow-lg transition"
        >
          <div class="flex items-center">
            <button
              @click="deleteBook(book, 'unread')"
              class="text-red-500 hover:text-red-700 mr-4 focus:outline-none"
              aria-label="Delete Book"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
            <span class="text-lg">{{ book.title }}</span>
          </div>
          <div>
            <button @click="markAsReading(book)" class="text-yellow-600 hover:text-yellow-800 hover:underline ml-4">
              Mark as Currently Reading
            </button>
            <button @click="markAsRead(book)" class="text-blue-600 hover:text-blue-800 hover:underline ml-4">
              Mark as Read
            </button>
          </div>
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
        reading: [], // New list for "Currently Reading"
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
      } else if (book.status === "reading") {
        this.books.reading.push(book); // Add to the "Currently Reading" list
      } else {
        this.books.unread.push(book);
      }

      // Reset the form fields
      this.newBook.title = "";
      this.newBook.status = "unread";
    },
    markAsRead(book) {
      // Move book from other lists to the "read" list
      this.books.unread = this.books.unread.filter((b) => b.id !== book.id);
      this.books.reading = this.books.reading.filter((b) => b.id !== book.id);
      book.status = "read";
      this.books.read.push(book);
    },
    markAsReading(book) {
      // Move book from other lists to the "reading" list
      this.books.unread = this.books.unread.filter((b) => b.id !== book.id);
      this.books.read = this.books.read.filter((b) => b.id !== book.id);
      book.status = "reading";
      this.books.reading.push(book);
    },
    markAsUnread(book) {
      // Move book to the "unread" list
      this.books.reading = this.books.reading.filter((b) => b.id !== book.id);
      book.status = "unread";
      this.books.unread.push(book);
    },
    deleteBook(book, type) {
      // Delete book based on its type (read, unread, or reading)
      if (type === "read") {
        this.books.read = this.books.read.filter((b) => b.id !== book.id);
      } else if (type === "reading") {
        this.books.reading = this.books.reading.filter((b) => b.id !== book.id);
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

