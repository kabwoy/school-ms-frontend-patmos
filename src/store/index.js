import {createStore} from 'vuex'
import ParentModule from './parent-store/base'
import GradeModule from './grades-store/base'
import StudentModule from './students-store/base'

const store = createStore( { modules:{ParentModule , GradeModule , StudentModule },

    state(){
        return{
            token:'',
            isLoggedIn:false,
            serverSideError:null
        }
    },
    mutations:{
        setToken(state , payload){
            localStorage.setItem('token' , payload.token)
            state.token = payload.token

        },
        setServerErr(state , payload){
            state.serverSideError = payload.err
        },
        setLoginStatus(state , payload){

            state.isLoggedIn = payload

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

        }
    }


})

export default store