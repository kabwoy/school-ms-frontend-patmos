<template>
    <SubNav title="Exam List" link2="Add Exam" link2Href="/dash/exams/new" bg-color="#e3fafp"/>
    <div class="container">
        <table class="table table-hover table-bordered .table-striped">
            <thead class="bg-dark text-white">
            <tr>
                <th >Exam Type</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr class="table-primary" v-for="exam of getExam">
                <td>{{exam.type}}</td>
                <td class="btn-options"><div class="btn-group"><a class="btn btn-outline-primary" @click="loadUpdateCmp(exam.id)"><i class="bi bi-pen"></i> Edit</a> <a class="btn btn-outline-danger"  @click="deleteExam(exam.id)"><i class="bi bi-trash2"></i> Delete</a> </div></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import SubNav from "../SubNav.vue";
    import extractToken from "../../../utils/extractToken";
    export default {
        name: "ExamList",
        components: {SubNav},
        methods:{
          loadUpdateCmp(id){

              this.$router.push({path:`/dash/exams/edit/${id}`})

          },
            async deleteExam(id){
              const token = extractToken()
                const paramId = this.$route.params.id
                const response = await fetch(`http://localhost:3000/exams/${+id}` , {headers:{'Content-Type':'application/json' , 'Authorization' : `Bearer ${token}`},
                method:'DELETE'})
                const data = response.json()
                location.reload()


            }
        },
        computed:{
            getExam(){
                return this.$store.getters.getExams
            }
        },
        mounted() {
            this.$store.dispatch('fetchExam')
        }
    }
</script>

<style scoped>
    .container{
        margin-top: .9rem;
        width: 100vw;
    }
</style>