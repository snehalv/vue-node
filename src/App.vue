<template>
  <div class="shadow-sm bg-dark">
    <nav class="navbar navbar-expand navbar-dark container">
      <div class="container-fluid p-0">
        <router-link class="navbar-brand" to="/" title="Home">
          <img src="./assets/books.png" width="60" alt="Library Logo" />

          Central Library</router-link
        >
        <ul class="navbar-nav ml-auto">
          <router-link
            class="nav-link"
            to="/signup"
            v-if="!$store.state.isLoggedIn"
            >Sign Up
            </router-link
          >
          <router-link
            class="nav-link"
            to="/login"
            v-if="!$store.state.isLoggedIn"
            >Login</router-link
          >
          <router-link
            class="nav-link"
            to="/dashboard"
            v-if="$store.state.isLoggedIn"
            >Dashboard</router-link
          >
          <router-link
            class="nav-link"
            to="/profile"
            v-if="$store.state.isLoggedIn"
            >My Profile</router-link
          >
          <router-link
            class="nav-link"
            to="/"
            v-if="$store.state.isLoggedIn"
            @click="logout"
            >Logout </router-link
          >
        </ul>
      </div>
    </nav>
  </div>

<!-- <NavBar /> -->
  <div class="container">
    <router-view />
  </div>
</template>

<script>
// import NavBar from "./components/NavBar"; 
export default {
  // components: {
  //   NavBar,
  // },
  data() {
    return {
      isLoggedIn: ''
    }
  },
  methods: {
    logout() {
        this.$store.commit('reset');
        this.$router.push('/login');
  }
  ,
  computed: {
    isLoggedIn() {
      return localStorage.getItem("isLoggedIn")
    }
    
  }
  }
}
</script>

<style>
ul {
  pointer: cursor;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
