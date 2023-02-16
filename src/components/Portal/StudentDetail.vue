<template>
    <OffCanvas/>
    <div class="container text-center">
        <h2>Full Name:{{student.first_name}} {{student.last_name}} </h2>
        <h3>Class Name : {{student.class_name}}</h3>
        <h4 class="h3">Grade: {{grade.grade_name}}</h4>
    </div>
    <div class="container">
        <h2>Subjects</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
    import OffCanvas from "./OffCanvas.vue";
    export default {
        name: "StudentDetail",
        components: {OffCanvas},

        data(){

            return{

                student:{},
                grade:{}
            }

        },

        async mounted() {
            const id = this.$route.params.id
            const token = JSON.parse(localStorage.getItem('user')).token
            const response = await fetch(`http://localhost:3000/profile/student/${id}` , {headers:{'Content-Type':'application/json','Authorization':`Bearer ${token}`}})
            const data = await response.json()

            this.student = data
            this.grade = data.grade
            console.log(this.grade)

        }
    }
</script>

<style scoped>
.container{
    margin-top: 2rem;
    padding: 42px;
    max-width: 55rem;
    background-color: #e9ecef;
}
    h2{
        font-size: 24px;
    }
    h3{
        font-size: 22px;
    }
</style>