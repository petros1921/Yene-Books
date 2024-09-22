<template>
  <div class="min-h-screen flex justify-center items-center bg-blue-50">
    <!-- Main Content -->
    <div class="flex-1 flex flex-col items-center justify-center">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Welcome to Your Dashboard</h1>
      <p class="text-lg text-gray-700">You are successfully logged in!</p>
      <section class="container mx-auto py-12 text-center h-screen flex items-center justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
          <!-- My Books Section -->
          <div class="group p-6 border rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:bg-blue-200 flex flex-col items-center justify-center h-48">
            <router-link to="/my-books" class="hover:underline text-2xl font-semibold mb-4">My Books</router-link>
            <p class="text-gray-600">Books you have Read/Unread</p>
          </div>
          <!-- Add Reviews Section -->
          <div class="group p-6 border rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:bg-blue-200 flex flex-col items-center justify-center h-48">
            <router-link to="/reviews" class="hover:underline text-2xl font-semibold mb-4">Add Reviews</router-link>
            <p class="text-gray-600">Write reviews and share your thoughts on your favorite books.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
  
<script>
import backgroundImage from '@/assets/Img2.jpg';

export default {
    name: "UserDashboard",
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
      methods: {
        handleSignOut() {
          // Perform sign-out logic here (e.g., clear tokens, logout API call)
          localStorage.removeItem('token'); // Example: clearing token from local storage
          this.$router.push('/login'); // Redirect to the sign-in page
        },
      },
};
</script>
  
<style scoped>

</style>