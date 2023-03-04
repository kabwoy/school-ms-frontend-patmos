<template>
    <header class="">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-fixed fixed-top"
             style="background-color: #8a8b1e!important; ">
            <div class="container-fluid">
<!--                <a class="navbar-brand" href="#">Patmos</a>-->
                <router-link class="navbar-brand " to="/">Patmos Pri</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold" style="color: #ffffff">
                        <li class="nav-item">
<!--                            <a class="nav-link active" aria-current="page" href="#">Home</a>-->
                            <router-link class="nav-link " to="/">Home</router-link>

                        </li>
                        <li class="nav-item">
                            <!--                            <a class="nav-link active" aria-current="page" href="#">Home</a>-->
                            <router-link class="nav-link " to="/about-us">About Us</router-link>

                        </li>
                        <li class="nav-item  ml-2">
                            <router-link  class="nav-link " to="/contact">Contact Us</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/profile">Portal</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/dash/home">DashBoard</router-link>
                        </li>

                    </ul>

                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item ms-auto ml-2">
                            <router-link v-if="!$store.state.isLoggedIn" class="nav-link " to="/login">Login</router-link>
                            <a v-else style="cursor: pointer; margin-right: .025rem"  class="nav-link mr-2 " @click="logout" ><i class="bi bi-box-arrow-right"></i>Logout</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>


    </header>
</template>

<script>
    export default {
        name: "NavBar",
        methods:{
            logout(){
                localStorage.removeItem('token')
                this.$store.state.isLoggedIn = false
                location.reload()
            }
        }
    }
</script>

<style scoped>


    p{
        font-size: 24px;
        line-height: 1.6;
        color: #fff;
        padding: 24px;
    }

</style>