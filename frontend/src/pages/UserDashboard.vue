<template>
  <div class="min-h-screen flex justify-center items-center bg-blue-50" :style="backgroundStyle">
    <div class="absolute inset-0 bg-gradient-to-b from-blue-500 to-transparent opacity-75"></div> <!-- Gradient Overlay -->
    <!-- Main Content -->
    <div class="flex-1 flex flex-col items-center justify-center z-10">
      <h1 class="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">Welcome to Your Dashboard</h1>
      <p class="text-lg text-gray-200 mb-12 drop-shadow-md">You are successfully logged in!</p>

      <section class="container mx-auto py-12 text-center flex items-center justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
          <!-- My Books Section -->
          <div class="group p-6 bg-white border border-gray-300 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-100 flex flex-col items-center justify-center h-60">
            <router-link to="/my-books" class="hover:underline text-2xl font-semibold mb-4 flex items-center text-blue-700">
              <i class="fas fa-book mr-2"></i> My Books
            </router-link>
            <p class="text-gray-600">Books you have Read/Unread</p>
          </div>
          <!-- Add Reviews Section -->
          <div class="group p-6 bg-white border border-gray-300 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-100 flex flex-col items-center justify-center h-60">
            <router-link to="/reviews" class="hover:underline text-2xl font-semibold mb-4 flex items-center text-blue-700">
              <i class="fas fa-pen mr-2"></i> Add Reviews
            </router-link>
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
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
      },
    };
  },
  methods: {
    handleSignOut() {
      localStorage.removeItem('token'); // Clear token
      this.$router.push('/login'); // Redirect to sign-in page
    },
  },
};
</script>

<style scoped>
/* For enhancing the general styles */
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

p {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

button {
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-3px);
}

.group {
  transition: all 0.3s ease;
}

.group:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* Icon Styling */
i {
  font-size: 1.5rem;
}
</style>
