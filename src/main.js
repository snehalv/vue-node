import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from "./routes/router"
import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            isLoggedIn: false,
            isAdmin: false
        }
    },
    mutations: {
        loginSuccess(state) {
          state.isLoggedIn = true;
          state.isAdmin = true;
        },
        reset(state) {
            state.isLoggedIn = false;
            state.isAdmin = false;
        }
    }

});

createApp(App)
.use(router)
.use(store)
.mount('#app')
