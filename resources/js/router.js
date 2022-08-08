import { createWebHistory, createRouter } from "vue-router";
import home from './pages/home.vue'
import login from './pages/login.vue'
import register from './pages/register.vue'
import Dashboard from './pages/Dashboard.vue'
import store from './layouts/store/index.js'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/login',
        name: 'Login',
        component: login,
        meta : {
            requiresAuth : false
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: register,
        meta : {
            requiresAuth : false
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta : {
            requiresAuth : true
        }
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach( (to, from) => {
    if(to.meta.requiresAuth && store.getters.getToken == 0){
        return { name : 'Login' }
    }else if(to.meta.requiresAuth == false && store.getters.getToken != 0){
        return { name : 'Dashboard' }
    }
});

export default router;