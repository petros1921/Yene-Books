<template>
  <div class="homepage">
    <!-- Main Section -->
    <section 
      class="h-screen flex items-center justify-center text-center relative overflow-hidden" 
      :style="backgroundStyle">
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-80"></div>

      <!-- Main Content -->
      <div class="relative z-10 bg-blue-50 bg-opacity-90 p-10 rounded-lg shadow-lg max-w-xl mx-auto transform transition-all duration-500 hover:scale-105">
        <h1 class="text-5xl md:text-6xl font-bold mb-4 text-gray-900 animate-fade-in-up">Welcome to Yene Books</h1>
        <p class="text-lg md:text-xl mb-6 text-gray-700 animate-fade-in">
          Manage your personal library effortlessly. Track your books, mark them as read/unread, 
          and add reviews. Organize your reading journey like never before!
        </p>
        <div class="flex space-x-4 justify-center">
          <router-link
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110"
            to="/signup">
            Get Started
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container mx-auto py-16 text-center">
      <h2 class="text-4xl font-extrabold mb-10 text-gray-900 animate-fade-in-up">Why Choose Yene Books?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Feature 1 -->
        <div class="group p-6 border rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-blue-50 hover:-translate-y-2">
          <div class="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900">Track Your Books</h3>
          <p class="text-gray-600">Easily manage your entire book collection in one place.</p>
        </div>

        <!-- Feature 2 -->
        <div class="group p-6 border rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-blue-50 hover:-translate-y-2">
          <div class="text-green-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6a3 3 0 016 0v6M9 17v-6a3 3 0 116 0v6M5 20h14" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900">Mark as Read/Unread</h3>
          <p class="text-gray-600">Keep track of the books you've read or plan to read.</p>
        </div>

        <!-- Feature 3 -->
        <div class="group p-6 border rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-blue-50 hover:-translate-y-2">
          <div class="text-red-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900">Add Reviews</h3>
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
        backgroundAttachment: 'fixed',  // Parallax effect for more visual depth
        height: '100vh',  
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

/* Add animation for fade-in effect */
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out;
}

.animate-fade-in {
  animation: fade-in-up 1s ease-out;
}

/* Ensure full screen background section */
.bg-cover {
  background-size: cover;
  background-repeat: no-repeat;
}
.bg-center {
  background-position: center;
}

/* Feature hover effects */
.group:hover h3 {
  color: #1e40af; /* Darker blue for text on hover */
}

.group:hover p {
  color: #374151; /* Dark gray for text on hover */
}
</style>
