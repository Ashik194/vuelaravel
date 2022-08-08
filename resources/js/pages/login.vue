<template>
    <div>
        <div class="container ">
            <div class="row justify-content-center">
                <div class="col-sm-6">
                    <h1 class="text-center my-4">Testing Data</h1>
                    <p class="text-danger" v-if="error">{{ error }}</p>
                    <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="form.email">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="******" v-model="form.password" >
                    </div>
                    <button class="btn btn-primary fs-5 fw-bold">Login</button>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

    export default{
        setup(){
            const router = useRouter();
            const store = useStore();

            let form = reactive({
                email : '',
                password : ''
            });

            let error = ref('');

            const login = async() =>{
                await axios.post('/api/login',form).then(res=>{
                    if(res.data.success){
                        store.dispatch('setToken',res.data.data.token);
                        router.push('Dashboard');
                    }else{
                        error.value = res.data.message;
                    }
                });
            }

            return{
                form,
                login,
                error
            }
        }
    }
</script>