import {createRouter , createWebHistory} from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Auth/Login.vue";
import Parent from "../components/Admin/Parent.vue";
import Dashboard from "../components/Admin/Dashboard.vue";
import AddStudent from "../components/Admin/AddStudent.vue";
import ParentList from "../components/Admin/ParentList.vue";
import UpdateParent from "../components/Admin/UpdateParent.vue";
import NotFound from "../components/NotFound.vue";
import StudentList from "../components/Admin/StudentList.vue";
import LoginPortal from "../components/Auth/LoginPortal.vue";
import Profile from "../components/Portal/Profile.vue";
import StudentDetail from "../components/Portal/StudentDetail.vue";
import About from "../components/About.vue";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/' , component:Home},
        {path:'/about-us' , component:About},
        {path:'/portal/login' , component:LoginPortal},
        {path:"/profile" , component:Profile},
        {path:'/dash' , component:Dashboard , children:[

                {path:'parent/new' , component:Parent},
                {path:"parents" , component:ParentList},
                {path:'students' , component:StudentList},
                {path:"students/new" , component:AddStudent},
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