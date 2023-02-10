import { createApp } from 'vue'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/modal'
import App from './App.vue'
import Footer from "./components/Footer.vue";
import router from "./routes/router.js";
import store from "./store";

const app = createApp(App)
    app.use(router)
    app.use(store)
    app.component('Footer' , Footer)
    app.mount('#app')
