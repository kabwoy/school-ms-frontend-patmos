<template>
    <SubNav title="Update Grades" link2="View Grades" link2Href="/dash/grades"/>
    <div class="container">
        <form @submit.prevent="handleUpdate">
            <p class="fw-bolder">Add Grade</p>
            <div class="form-group">
                <label for="grade">Grade Name</label>
                <input v-model.trim="grade_name" type="text" id="grade" class="form-control" placeholder="grade name">
            </div>
            <button class="btn btn-outline-dark w-100 mt-2">Update Grade</button>
        </form>
    </div>
</template>

<script>
    import SubNav from "../SubNav.vue";
    export default {
        name: "EditGrades",
        components: {SubNav},
        data(){
          return {
              grade_name:'',
              // grade:{}
          }
        },
        methods:{
            async handleUpdate() {
                const id = this.$route.params.id
                const token = JSON.parse(localStorage.getItem('token')).token
                console.log(token)
              const response = await fetch(`http://localhost:3000/grades/${id}` ,
                  {headers:{'Authorization':`Bearer ${token}` , 'Content-Type':'application/json'
                  },  method:'PATCH' , body:JSON.stringify({grade_name:this.grade_name})})

                const data = await response.json()
                // console.log(response)
                this.$router.push({path:'/dash/grades'})


            }
        },
        async mounted() {
            const id = this.$route.params.id
            const token = JSON.parse(localStorage.getItem('token')).token
            const response = await fetch(`http://localhost:3000/grades/${id}`,
                {headers:{'Authorization':`Bearer ${token}` , 'Content-Type':'application/json'}})
            const data = await response.json()
            this.grade_name = data.grade_name

        }
    }
</script>

<style scoped>
    .container{
        margin-top: 1rem;
        margin-bottom: 15rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    form{

        margin-left: 1rem;
        /*max-width: 930px;*/
    }
    p{
        color: #555;
        padding: 0;
    }
</style>