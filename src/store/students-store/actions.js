export default {

    async fetchStudents(context){
        const token = JSON.parse(localStorage.getItem('token')).token
        const response = await fetch('http://localhost:3000/students' , {headers:{
            'Authorization':`Bearer ${token}`
            }})
        const data = await response.json();

        context.commit('setStudents' , data)


    },
    async createStudents(context , payload){
        const token = JSON.parse(localStorage.getItem('token')).token
        console.log(JSON.stringify(payload))
        const response = await fetch('http://localhost:3000/students' , {headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            } , method:'POST' , body:JSON.stringify(payload)})

        // if(!response.ok){
        //     const data = await response.json();
        //     return context.commit('setStudServerErr',data.message)
        // }
        const data = await response.json();

        // context.commit('setStudents' , data)


    },


}