<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-50">
    <div class="w-full max-w-md bg-blue-50 shadow-md rounded px-8 pt-6 pb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
      <form @submit.prevent="handleSignUp">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input type="text" v-model="username" class="w-full px-3 py-2 border border-gray-300 rounded" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" v-model="email" class="w-full px-3 py-2 border border-gray-300 rounded" required />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" v-model="password" class="w-full px-3 py-2 border border-gray-300 rounded" required />
        </div>
        <button type="submit" class="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">Sign Up</button>
      </form>
      <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
      <p v-if="successMessage" class="text-green-500 mt-4">{{ successMessage }}</p>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'; 
export default {
  name: "SignUp",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    async handleSignUp() {
      try {
        // Make POST request to the backend API
        await axios.post('http://localhost:5000/auth/signup', {
          username: this.username,
          email: this.email,
          password: this.password
        });

        // Handle success
        this.successMessage = "Sign up successful!";
        this.errorMessage = '';

        // Optionally, you can redirect the the user to the login page after success
        // this.$router.push('/signin');
      } catch (error) {
        // Handle error
        this.errorMessage = error.response.data.message || 'Sign up failed';
        this.successMessage = '';
      }
    }
  }
};
</script>
  