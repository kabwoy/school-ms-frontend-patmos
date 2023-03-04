<template>
    <div class="parent-nav">
        <nav class="parent-nav-flex-container">
            <h3>Subject Registration</h3>
            <div class="nav-links">
                <router-link to="/dash"><i class="bi bi-house-check"></i>Home</router-link>
                <router-link to="/dash/subjects"><i class="bi bi-person-fill-add"></i>Subjects List</router-link>
            </div>
        </nav>
    </div>
    <div class="flex-container">
    <div class="container">
        <ErrorAlert v-if="!fieldsAreValid" msg="All Fields Are Required"/>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="subject">Subject Name</label>
                <input v-model.trim="subject_name"  type="text" id="subject" class="form-control" placeholder="Subject name">
            </div>
            <div class="form-group">
                <label for="grade">Grade Name</label>
                <select  id="grade" class="form-select" v-model="grade">
                    <option value="" selected disabled hidden>Grade</option>
                    <option v-for="grade of getGrades" :value="grade.id">{{grade.grade_name}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="status">Subject Status</label>
                <select  id="status" class="form-select" v-model="status">
                    <option value="" selected disabled hidden>Subject Status</option>
                    <option v-for="status of status_options" :value="status">{{status}}</option>
                </select>
            </div>
            <button class="btn btn-outline-dark w-100 mt-2">Add Subject</button>
        </form>
    </div>
    </div>
<!--    {{getGrades}}-->
</template>

<script>
    export default {
        name: "AddSubject",
        data(){
            return{
                status_options:['Mandatory' , 'Optional'],
                subject_name:'',
                grade:'',
                status:'',
                fieldsAreValid:true
            }
        },
        methods:{
            handleSubmit(){
                if(this.subject_name === '' || this.grade === '' || this.status==='') {this.fieldsAreValid = false; return }
                const subjectsBody ={
                    subject_name: this.subject_name,
                    grade:this.grade,
                    status:this.status
                }
                this.$store.dispatch('createSubject' , subjectsBody).then(()=>{
                    this.subject_name = ''
                    this.grade = ''
                    this.status = ''
                })
            }
        },
        computed:{
            getGrades(){
                return this.$store.getters.getGrades
            }
        }
    }
</script>

<style scoped>
    .flex-container{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 82px;
        width: 100%;
        /*margin: auto;*/
        margin-top: .5rem;
        gap: 5rem;
        position: relative;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        border-radius: 8px;

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