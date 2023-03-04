export default {

    async fetchExam(context){
        const token = JSON.parse(localStorage.getItem('token')).token
        const response = await fetch('http://localhost:3000/exams' , {headers:{
            'Authorization':`Bearer ${token}`
            }})
        const data = await response.json();
        // console.log(data)
        context.commit('setExams' , data)
    },

    async createExam(context , payload){
        const token = JSON.parse(localStorage.getItem('token')).token
        const response = await fetch('http://localhost:3000/exam-entry' , {headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json'
            }, method:'POST' , body:JSON.stringify(payload)})
        const data = await response.json()
        console.log(data)
    },
}