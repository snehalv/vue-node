<template>
    <div class="card border-dark mt-3 log-card">
        <div class="card-header text-center">Sign Up</div>
        <div class="card-body text-dark">
            <form @submit.prevent="signup">
                <div class="mb-3">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" v-model="email">
                </div>
                <div class="mb-3">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password">
                </div>
                <div class="mb-3">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword">
                </div>
                <div class="mb-3 justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="submit">Sign Up</button>
                </div>
                <div class="text-danger">
                    {{ failMessage }}
                </div>
            </form>


        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      failMessage: ''
    }
  },
  methods: {
    async signup() {
      try {
        const response = await axios.post('/signup', {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
        this.$router.push('/login');
        console.log(response.data)

      } catch (error) {

        console.log(error.response.data.error);
        this.failMessage = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.log-card {
    max-width: 35%;
    margin-left: 35%;
}
</style>