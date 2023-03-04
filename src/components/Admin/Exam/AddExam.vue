<template>
    <SubNav title="Add Exam Types" link2="View Exam" link2Href="/dash/exams"/>
    <div class="container">
        <form @submit.prevent="handleSubmit">
            <p class="fw-bolder">Add Exam</p>
            <div class="form-group">
                <label for="grade">Exam Type</label>
                <input v-model.trim="type" type="text" id="grade" class="form-control" placeholder="exam type">
            </div>
            <button class="btn btn-outline-secondary w-100 mt-2">Add Exam</button>
        </form>
    </div>
</template>

<script>
    import SubNav from "../SubNav.vue";
    export default {
        name: "AddExam",
        components: {SubNav},
        data(){
          return{
              type:''
          }
        },
        methods:{
            handleSubmit(){
                if(this.type==='') return alert("The field is required")
                const exam = {
                    type: this.type
                }

                this.$store.dispatch('createExam' , exam)
                this.type = ''
            }
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