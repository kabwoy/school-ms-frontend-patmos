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
            <form @submit.prevent="handleUpdate">
                <div class="form-group">
                    <label for="subject">Subject Name</label>
                    <input v-model.trim="subject_name"  type="text" id="subject" class="form-control" placeholder="Subject name">
                </div>
                <div class="form-group">
                    <label for="grade">Grade Name</label>
                    <select  id="grade" class="form-select" v-model="grade">
                        <option value="" selected disabled hidden>Grade</option>
                        <option  v-for="grade of getGrades" :value="grade.id">{{grade.grade_name}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="status">Subject Name</label>
                    <select  id="status" class="form-select" v-model="status">
                        <option value="" selected disabled hidden>Subject Status</option>
                        <option :selected="grade" v-for="status of status_options" :value="status">{{status}}</option>
                    </select>
                </div>
                <button class="btn btn-outline-dark w-100 mt-2">Update Subject</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UpdateSubject",
        data(){
          return{
              subject_name:'',
              grade:'',
              status:'',
              status_options:['Mandatory' , 'Optional'],
              fieldsAreValid:true,
          }
        },
        methods:{
          async handleUpdate(){
              const subjectBody = {
                  subject_name:this.subject_name,
                  grade:this.grade,
                  status:this.status,
              }
              if(
                  this.subject_name.trim() === '' || this.grade === '' || this.status.trim() === ''
              ){
                  return alert("All fields are required ")
              }
              const id = +this.$route.params.id
              const token  = JSON.parse(localStorage.getItem('token')).token

              const response = await fetch(`http://localhost:3000/subjects/${id}`
                  , {headers:{'Authorization':`Bearer ${token}` , 'Content-Type':'application/json'} , method:'PATCH' , body:JSON.stringify(subjectBody) })
              // if(!response.ok)
              const data = await response.json()
              if(!response.ok) return alert(data.message)
              this.$router.push({path:"/dash/subjects"})
          }
        },
        computed:{
            getGrades(){
                return this.$store.getters.getGrades
            }
        },
        async mounted() {
            const token  = JSON.parse(localStorage.getItem('token')).token
            const id = this.$route.params.id
            const response = await fetch(`http://localhost:3000/subjects/${+id}` , {headers:{'Content-Type':'application/json' , 'Authorization' : `Bearer ${token}`}})
            if(!response.ok) return alert("Failed to fetch records from the server")
            const subject = await response.json()
            this.subject_name = subject.subject_name
            this.grade = subject.grade.id
            this.status = subject.status

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