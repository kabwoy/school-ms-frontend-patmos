<template>
    <div class="parent-nav">
        <nav class="parent-nav-flex-container">
            <h3>Subject List</h3>
            <div class="nav-links">
                <a href=""><i class="bi bi-house-check"></i>Home</a>
                <router-link to="/dash/subjects/new"><i class="bi bi-person-fill-add"></i>Add Subject</router-link>
            </div>
        </nav>
    </div>
    <div class="container">
        <table class="table table-hover table-bordered .table-striped">
            <thead class="bg-dark text-white">
            <tr>
                <th >Subject Name</th>
                <th>Grade</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr class="table-primary" v-for="subject of getSubjects">
                <td>{{subject.subject_name}}</td>
                <td>{{subject.grade.grade_name}}</td>
                <td class="btn-options"><div class="btn-group"><a class="btn btn-outline-primary" @click="pushUpdateComponent(subject.id)"><i class="bi bi-pen"></i> Edit</a> <a class="btn btn-outline-danger"  @click="deleteSubject(subject.id)"><i class="bi bi-trash2"></i> Delete</a> </div></td>
            </tr>
            </tbody>
        </table>
    </div>
<!--    {{getSubjects}}-->
</template>

<script>
    export default {
        name: "SubjectList",
        methods:{
          pushUpdateComponent(id){
              this.$router.push({path:`/dash/subjects/edit/${id}`})
          },
            async deleteSubject(id){
                const token = JSON.parse(localStorage.getItem('token')).token
                const response = await fetch(`http://localhost:3000/subjects/${id}` , {headers:{'Authorization':`Bearer ${token} `, 'Content-Type': 'application/json'},
                    method:'DELETE'})
                const data = await response.json()
                if(!response.ok) return alert(data.message)
                location.reload()
            }
        },
        computed:{
            getSubjects(){
                return this.$store.getters.getSubjects
            }
        },
        created() {
            this.$store.dispatch('fetchSubjects')
        }
    }
</script>

<style scoped>
    .container{
        margin-top: .9rem;
    }
    .parent-nav{
        margin-top: 4rem;
        background-color: #e9ecef;
        padding: 32px;
    }
    .parent-nav-flex-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .parent-nav-flex-container>.nav-links>a{
        margin: 8px;
        text-decoration: none;
        color: #495057;
    }
    .parent-nav-flex-container>.nav-links>a:hover{
        color: #212529;
    }
</style>