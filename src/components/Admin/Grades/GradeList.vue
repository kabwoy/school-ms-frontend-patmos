<template>
    <SubNav title="Grades List" link2="Add Grade" link2Href="/dash/grades/new" bg-color="#e3fafp"/>
    <div class="container">
        <table class="table table-hover table-bordered .table-striped">
            <thead class="bg-dark text-white">
            <tr>
                <th >Grade Name</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr class="table-primary" v-for="grade of getGrades">
                <td>{{grade.grade_name}}</td>
                <td class="btn-options"><div class="btn-group"><a class="btn btn-outline-primary" @click="updateGrades(grade.id)"><i class="bi bi-pen"></i> Edit</a> <a class="btn btn-outline-danger"  @click="deleteGrades(grade.id)"><i class="bi bi-trash2"></i> Delete</a> </div></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import SubNav from "../SubNav.vue";
    export default {
        name: "GradeList",
        components:{
          SubNav
        },
        methods:{
          updateGrades(id){

              this.$router.push({path:`/dash/grades/${id}`})

          },
            async deleteGrades(id){
                const token = JSON.parse(localStorage.getItem('token')).token
                const response = await fetch(`http://localhost:3000/grades/${id}` ,
                    {headers:{'Authorization':`Bearer ${token}` , 'Content-Type':'application/json'
                        },  method:'DELETE'})
                const data = await response.json()

                location.reload()
            }
        },
        computed:{
          getGrades(){
              return this.$store.getters.getGrades
          }
        },
        mounted() {
            this.$store.dispatch('fetchGrades')
        }
    }
</script>

<style scoped>
    .container{
        margin-top: .9rem;
        width: 100vw;
    }
    td{
        /*padding: 0;*/
    }
    .btn-group{
        margin: auto;

    }
    table{
        /*width: 500px;*/
    }
    .btn-options{
        width: 42rem;
    }
</style>