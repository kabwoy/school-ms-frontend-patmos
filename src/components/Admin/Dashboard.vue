<template>
    <NavBar/>
    <div class="custom-container">
        <nav class="navigation">
            <ul class="nav-group">
                <li class="nav-item"><a  href="" class="fw-bold"><i class="bi bi-house-add"></i>Dashboard</a></li>
                <li class="nav-item"> <router-link to="/dash/students/new"  ><i class="bi bi-person-bounding-box" ></i>Students</router-link></li>
                <li class="nav-item"> <a  href=""><i class="bi bi-book"></i>Subjects</a></li>
                <li class="nav-item"> <a  href=""><i class="bi bi-mortarboard"></i>Grades </a></li>
                <li class="nav-item"> <router-link to="/dash/parent/new" ><i class="bi bi-person"></i>Parent</router-link></li>
                <li class="nav-item">  <a href="" class="position-relative"> <i class="fa-sharp fa-solid fa-person-chalkboard"></i> <span class="badge badge-primary ">soon</span> Teachers</a></li>
            </ul>
            <hr class="text-white">
            <ul style="margin-top: 0; padding: 0;">
                <li><a href="">Hello</a></li>
            </ul>
        </nav>
        <div class="view">
            <router-view></router-view>
        </div>

    </div>
<!--    {{this.getJwt}}-->
<!--{{$store.state}}-->
</template>

<script>
    import Parent from "./Parent.vue";
    import NavBar from "../NavBar.vue";
    export default {
        name: "DashBoard",
        components: {NavBar, Parent},
        beforeRouteEnter(to , from , next){
            const token = JSON.parse(localStorage.getItem('token'))
            // console.log(res)
            if(!token || token.role !== 'Admin'){
                alert('You Have To login first and be an admin to access')
                return next('/login')

                // this.$router.push({path:"/login"})
                //
                // return next(false)

            }
            next()


        },

        computed:{

            getJwt(){

                return this.$store.getters.getToken
            }

        },
        created() {
            this.$store.dispatch('fetchParents')
        }

    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Montserrat:wght@400;500;600;700&family=Rubik:wght@400;500;700&display=swap');

.custom-container{
    display: flex;
    flex-direction: row;
    /*justify-content: center;*/
    /*position: relative;*/
    /*gap: 18rem;*/
}
    .view{
        max-width: 1500px;
        padding: 42px;
        flex: 1;
        margin-left: 14.5rem;
        /*margin:auto;*/
        /*background-color: #f66262;*/
    }
.flex-itm2{

    background-color: blue;
    height: 40rem;
    margin-top: 5rem;
}
    .navigation{

        background-color:#212529;
        height: 100vh;
        padding: 42px;
        position: fixed;
        /*margin-top: 5rem;*/

    }
    .navigation>ul{
        display: flex;
        font-family: 'Lato', sans-serif;
        padding: 10px;
        flex-direction: column;
        margin-top: 2rem;
        gap: 1rem;
        list-style: none;
        align-items: center;


    }
    .navigation>ul>li{

        display: flex;
        justify-content: center;
        padding: 8px;

    }
    .nav-group{
        margin-top: .9rem;
    }
    .nav-group i{
        color: #f8f9fa;
        margin-right: .13rem;
        font-size: 1.3rem;
    }
    .nav-group>li a:hover{
        color: #51cf66;
        border-left: 4px solid  #51cf66;

    }

    .navigation>ul>li>a{
        color: #ffffff;
        font-size: 18px;
        text-decoration: none;


    }
    i{
        color:#212529;
        font-size: 15px;
    }
    .collapse{
        text-decoration: none;
        color: #f1f3f5;
    }
    .badge{
        position: absolute;
        background-color: red;
        padding: 3px;
        font-size: 14px;
        left: 6.5rem;
        bottom: 1rem;
    }

</style>