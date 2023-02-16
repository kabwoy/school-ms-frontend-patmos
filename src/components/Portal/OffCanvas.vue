<template>
    <div class="mycontainer">
        <svg data-bs-toggle="offcanvas"  class="mx-3" data-bs-target="#staticBackdrop"  xmlns="http://www.w3.org/2000/svg" height="54px" viewBox="0 0 24 24" width="54px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>

        <div class="offcanvas offcanvas-start bg-dark text-white" data-bs-scroll="true" data-bs-backdrop="static" id="staticBackdrop" tabindex="-1">
            <div class="offcanvas-header text-center">
                <h5 class="offcanvas-title " id="staticBackdropLabel">Welcome Name</h5>
                <button type="button btn-close" class="btn-close bg-white"  data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav me-auto ">
                    <li class="nav-item  active"><a href="" class="nav-link"><i class="bi bi-house"></i>Home</a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="bi bi-file-text"></i>Examinations</a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="bi bi-cash"></i>Fee</a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="bi bi-card-text"></i>Report</a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="bi bi-mortarboard-fill"></i>Academics</a></li>
                </ul>
            </div>
        </div>

        <ul class="d-flex text-white mx-4 align-items-center">
            <li class="navbar-nav nav-item"><router-link class="nav-link" to="/profile">Go Home</router-link></li>
<!--            <li class="navbar-nav nav-item"><router-link class="nav-link" href="/profile">Logout</router-link></li>-->

        </ul>
    </div>
</template>

<script>
    export default {
        name: "OffCanvas"
    }
</script>

<style scoped>
    .mycontainer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        /*gap: 15rem;*/
        background-color: #495057;
    }
    svg{
        cursor: pointer;
        fill: #fff;
        float: right!important;

    }
    svg:hover{
        fill: #212529;
    }
    .offcanvas {
        max-width: 16rem;
    }
    .navbar-nav{
        padding-left: 20px;
    }
</style>