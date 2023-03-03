<template>
    <div class="card mt-3 log-card" style=" max-width: 40%;margin-left: 30%;">
        <div class="card-header">
            Update Book
        </div>
        <div class="card-body">
            <form @submit.prevent="updateForm">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" v-model="book.title" class="form-control" id="title" required @blur="validateValues">
                </div>

                <div class="form-group mt-2">
                    <label for="category">Select Category</label>
                    <select class="form-control" v-model="book.category" id="category" required>
                        <option>Fiction</option>
                        <option>Non Fiction</option>
                    </select>
                </div>

                <div class="form-group mt-2">
                    <label for="content">Description</label>
                    <textarea type="text" v-model="book.content" class="form-control" id="content" rows="3"  required> </textarea>
                    <span v-if="help" class="invalid-feedback">{{ help }}</span>
                </div>

                <div class="form-group mt-2">
                    <div class="input-group mb-3">
                        <div class="custom-file">
                            <input type="file" @change="selectFile" class="custom-file-input" id="inputGroupFile01" required>
                        </div>
                    </div>
                    <img :src="`${book.image}`" width="120" :alt="book.title">
                </div>

                <button class="btn btn-primary me-3" type="submit"> Update </button>
                <button class="btn btn-secondary" @click="cancel"> Cancel </button>
            </form>
        </div>

    </div>

</template>

<script>
import API from "../api";
export default {
    data() {
        return {
            book: {
                title: '',
                category: '',
                content: '',
                image: '',
            },
            image: ""
        }
    },
    async created(){
        const response = await API.getbookById(this.$route.params.id);
        this.book = response;
    },
    methods: {
        submit(){
            console.log("Form Data:  " + this.title.value)
        },
        selectFile(file) {
            this.image = file[0];
        },
        async updateForm(){
            console.log("Book added to database.");
            const formData = new FormData();
            formData.append('image', this.image);
            formData.append('title', this.book.title);
            formData.append('category', this.book.category);
            formData.append('content', this.book.content);

            if(this.book.title !== ''){
                const response = await API.addbook(formData);
                this.$router.push({ name: "dashboard", params: {message: response.message}})
            }
        },
        cancel() {
            this.$router.push("/dashboard");
        }
    }
}
</script>