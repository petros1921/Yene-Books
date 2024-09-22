<template>
  <div id="app" class="min-h-screen flex flex-col bg-gray-100">
    <header class="bg-blue-600 text-white p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold">Yene Books</h1>
        <nav>
          <ul class="flex space-x-4">
            <!-- Show these links only when the user is not signed in -->
            <li v-if="!isAuthenticated">
              <router-link to="/" class="hover:underline">Home</router-link>
            </li>
            <li v-if="!isAuthenticated">
              <router-link to="/login" class="hover:underline">Sign In</router-link>
            </li>
            <li v-if="!isAuthenticated">
              <router-link to="/signup" class="hover:underline">Sign Up</router-link>
            </li>

            <!-- Show these links only when the user is signed in -->
            <li v-if="isAuthenticated">
              <router-link to="/dashboard" class="hover:underline">Dashboard</router-link>
            </li>
            <li v-if="isAuthenticated">
              <router-link to="/my-books" class="hover:underline">My Books</router-link>
            </li>
            <li v-if="isAuthenticated">
              <router-link to="/reviews" class="hover:underline">Reviews</router-link>
            </li>
            <li v-if="isAuthenticated">
              <button @click="signOut" class="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="flex-1 container mx-auto p-4">
      <router-view></router-view> <!-- This is where the routed components will be displayed -->
    </main>

    <footer class="bg-blue-800 text-white p-4 text-center">
      <p>&copy; 2024 Yene Books. All rights reserved.</p>
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
/* Additional scoped styles can be added here */
</style>
