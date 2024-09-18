<template>
  <div id="app" class="min-h-screen flex flex-col bg-gray-100">
    <header class="bg-blue-600 text-white p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold">Yene Books</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><router-link to="/" class="hover:underline">Home</router-link></li>
            <li><router-link to="/login" class="hover:underline">Sign In</router-link></li>
            <li><router-link to="/signup" class="hover:underline">Sign Up</router-link></li>
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
  mounted() {
    document.title = 'Yene Books'; // Change the title here
  }
};
</script>

<style scoped>
/* Additional scoped styles can be added here */
</style>
