<template>
    <div class="parent-nav">
        <nav class="parent-nav-flex-container">
            <h3>Student Registration</h3>
            <div class="nav-links">
                <a href=""><i class="bi bi-house-check"></i>Home</a>
                <router-link to="/dash/students"><i class="bi bi-person-fill-add"></i>Students List</router-link>
            </div>
        </nav>
    </div>
    <p style="margin-left: 15rem" v-if="$store.state.GradeModule.serverErr">{{$store.state.GradeModule.serverErr}}</p>
    <div v-if="!fieldsValid" class="alert alert-danger mt-2 text-center fw-bold" role="alert" >
        All Fields Are Required!!!
    </div>
    <div class="flex-container">
        <form @submit.prevent="handleSubmit" >
            <h1 class="h3 mb-3 fw-normal">Add Student</h1>
            <div class="row">
                <div class="col form-group">
                    <input type="text" class="form-control" v-model="this.first_name" placeholder="First name">
                </div>
                <div class="col">
                    <input type="text"  class="form-control" v-model="this.last_name" placeholder="Last name">
                </div>
            </div>
            <div class="form-group mt-2">
                <label for="dob" class="form-label">DOB</label>
                <input type="Date" id="dob" class="form-control" v-model="this.dob" placeholder="Date of birth">
            </div>
            <div class="form-group mt-2">
                <label for="classroom" class="form-label">Select Class Room</label>
                <select  id="classroom" class="form-select" v-model="this.classRoom" >
                    <option value="" selected disabled hidden >Select ClassRoom</option>
                    <option :value="cl.id" v-for="cl of getClasses" >{{cl.class_name}}</option>
                </select>
            </div>
            <div class="form-group mt-2">
                <label for="parent" class="form-label">Select Parents</label>
                <select  id="parent" class="form-select" v-model="this.parent">
                    <option value="" selected disabled hidden >Select Parent</option>
                    <option :value="parent.id" v-for="parent of getParentsList" >{{parent.first_name}}</option>
                </select>
            </div>
            <div class="form-group mt-2">
                <label for="grade" class="form-label">Select Grade</label>

                <select id="grade" class="form-select" v-model.trim="this.grade">
                    <option value="" selected disabled hidden >Select Grade</option>
                    <option :value="grade.id" v-for="grade of getGradesList" >{{grade.grade_name}}</option>
                </select>
            </div>
<!--            {{getGradesList}}-->
            <button class="btn btn-success mt-2 w-100"><i class="bi bi-person-add"></i>Add Student</button>
        </form>

    </div>
</template>

<script>
    export default {
        name: "AddStudent",

        data(){

          return{

              first_name:'',
              last_name:'',
              dob:'',
              parent:'',
              grade:'',
              classRoom:'',
              fieldsValid:true
          }
        },

        methods:{
          handleSubmit(){
              const studentBody = {
                  first_name: this.first_name.toLowerCase(),
                  last_name:this.last_name.toLowerCase(),
                  dob: this.dob,
                  class_name: this.class_name,
                  parent:+this.parent,
                  grade:+this.grade,
                  class_name:+this.classRoom
              }
              console.log(studentBody)
              if(
                  this.first_name.trim() === '' || this.last_name.trim() === ''||
                  this.dob.trim() === ''|| this.classRoom === '' ||
                  this.parent === '' || this.grade === ''

              ){
                  return this.fieldsValid = false
              }

              this.$store.dispatch('createStudents' , studentBody)

              this.first_name=''
              this.last_name=''
              this.dob=''
              this.class_name=''
              this.parent=''
              this.grade=''



          }
        },

        computed:{

            getParentsList(){
                return this.$store.state.ParentModule.parents
            },
            getGradesList(){
                return this.$store.state.GradeModule.grades
            },
            getClasses(){
                return this.$store.getters.getClasses
            }
        },
        mounted() {
            this.$store.dispatch('fetchClasses')
            this.$store.dispatch('fetchParents')
            this.$store.dispatch('fetchGrades')
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
    .parent-nav{
        margin-top: 4rem;
        background-color: #e9ecef;
        padding: 32px;
    }


    form{
        flex-basis: 100vw;

    }

</style>