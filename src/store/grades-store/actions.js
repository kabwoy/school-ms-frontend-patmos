export default {

    async fetchGrades(context){
        const token = JSON.parse(localStorage.getItem('token')).token
        const response = await fetch('http://localhost:3000/grades' , {headers:{
            'Authorization':`Bearer ${token}`
            }})
        const data = await response.json();
        // console.log(data)
        context.commit('setGrades' , data)
    },

    async createGrade(context , payload){
        const token = JSON.parse(localStorage.getItem('token')).token
        const response = await fetch('http://localhost:3000/grades' , {headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json'
            }, method:'POST' , body:JSON.stringify(payload)})
    },
    async updateGrade(context , payload){

        const response = await fetch(`http://localhost:3000`)

    }

}