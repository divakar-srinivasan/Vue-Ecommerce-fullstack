// main.js
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import store from './redux/store'; // Import Vuex store
import router from './router/router';
AOS.init();
loadFonts();

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(store); // Use Vuex store
app.mount('#app');
