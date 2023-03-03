<template>
    <div class="alert alert-primary mt-3" role="alert">
        Hi Username
        <!-- <div class="userInfo">
        Till now you have read these books:
    </div> -->
        <button class="btn btn-danger" style="margin-left: 75%;">Delete User</button>
    </div>

    <ul class="row">
        <li class="col-sm-6">Think and Grow Rich
        </li>
        <li class="col-sm-6 mb-2" style="list-style-type: none;  ">
            <button type="button" class="btn btn-outline-primary bookStatus me-3">Currently Reading</button>
            <button type="button" class="btn btn-secondary bookStatus">Returned</button>
        </li>

        <li class="col-sm-6">Boardroom
        </li>
        <li class="col-sm-6 mb-2" style="list-style-type: none;  ">
            <button type="button" class="btn btn-outline-primary bookStatus me-3">Currently Reading</button>
            <button type="button" class="btn btn-secondary bookStatus">Returned</button>
        </li>

    </ul>
</template>

<style scoped>
.bookStatus {
    border-radius: 25px;
    font-size: 12px;
    margin-left: 10%;
}

.userInfo {
    font-size: 12px;
    font-style: italic;
    font-family: cursive;
}
</style>