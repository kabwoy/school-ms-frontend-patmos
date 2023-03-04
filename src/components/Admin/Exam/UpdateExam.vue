<template>
    <SubNav title="Edit Exam Types" link2="View Exam" link2Href="/dash/exams"/>
    <div class="container">
        <form @submit.prevent="handleSubmit">
            <p class="fw-bolder">Edit Exam</p>
            <div class="form-group">
                <label for="grade">Exam Type</label>
                <input v-model.trim="type" type="text" id="grade" class="form-control" placeholder="exam type">
            </div>
            <button class="btn btn-outline-secondary w-100 mt-2">Edit Exam</button>
        </form>
    </div>
</template>

<script>
    import SubNav from "../SubNav.vue";
    import getToken from '../../../utils/extractToken'
    export default {
        name: "UpdateExam",
        components: {SubNav},
        data(){
            return{

                type:''
            }
        },
        methods:{
            async handleSubmit(){
                const token = getToken()
                const id = this.$route.params.id
                if(!this.type) return alert("This Field Cannot Be Empty")
                const exam = {
                    type:this.type
                }
                const response = await fetch(`http://localhost:3000/exams/${id}` , {headers:{'Authorization': `Bearer ${token}` ,
                        'Content-Type':'application/json'} , method:'PATCH' , body:JSON.stringify(exam) })
                if(!response.ok) return alert(`status code is ${response.status}`)
                const data = await response.json()
                this.$router.push({path:"/dash/exams"})

            }
        },
        async mounted() {
            const token = getToken()
            const id = this.$route.params.id
            const response = await fetch(`http://localhost:3000/exams/${id}` , {headers:{'Authorization': `Bearer ${token}` ,
                    'Content-Type':'application/json'} , method:'GET' })
            if(!response.ok) return alert((await response).status)
            const data = await response.json()
            this.type = data.type

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