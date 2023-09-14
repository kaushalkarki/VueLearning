import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import App from './App.vue'
import HelloKaushal from "./components/HelloKaushal.vue"
import CompC from './components/CompC.vue'
import Index from "./components/Index.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: App },
        { path: '/about', component: CompC },
        { path: '/kaushal', component: HelloKaushal },

    ]
});

const store = createStore({
    state() {
        return {
            counter: 1
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
            console.log(state.counter)
        }
    },
    getters:{
        finalCount(state){
            return state.counter *1;
        }
    }
});

const app = createApp(Index)
app.use(router);
app.use(store);
app.mount('#app')
