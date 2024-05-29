import './assets/main.css';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
app.use(router);
app.use(pinia);
app.mount('#app');

// createApp(App).use(router).use(pinia).mount("#app")
