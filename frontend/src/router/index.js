// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import SignIn from '../pages/SignIn.vue';
import SignUp from '../pages/SignUp.vue';
import UserDashboard from '../pages/UserDashboard.vue'; // Import the Dashboard component
import MyBooks from '../pages/MyBooks.vue';
import BookReviews from '../pages/BookReviews.vue';
const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: SignIn },
  { path: '/signup', component: SignUp },
  { 
    path: '/dashboard', 
    component: UserDashboard, 
    meta:{ requiresAuth: true },
  }, // Add the Dashboard route
  { path: '/my-books', component: MyBooks },
  { path: '/reviews', component: BookReviews }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token'); // Check for the mock token
    if (token) {
      next(); // Allow access
    } else {
      next('/login'); // Redirect to sign-in page if not authenticated
    }
  } else {
    next();
  }
});

export default router;