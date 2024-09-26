<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-50">
    <div class="w-full max-w-md bg-blue-50 shadow-md rounded px-8 pt-6 pb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Sign In</h2>
      <form @submit.prevent="handleSignIn">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" v-model="email" class="w-full px-3 py-2 border border-gray-300 rounded" required />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" v-model="password" class="w-full px-3 py-2 border border-gray-300 rounded" required />
        </div>
        <button type="submit" class="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">Sign In</button>
      </form>
    </div>
  </div>
</template>
  

<script>
// import { loginUser } from '../services/api';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      // Mock user credentials for testing
      mockUser: {
        email: 'user@example.com',
        password: 'yourpassword',
        token: 'mock-jwt-token',
      },
      error: null
    };
  },
  methods: {
    async handleSignIn() {
      if (this.email === this.mockUser.email && this.password === this.mockUser.password) {
        // Store the mock token in localStorage
        localStorage.setItem('token', this.mockUser.token);
        // Redirect to the dashboard
        this.$router.push('/dashboard');
      } else {
        // Display error message for incorrect credentials
        alert('Invalid credentials. Please try again.');
      }
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles */
</style>