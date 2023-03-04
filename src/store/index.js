import {createStore} from 'vuex'
import ParentModule from './parent-store/base'
import GradeModule from './grades-store/base'
import StudentModule from './students-store/base'
import ParentAuth from './parent-auth-store/base'
import SubjectModule from './subject-store/base'
import ExamModule from './exam-store/base'
import ExamEntry from './exam-entry-store/base'
import ClassesModule from './classes-store/base'

const store = createStore( {
    modules:{
        ParentModule ,
        GradeModule ,
        StudentModule ,
        ParentAuth ,
        SubjectModule ,
        ExamModule,
        ExamEntry,
        ClassesModule,
    },

    state(){
        return{
            token:'',
            isLoggedIn:false,
            role:'',
            serverSideError:null
        }
    },
    mutations:{
        setToken(state , payload){
            localStorage.setItem('token' , JSON.stringify(payload))
            state.token = payload.token

        },
        setServerErr(state , payload){
            state.serverSideError = payload.err
        },
        setLoginStatus(state , payload){

            state.isLoggedIn = payload

        },

        setRole(state, payload){
            state.role = payload.role
        }

    },
    actions:{
        async loginStaff(context , payload){
            const response = await fetch("http://localhost:3000/auth/signin" , {headers:{'Content-Type':'application/json'},method:'POST' ,
                body:JSON.stringify({email:payload.email , password:payload.password})})
            const data = await response.json()
            if(!response.ok){
                return context.commit('setServerErr' , {err:data.message})
            }
            context.commit('setLoginStatus' , true)
            context.commit('setToken' , data)
        }
    },
    getters:{
        getServerErr(state){

            return state.serverSideError

        },

        getToken(state){

            return state.token

        },
        getRole(state){
            return state.role
        }
    }


})

export default store