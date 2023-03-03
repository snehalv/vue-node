<template>
    <div class="shadow-sm bg-dark">
    <nav class="navbar navbar-expand navbar-dark container">
      <div class="container-fluid p-0">
        <router-link class="navbar-brand" to="/" title="Home">
          <img src="../assets/books.png" width="60" alt="Library Logo" />

          Central Library</router-link
        >
        <ul class="navbar-nav ml-auto">
          <router-link
            class="nav-link"
            to="/signup"
            >Sign Up
            </router-link
          >
          <router-link
            class="nav-link"
            to="/login"
            >Login</router-link
          >
          <router-link
            class="nav-link"
            to="/profile"
            >My Profile</router-link
          >
          <router-link
            class="nav-link"
            to="/manageUser"
            >Manage User</router-link
          >
          <router-link
            class="nav-link"
            to="/login"
            >Logout </router-link
          >
          <!-- v-if="!isLoggedIn"
            @click="logout" -->
        </ul>
      </div>
    </nav>
  </div>

</template>