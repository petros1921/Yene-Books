import { createApp } from 'vue'; // Import createApp
import App from './App.vue';
import router from './router'; // Import router configuration
import './assets/styles/tailwind.css' // Import Tailwind CSS
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);
app.use(router); // Use router with the app
app.mount('#app');
