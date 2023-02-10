export default {

    async fetchGrades(context){

        const response = await fetch('http://localhost:3000/grades' , {headers:{
            'Authorization':`Bearer ${localStorage.getItem('token')}`
            }})
        const data = await response.json();

        context.commit('setGrades' , data)


    },

}