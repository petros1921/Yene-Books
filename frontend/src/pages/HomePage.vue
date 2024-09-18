<template>
  <div class="homepage">
    <!-- Main Section -->
    <section class="bg-cover bg-center h-screen flex items-center justify-center text-center" 
             :style="backgroundStyle">
      <div class="bg-blue-50 bg-opacity-80 p-10 rounded-lg text-black">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Yene Books</h1>
        <p class="text-lg md:text-xl mb-6">
          Manage your personal library effortlessly. Track your books, mark them as read/unread, 
          and add reviews. Organize your reading journey like never before!
        </p>
        <div class="flex space-x-4 justify-center">
          <router-link
            class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
            to="/signup">Get Started</router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container mx-auto py-12 text-center">
      <h2 class="text-3xl font-bold mb-8">Why Choose Yene Books?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="group p-6 border rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:bg-blue-100">
          <h3 class="text-2xl font-semibold mb-4">Track Your Books</h3>
          <p class="text-gray-600">Easily manage your entire book collection in one place.</p>
        </div>
        <div class="group p-6 border rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:bg-blue-100">
          <h3 class="text-2xl font-semibold mb-4">Mark as Read/Unread</h3>
          <p class="text-gray-600">Keep track of the books you've read or plan to read.</p>
        </div>
        <div class="group p-6 border rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:bg-blue-100">
          <h3 class="text-2xl font-semibold mb-4">Add Reviews</h3>
          <p class="text-gray-600">Write reviews and share your thoughts on your favorite books.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import backgroundImage from '@/assets/Img1.jpg';

export default {
  name: "HomePage",
  data() {
    return {
      backgroundStyle: {
        backgroundImage: `url(${backgroundImage})`, // Set the dynamic background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',  // Ensure full height for background
      },
    };
  },
};
</script>

<style scoped>
/* Custom Styling */
.homepage {
  font-family: 'Inter', sans-serif;
}
.bg-cover {
  background-size: cover;
  background-repeat: no-repeat;
}
.bg-center {
  background-position: center;
}
</style>
