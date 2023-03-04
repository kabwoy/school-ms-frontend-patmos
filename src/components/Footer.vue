<template>
    <div class="footer-container p-5 bg-dark mt-3 vw-100 d-flex align-items-center">
        <footer class="text-white " style="margin: 28px auto;">
            <span class="mx-2 "><i class="fa-brands fa-facebook"></i>  Follow Us On : <a href="">Facebook</a> </span>
            <span class="mx-2"><i class="fa-brands fa-twitter"></i>  Follow Us On : <a href="">Twitter</a> </span>
            <span class="mx-2"><i class="fa-brands fa-instagram"></i> Follow Us On : <a href="">Instagram</a> </span>
            <span class="mx-2"><i class="fa-regular fa-envelope"></i> Email: <a href="mailto:pm@gmail.com"> pm@gmail.com</a>  </span>
            <span class="mx-2"><i class="bi bi-telephone"></i>Call Us On 075345343</span>

        </footer>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

    .footer-container{
        position: relative;
    }
    .footer-container > footer > span > i{

        color: green;
        font-size: 1.7em;
    }
    footer{

        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
    }

    @media (max-width: 480px) {
        .footer-container{
            padding: 42px;
            height: 14em;
            margin-top: 2em;

        }
        .footer-container > footer > span {
            display: block;
        }
    }
</style>