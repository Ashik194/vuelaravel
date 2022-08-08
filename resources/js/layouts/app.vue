<template>
    <div>
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link> -->


        <!-- <router-link :to="{name:'Home'}">Home</router-link> |
        <router-link :to="{name: 'Login'}">Login</router-link> |
        <router-link :to="{name: 'Register'}">Register</router-link> -->
        

        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><router-link class="text-white" :to="{name:'Home'}">Home </router-link></a>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="text-white" :to="{name: 'Login'}" v-if="$store.getters.getToken == 0">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white mx-2" :to="{name: 'Register'}" v-if="$store.getters.getToken == 0">Register</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white mx-2" :to="{name: 'Dashboard'}" v-if="$store.getters.getToken != 0">Dashboard</router-link>
                </li>
                
            </ul>
            
            </div>
        </div>
        </nav>


        <router-view></router-view>
    </div>
</template>