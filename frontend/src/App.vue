<template>
  <div id="app" class="min-h-screen flex flex-col bg-gray-50">
    <!-- Header -->
    <header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-4xl font-extrabold tracking-tight">Yene Books</h1>
        <nav>
          <ul class="flex space-x-6 text-lg font-medium">
            <!-- Show these links only when the user is not signed in -->
            <li v-if="!isAuthenticated">
              <router-link to="/" class="hover:underline transition">Home</router-link>
            </li>
            <li v-if="!isAuthenticated">
              <router-link to="/login" class="hover:underline transition">Sign In</router-link>
            </li>
            <li v-if="!isAuthenticated">
              <router-link to="/signup" class="hover:underline transition">Sign Up</router-link>
            </li>

            <!-- Show these links only when the user is signed in -->
            <li v-if="isAuthenticated">
              <router-link to="/dashboard" class="hover:underline transition">Dashboard</router-link>
            </li>
            <li v-if="isAuthenticated">
              <router-link to="/my-books" class="hover:underline transition">My Books</router-link>
            </li>
            <li v-if="isAuthenticated">
              <router-link to="/reviews" class="hover:underline transition">Reviews</router-link>
            </li>
            <li v-if="isAuthenticated">
              <button
                @click="signOut"
                class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md font-semibold transition transform hover:scale-105"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 container mx-auto p-8">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-blue-800 text-white py-6 text-center shadow-lg">
      <p class="text-lg">&copy; 2024 Yene Books. All rights reserved.</p>
      <p class="text-sm">Your favorite book management platform.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isAuthenticated: false, // State to manage authentication
    };
  },
  mounted() {
    document.title = 'Yene Books';
    this.checkAuthentication(); // Check authentication status on mount
  },
  methods: {
    checkAuthentication() {
      // Check if the mock token exists in localStorage
      this.isAuthenticated = !!localStorage.getItem('token');
    },
    signOut() {
      // Clear the mock token from localStorage and update state
      localStorage.removeItem('token');
      this.isAuthenticated = false;
      this.$router.push('/'); // Redirect to the homepage
    },
  },
  watch: {
    // Watch for changes in the mock token to update the authentication state
    $route() {
      this.checkAuthentication();
    },
  },
};
</script>

<style scoped>
/* Styling the entire application for modern and appealing look */
#app {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}

/* Header Styling */
header {
  background-color: #1e40af; /* Fallback for gradient */
}

/* Nav Links */
nav ul li a {
  transition: color 0.3s ease-in-out;
}

/* Hover Effects */
nav ul li a:hover {
  color: #f9fafb;
}

/* Footer Styling */
footer {
  background-color: #1e3a8a; /* Deep blue footer background */
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
}
</style>

