<template>
    <div>
        <div class="container ">
            <div class="row justify-content-center">
                <div class="col-sm-6">
                    <h1 class="text-center my-4">Testing Data Register</h1>
                    <p class="text-danger" v-for="error in errors" :key="error">
                        <span v-for="err in error" :key="err">{{ err }}</span>
                    </p>
                    <form @submit.prevent="register">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Your Name" v-model="form.name">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="form.email">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="******" v-model="form.password" >
                    </div>
                    <div class="mb-3">
                        <label for="confirm_password" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="confirm_password" placeholder="******" v-model="form.confirm_password" >
                    </div>
                    <button class="btn btn-primary fs-5 fw-bold">Register</button>
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
            let form = reactive({
                name : '',
                email : '',
                password : '',
                confirm_password : ''
            });

            const router = useRouter();
            const store = useStore();

            let errors = ref([]);

            const register = async() =>{
                await axios.post('/api/register',form).then(res=>{
                    if(res.data.success){
                        store.dispatch('setToken',res.data.data.token);
                        router.push('Dashboard');
                    }
                }).catch( e => {
                    errors.value = e.response.data.message;
                    console.log(errors)
                });
            }

            return{
                form,
                register,
                errors
            }
        }
    }
</script>