<template>
    <div class="row book-item">

        <ul class="list-group list-group-flush col-sm-6" style="width: 50%;">
            <li class="point">
                {{ volumeInfo.title }}
            </li>

            <p class="author">
                <span v-if="!volumeInfo.authors">No authors to display</span>
                <span v-else>
                    By
                    <span v-for="(author, index) in volumeInfo.authors" :key="index">
                        <em>
                            {{
    index + 1 !== volumeInfo.authors.length && index + 1 !== book.volumeInfo.authors.length - 1 ?
    author + ',' : index + 1 == book.volumeInfo.authors.length && index + 1 !== 1 ? ' and ' +
        author : author
                            }}
                        </em>
                    </span>
                </span>
            </p>

        </ul>

        <div class="col-sm-6">
            <button class="btn btn-outline-info more-details" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">More Details</button>
        </div>



        <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">  {{ volumeInfo.title }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p> {{ volumeInfo.publishedDate }}</p>
                        <p>{{ volumeInfo.description }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="issueBook">Issue a Book</button>
                    </div>
                </div>
            </div>
        </div>




    </div>
</template>

<script>
export default {
    props: {
        book: {
            type: Object,
            required: true
        }
    },
    computed: {
        volumeInfo() {
            return this.book.volumeInfo
        }
    },
    methods: {
        issueBook() {
            alert("Book issued to you.")
        }
    }
}
</script>
<style scoped>
.point {
    cursor: pointer;
    display: block;
    background-color: aliceblue;
    margin-left: 30%;
}

.more-details {
    border-radius: 25px;
    margin-left: 25%;
}

.author {
    margin-left: 30%;
}
</style>