<template>
    <SubNav title="Student List" link2="Add Student" link2Href="/dash/students/new" bg-color="#fff9db"/>
    <div class="container">
        <table class="table table-hover table-bordered .table-striped">
            <thead class="bg-dark text-white">
            <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">DOB</th>
                <th scope="col">Class Name</th>
                <th scope="col">Parent</th>
                <th scope="col">Grade</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="student of getStudentList" class="table-primary" >
                <td>{{student.first_name}}</td>
                <td>{{student.last_name}}</td>
                <td>{{student.dob}}</td>
                <td>{{student.class_name}}</td>
                <td>{{student.parent.first_name + ' ' +student.parent.last_name  }}</td>
                <td>{{student.grade.grade_name}}</td>
                <td><div class="btn-group"><a class="btn btn-outline-primary" ><i class="bi bi-pen"></i> Edit</a> <a class="btn btn-outline-danger"  ><i class="bi bi-trash2"></i> Delete</a> </div></td>
            </tr>
            </tbody>
        </table>
<!--        {{getStudentList}}-->
    </div>

</template>

<script>
    import SubNav from "./SubNav.vue";
    export default {
        name: "StudentList",
        components:{SubNav},
        computed:{

            getStudentList(){
                return this.$store.getters.getStudents
            }

        },
        mounted() {
            this.$store.dispatch('fetchStudents')
        }
    }
</script>

<style scoped>
    .container{
        margin-top: .9rem;
        width: 100vw;
    }
</style>