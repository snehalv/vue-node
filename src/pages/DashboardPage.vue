<!-- eslint-disable vue/multi-word-component-names -->
<template>
    
    <h3 class="alert alert-success mt-3">
      Books Available in Library!
    </h3>
    <button class="btn btn-primary" 
      to="/addBook"
      v-if="!$store.state.isAdmin"
      style="margin-bottom: 2rem;"> 
     Add New Book
    </button>
  
    <ul v-for="book in books" :key="book._id">
      <li style="list-style: none;">

        <div class="card">
          <div class="card-body">
            <p>Book Name: {{ book.title }}</p> 
            <p>Book Category: {{ book.category }}</p>
            
          </div>
          <div class="card-footer">
            <p>
              <button class="btn btn-primary me-3">
                Issue book
              </button>
              <button class="btn btn-info me-3" v-if="!$store.state.isAdmin">
              <router-link class="nav-link" :to="{ name: 'editBook', params: { id: book._id }}">              
                Edit
              </router-link> </button>

              <button class="btn btn-danger" @click="removeBook(book._id)"
              v-if="!$store.state.isAdmin">
                Delete
              </button>
            </p>
          </div>
        </div>


        <!-- {{ book.title }} | {{ book.category }} |  -->
        <!-- <button @click="alertData" :to="{ name: '/dashboard/edit-book', params: { id: book._id }}">Edit</button> -->
        <!-- <router-link class="nav-link" :to="{ name: 'editBook', params: { id: book._id }}">Edit</router-link> | 
        <span style="color: #dc3545; font-size: medium;" @click="removeBook(book._id)">Delete</span> -->
      </li>
    </ul>
  
</template>

<script>
import API from '../api';
export default {
  data() {
    return {
        books: [],
        keyword: '',
        loadState: '',
        maxResults: '10',
    }
  },
  async created() {
      this.books = await API.getAllbook();
  },
  methods: {
    async removeBook(id) {
      const response = await API.deletebook(id);
      this.$router.push({name: 'dashboard', params: {message: response.message}})
    }
  }
  
}
</script>


<style scoped>
.searchBook {
  border: 1px solid greenyellow;
  width: 75%; 
  margin-left: 13%;
}
</style>