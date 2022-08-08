<template>
    <div class="container">
        <h1>Dashboard : </h1>
        <button class="btn btn-dark" @click="logout">logout</button>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    
    export default{
        setup(){
            const router = useRouter();
            const store = useStore();

            function logout(){
                localStorage.removeItem('token');
                store.dispatch('removeToken');
                router.push('/');
            }

            return {
                logout
            }
        }
    }
</script>