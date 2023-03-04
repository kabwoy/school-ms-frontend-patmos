export default {

    async fetchClasses(context){
        const token = JSON.parse(localStorage.getItem('token')).token
        const response = await fetch('http://localhost:3000/classes' , {headers:{
            'Authorization':`Bearer ${token}`
            }})
        const data = await response.json();
        context.commit('setClasses' , data)
    },

    async addClasses(context , payload){
        const token = JSON.parse(localStorage.getItem('token')).token
        const response = await fetch('http://localhost:3000/classes' , {headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json'
            }, method:'POST' , body:JSON.stringify(payload)})
        const data = await response.json()
    },
}