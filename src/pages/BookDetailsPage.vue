<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">
                        {{ books.title }}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ books.category }}</h5>
                        <p class="card-text">{{ books.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../api';

export default {
    data() {
        return {
            books: {}
        };
    },
    async created() {
        const response = await API.getbookById(this.$route.params.id);
        this.book = response;

    }
}
</script>