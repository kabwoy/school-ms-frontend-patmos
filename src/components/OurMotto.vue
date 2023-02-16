<template>
    <div class="motto-container">
        <h1 class="text-center">Our Motto  <hr> </h1>

        <blockquote class="text-center text-dark fs-3 fw-bold">"Island of Knowledge"</blockquote>
    </div>
</template>

<script>
    export default {
        name: "OurMotto"
    }
</script>

<style scoped>
.motto-container{
    margin-top: 1.5em;
}

    hr{
        width: 50%;
        margin: auto;
    }
    blockquote{
        font-size: 1.5em;
    }
    @media (max-width: 480px) {

        h1{
            font-size: 28px;
        }
        blockquote{
            font-size: 20px;
        }
        
    }
</style>