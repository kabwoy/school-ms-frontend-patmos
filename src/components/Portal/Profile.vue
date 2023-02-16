<template>
    <div class="container">
        <h2>Welcome Dear <span v-for="profile of profileDetails">{{profile.first_name}} {{profile.last_name}}</span></h2>
        <NavBar/>
    </div>

    <Notice title="Latest Notice" content="
    lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Delectus fugit porro quidem ullam. A architecto, consequatu Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Delectus fugit porro quidem ullam. A architecto,
     consequatur cum doloribus eum iste minima officia perferendis quae quaerat, quos similique sunt velit voluptatum"/>
    <h2 class="text-center fw-bolder">Your Students</h2>
    <hr class="h-3">
    <div class="container mt-2">

    <table class="table table-bordered">
        <thead class="bg-dark text-white">
        <tr>

            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Class Name</th>
<!--            <th scope="col">Grade</th>-->
            <th scope="col">Actions</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="student of students">
            <th scope="row">{{student.first_name}}</th>
            <td>{{student.last_name}}</td>
            <td>{{student.class_name}}</td>
            <td><div class="button-group"><a @click="studentInfo(student.id)" class="btn btn-outline-primary"><i class="bi bi-eye"></i> View</a></div></td>
        </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
    import Notice from "./Notice.vue";
    import NavBar from "../NavBar.vue";
    export default {
        name: "Profile",
        components: {NavBar, Notice},
        data(){
          return{
              profileDetails:[],
              students:[]
          }
        },

        methods:{
            studentInfo(id){
                this.$router.push({path:`/student/details/${id}`})
            }
        },
        beforeRouteEnter(to, from , next){

            const user = localStorage.getItem('user')
            // const token = JSON.parse(localStorage.getItem('user')).token
            // if(!token) return next('/portal/login')
            if(!user) return next('/portal/login')


            next()

        },
        async mounted() {
            if(!localStorage.getItem('user')) return alert('You have to login first')
            const id = JSON.parse(localStorage.getItem('user')).id
            const token = JSON.parse(localStorage.getItem('user')).token
            const response = await fetch(`http://localhost:3000/profile/${id}` , {headers:
                    {'Content-Type':'application/json' , 'Authorization': `Bearer ${token}`}})
            const data = await response.json()
            if(!response.ok) return alert(data.message)
            this.profileDetails.push(data)
            this.students = data.student
            console.log(this.profileDetails)

        }
    }
</script>

<style scoped>
.mycontainer{
    display: flex;
    align-items: center;
    gap: 15rem;
    background-color: #20c997;
}
.accordion{
    max-width: 980px;
}
.notice-board{

}
hr{
    width: 2rem;
    text-align: center;
    color: #555;
}
i{
    margin-right: 2px;
    font-size: 18px;
}
.btn > i{
    margin-right: 2px;
    font-size: 16px;
}

h1{
    font-size: 20px;
}
@media(max-width: 480px){
    .offcanvas {
        max-width: 12rem;
    }
    .mycontainer{
        display: flex;
        align-items: center;
        gap: 8rem;
    }
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
    svg{
        cursor: pointer;
        fill: #555;
        float: right!important;

    }
    svg:hover{
        fill: #212529;
    }
    .notice-content{
        color: #555;
    }
    .notice-title{
        font-weight: bolder;
    }
.notice-title>i{
   font-size: 22px;
}
    .container{
        margin-top: 5rem;
    }
</style>