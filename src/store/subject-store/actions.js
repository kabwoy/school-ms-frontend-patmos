export default {

    async fetchSubjects(context){
        const token = JSON.parse(localStorage.getItem('token')).token
        const response = await fetch('http://localhost:3000/subjects' , {headers:{
            'Authorization':`Bearer ${token}`
            }})
        const data = await response.json();
        // console.log(data)
        context.commit('setSubjects' , data)
    },

    async createSubject(context , payload){
        const token = JSON.parse(localStorage.getItem('token')).token
        const response = await fetch('http://localhost:3000/subjects' , {headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json'
            }, method:'POST' , body:JSON.stringify(payload)})
    },

}