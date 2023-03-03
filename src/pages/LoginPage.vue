<template>
    <div class="card border-dark mt-3 log-card">
        <div class="card-header text-center">Login</div>
        <form @submit.prevent="login">
        <div class="card-body text-dark">
            <div class="mb-3">
                <label for="email">Email</label>
                <input type="email" 
                        class="form-control" 
                        id="email"
                        v-model="email"
                        required
                >
            </div>
            <div class="mb-3">
                <label for="password">Password</label>
                <input type="password" 
                        class="form-control" 
                        id="password"
                        v-model="password"
                        required
                >
            </div>
            <div class="mb-3 justify-content-md-end">
                <button type="submit" class="btn btn-primary me-md-2"> Login </button>
            </div>

            <div class="text-danger">
                    {{ failMessage }}
                </div>

        </div>
    </form>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: '',
            isLoggedIn: '',
            failMessage: '',
        }
    },
    methods: {
        async login() {
        let  user = {
          email: this.email,
          password: this.password,
        };
      try {
        const response = await axios.post('/login', user)
        this.isLoggedIn = true;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isLoggedIn", true);

        this.$router.push('/dashboard');
        this.$store.commit('loginSuccess');
        console.log(user.email);

      } catch (error) {
        
        console.log(error.response.data.error);
        this.failMessage = error.response.data.error
      }
    }

    // login() {
    //   console.log("login");
    // localStorage.setItem("token", "response.data.token");
    //     localStorage.setItem("isLoggedIn", true);
    // }
    }


        
    
}
</script>
<style scoped>
.log-card{
    max-width: 35%;
    margin-left: 35%;
}
</style>
