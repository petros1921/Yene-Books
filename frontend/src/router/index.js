import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue'; // Correct path to HomePage.vue
import SignIn from '../pages/SignIn.vue';
import SignUp from '../pages/SignUp.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: SignIn },
  { path: '/signup', component: SignUp },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;