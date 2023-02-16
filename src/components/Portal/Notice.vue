<template>
    <div class="container mt-4">
        <div class="notice-board " style="margin: auto;">
            <div class="alert alert-info p-3" role="alert">
                <h3 class="notice-title text-center"><i class="bi bi-info-circle"></i>{{title}}</h3>
                <p class="notice-content">{{content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Notice",
        props:['title' , 'content']
    }
</script>

<style scoped>
    .notice-content{
        font-size: 18px;
    }
    .notice-board{
        text-align: start;
        /*width: 22rem;*/
    }
    .alert{
        text-align: start;
    }
    .notice-content{
        font-size: 24px;
        color: #555;
    }
    .notice-title{
        font-weight: bolder;
    }
    .notice-title>i{
        font-size: 22px;
    }
    @media(max-width: 480px) {
        .notice-content{
            font-size: 18px;
        }
        .notice-board{
            text-align: start;
            width: 22rem;
        }
        .alert{
            text-align: start;
        }
        h2{
            font-size: 18px;
        }
    }

</style>