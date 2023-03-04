import {createRouter , createWebHistory} from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Auth/Login.vue";
import Parent from "../components/Admin/Parents/Parent.vue";
import Dashboard from "../components/Admin/Dashboard.vue";
import AddStudent from "../components/Admin/Students/AddStudent.vue";
import ParentList from "../components/Admin/Parents/ParentList.vue";
import UpdateParent from "../components/Admin/Parents/UpdateParent.vue";
import NotFound from "../components/NotFound.vue";
import StudentList from "../components/Admin/Students/StudentList.vue";
import LoginPortal from "../components/Auth/LoginPortal.vue";
import Profile from "../components/Portal/Profile.vue";
import StudentDetail from "../components/Portal/StudentDetail.vue";
import About from "../components/About.vue";
import ContactUs from "../components/ContactUs.vue";
import FileUpload from "../components/testComponents/FileUpload.vue";
import GradeList from "../components/Admin/Grades/GradeList.vue";
import AddGrade from "../components/Admin/Grades/AddGrade.vue";
import EditGrades from "../components/Admin/Grades/EditGrades.vue";
import UpdateStudent from "../components/Admin/Students/UpdateStudent.vue";
import AddSubject from "../components/Admin/Subjects/AddSubject.vue";
import SubjectList from "../components/Admin/Subjects/SubjectList.vue";
import UpdateSubject from "../components/Admin/Subjects/UpdateSubject.vue";
import HomeDash from "../components/Admin/HomeDash.vue";
import AddExam from "../components/Admin/Exam/AddExam.vue";
import ExamList from "../components/Admin/Exam/ExamList.vue";
import UpdateExam from "../components/Admin/Exam/UpdateExam.vue";
import AddExamMarks from "../components/Admin/ExamEntry/AddExamMarks.vue";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/' , component:Home},
        {path:'/test' , component:FileUpload},
        {path:'/about-us' , component:About},
        {path:'/contact' , component:ContactUs},
        {path:'/portal/login' , component:LoginPortal},
        {path:"/profile" , component:Profile},
        {path:'/dash' , component:Dashboard , children:[
                {path:"home" , component:HomeDash},
                {path:'parent/new' , component:Parent},
                {path:"parents" , component:ParentList},
                {path:'students' , component:StudentList},
                {path:'subjects' , component:SubjectList},
                {path:'subjects/new' , component:AddSubject},
                {path:"students/new" , component:AddStudent},
                {path:"exam-marks/new" , component: AddExamMarks},
                {path:'exams/new' , component:AddExam},
                {path:'exams' , component:ExamList},
                {path:"grades/new" , component:AddGrade},
                {path:'grades' , component:GradeList},
                {path:"grades/:id" , component:EditGrades},
                {path:"students/edit/:id" , component:UpdateStudent},
                {path:"subjects/edit/:id" , component:UpdateSubject},
                {path:"exams/edit/:id" , component:UpdateExam},
                {path:"parents/edit/:id" , component:UpdateParent ,

                    props: (route) => {
                        const id = Number.parseInt(route.params.id, 10)
                        if (Number.isNaN(id)) {
                            throw new Error()
                        }
                        return { id }
                    }},
            ]},
        {path:"/login" , component:Login},
        {path:"/student/details/:id" , component:StudentDetail},
        {path:'/:NotFound(.*)*' , component:NotFound}
    ]
})

export default  router