export default {

    async fetchGrades(context){
        const token = JSON.parse(localStorage.getItem('token')).token
        const response = await fetch('http://localhost:3000/grades' , {headers:{
            'Authorization':`Bearer ${token}`
            }})
        const data = await response.json();

        context.commit('setGrades' , data)


    },

}