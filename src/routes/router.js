import {createRouter , createWebHistory} from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Auth/Login.vue";
import Parent from "../components/Admin/Parent.vue";
import Dashboard from "../components/Admin/Dashboard.vue";
import AddStudent from "../components/Admin/AddStudent.vue";
import ParentList from "../components/Admin/ParentList.vue";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/' , component:Home},
        {path:'/dash' , component:Dashboard , children:[
                {path:'parent/new' , component:Parent},
                {path:"parents" , component:ParentList},
                {path:"students/new" , component:AddStudent},

            ]},
        {path:"/login" , component:Login}
    ]
})

export default  router