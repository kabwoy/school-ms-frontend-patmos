<template>
    <div class="parent-nav">
        <nav class="parent-nav-flex-container">
            <h3>Submit Exam Marks</h3>
            <div class="nav-links">
                <a href=""><i class="bi bi-house-check"></i>Home</a>
                <router-link to="/dash/parents"><i class="bi bi-person-fill-add"></i>Exam Marks List</router-link>
            </div>
        </nav>
    </div>

<!--    <div class="filter-container mt-4 d-flex  justify-content-end mx-4">-->
<!--        <label for="filter" class="filter-label">filter by grade</label>-->
<!--        <select name="" id="filter" class="form-select w-auto mt-2" @change="filterByGrade">-->
<!--            <option selected disabled hidden>Filter By Grade</option>-->
<!--            <option v-for="grade of getGrades" :value="grade.id">{{grade.grade_name}}</option>-->
<!--        </select>-->
<!--    </div>-->
    <div v-if="!fieldsAreValid" :class="{toast:true, 'position-fixed':true , 'bottom-0':true ,'end-0':true , 'closeToast':toast_hidden , 'bg-danger':true}" id="closetoast:toast_hidden" data-autohide="false" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <strong class="me-auto">Error</strong>
            <small>just now</small>
            <button @click="closeToast" type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body text-white fw-bold">
            All Fields Are Required
        </div>
    </div>
    <div v-if="success" class="toast  position-fixed bottom-0 end-0   bg-success" data-autohide="false" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <strong class="me-auto">Success</strong>
            <small>just now</small>
            <button @click="closeToast" type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body text-white fw-bold">
          Marks Added Successfully
        </div>
    </div>

    <div class="container mt-3">
        <form @submit.prevent="handleSubmit">
            <h2>Search Query</h2>
            <div class="form-group">
                <label for="student">Class </label>
                <select @change="handleChange"  id="student" class="form-select" v-model="classRoom" >
                    <option selected disabled hidden value="">Select Class Room</option>
                    <option v-for="cl of getClasses" :value="cl.id"> {{cl.class_name}} </option>
                </select>
            </div>
            <div class="form-group">
                <label for="subjects">Subjects</label>
                <select  id="subjects" class="form-select" v-model="subject">
                    <option selected disabled hidden value="">Select Subject</option>
                    <option v-for="sub of subjects" :value="sub.id">{{sub.subject_name}}</option>
                </select>
            </div>

            <div class="form-group">
                <label for="exam">Exam Type</label>
                <select  id="exam" class="form-select" v-model="exam_type">
                    <option selected disabled hidden value="">Select Exam Type</option>
                    <option v-for="exam of exams" :value="exam.id"> {{exam.type}}</option>
                </select>
            </div>
<!--            <div class="form-group">-->
<!--                <label for="score">Score</label>-->
<!--                <input id="score" class="form-control" v-model.number="marks_score">-->
<!--            </div>-->
            <button class="btn btn-outline-success w-100 mt-3">Insert Marks</button>
        </form>
        <div v-if="students" class="marks-section">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Attendance</th>
                    <th scope="col">Marks</th>
                </tr>
                </thead>
                <tbody>
                <tr v-if="classStud.length>0" v-for="stud of classStud">
                    <td  class="table-rows"  :data-id="stud.id">{{stud.first_name}}  {{stud.last_name}}</td>
                    <td><input type="checkbox"></td>
                    <td><input type="text" class="form-control"></td>
                </tr>
                <tr v-else>
                    Search For A Class
                </tr>
                <button class="mt-3 btn btn-primary" :disabled="classStud<=0"  @click="addMarks">Add Marks</button>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddExamMarks",
        data(){
          return{
              subjects:null,
              students:null,
              subject:'',
              student:'',
              classRoom:'',
              marks_score:"",
              fieldsAreValid:true,
              toast_hidden:true,
              exams:[],
              exam_type:'',
              success:false,
              test:'',
              classStud:[]
          }
        },
        methods:{
            filterByGrade(e){

                this.students = this.$store.getters.getStudents
                const student = this.students.filter((student)=>{
                        return +student.grade.id === +e.target.value
                    })
                this.students = student
                this.subjects = this.$store.getters.getSubjects

                const subject = this.subjects.filter((subject)=>{

                    return +subject.grade.id === +e.target.value

                })
                this.subjects = subject

                console.log(this.subjects)

            },
            addMarks(){
                const arrOfObj = []
                const tblRows = document.querySelectorAll('.table-rows')
                const inputs = document.querySelectorAll('.form-control')

                if(this.classRoom === '' || this.subject === '' || this.exam_type === '')
                    return alert("Error!!! Please make sure you have selected a valid class ,subject and exam type")

                for(let i = 0; i<tblRows.length; i++){
                    const studId = tblRows[i].dataset.id
                    let dataObj = {student:+studId , score:+inputs[i].value , subject: this.subject , exam:this.exam_type}
                    arrOfObj.push(dataObj)
                }
                arrOfObj.map((exam)=>{
                    this.$store.dispatch("addExamMarks" , exam)
                })
                this.success = true
                setTimeout(()=>{
                    this.success = false
                },3000)

            },

            handleSubmit(){
                const students = this.getStudents
                // const search = classes.filter((cl)=>cl.id == this.classRoom)
                const res = students.filter((student)=>student.class_name.id === this.classRoom)
                this.classStud =  res

            },
            handleChange(){
                this.subjects = this.$store.getters.getSubjects
                const classRes = this.getClasses.find((classRoom)=> classRoom.id == this.classRoom)
               const filterSubjects = this.subjects.filter((subject)=>{

                   return subject.grade.id == classRes.grade.id

               })

                this.subjects = filterSubjects
            },
            closeToast(){
                this.toast_hidden = true
            }
        },
        computed:{
            getSubjects(){
                return this.$store.getters.getSubjects
            },
            getStudents(e){
                console.log(e.target)

                return this.$store.getters.getStudents
            },
            getGrades(){
                return this.$store.getters.getGrades
            },
            getClasses(){
                return this.$store.getters.getClasses
            }

        },
        mounted() {
            this.$store.dispatch('fetchExam').then(()=>{
                this.exams = this.$store.getters.getExams
            })
            this.$store.dispatch('fetchSubjects').then(()=>{
                this.subjects = this.$store.getters.getSubjects
                this.$store.dispatch('fetchStudents').then(()=>{
                    this.students = this.$store.getters.getStudents
                })
            })



        }
    }
</script>

<style scoped>
    .container{
        display: grid;
        grid-template-columns: 2fr 3fr ;
        /*grid-template-rows: 0 100%;*/
        column-gap: 10rem;
        /*padding: 82px;*/
        border-radius: 8px;
    }
    @keyframes toaster {

        0%{
            opacity: 0;
            transform: translateY(40px);
        }
        100%{
            opacity: 1;
            right: 0;
            transform: translateY(-50px);
        }

    }
    .toast:not(.show){
        display: block;
    }
    .toast{
        animation-name: toaster;
        animation-duration: .5s;
        animation-timing-function: ease-in;
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
    i{
        margin-right: .1rem;
        font-size: 20px;
    }
    .filter-container{
        position: relative;
    }
    .filter-label{
        position: absolute;
        font-weight: bold;
        top: -1rem;
        right: 3.1rem;
    }

    .closeToast{
        display: none!important;
        animation-name: closer;
        animation-duration: 2s;
    }
    form{
        justify-self: start;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        padding: 80px;
        border-radius: 10px;
        max-height: 25rem;
    }
    .titles{
        display: flex;
        justify-content: space-between;
        /*padding: 10rem;*/
    }
    .marks-section{
        /*padding: 10rem;*/
        /*justify-self: end;*/
    }
    .container h1{
        background-color: green;
    }
</style>

