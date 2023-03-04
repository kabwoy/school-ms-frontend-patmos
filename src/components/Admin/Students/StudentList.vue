<template>
    <SubNav title="Student List" link2="Add Student" link2Href="/dash/students/new" bg-color="#fff9db"/>
    <div class="container">
        <input v-model="searchTerm" @input="searchStud" type="search" class="mb-2" placeholder="Search Student">
        <table class="table table-hover table-bordered .table-striped">
            <thead class="bg-dark text-white">
            <tr>
                <th scope="col">Addmission No</th>
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
                <td>{{student.id}}</td>
                <td>{{student.first_name}}</td>
                <td>{{student.last_name}}</td>
                <td>{{student.dob.split('T')[0]}}</td>
                <td>{{student.class_name.class_name}}</td>
                <td>{{student.parent.first_name + ' ' +student.parent.last_name  }}</td>
                <td>{{student.grade.grade_name}}</td>
                <td><div class="btn-group"><a @click="updatePage(student.id)" class="btn btn-outline-primary" ><i class="bi bi-pen"></i> Edit</a> <a class="btn btn-outline-danger" @click="deleteStudent(student.id)"  ><i class="bi bi-trash2"></i> Delete</a> </div></td>
            </tr>
            </tbody>
        </table>
<!--        {{getStudentList}}-->
    </div>

</template>

<script>
    import SubNav from "../SubNav.vue";
    export default {
        name: "StudentList",
        components:{SubNav},
        data(){
          return {
              searchTerm:'',
              students:[]
          }
        },
        methods:{
          updatePage(id){
              this.$router.push({path:`/dash/students/edit/${id}`})
          },

          async deleteStudent(id){
              const token = JSON.parse(localStorage.getItem('token')).token
              const response = await fetch(`http://localhost:3000/students/${id}` ,
                  {headers:{'Authorization':`Bearer ${token}` , 'Content-Type':'application/json'
                      },  method:'DELETE'})
              const data = await response.json()
              if(!response.ok){
                  return alert(data.message)
              }
              location.reload()
          }
        },
        computed:{

            getStudentList(){
                const students = this.$store.getters.getStudents
                if(this.searchTerm.trim() === '') return this.$store.getters.getStudents
                const results = students.filter((student)=>student.first_name.includes(this.searchTerm.toLowerCase()))
                return results
                // return this.$store.getters.getStudents
            },

        },
        async mounted() {
            await this.$store.dispatch('fetchStudents')
            const allStudents = this.$store.getters.getStudents
            this.students = allStudents
        }
    }
</script>

<style scoped>
    .container{
        margin-top: .9rem;
        width: 100vw;
    }
</style>