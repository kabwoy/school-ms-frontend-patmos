export default {

    async fetchStudents(context){

        const response = await fetch('http://localhost:3000/students' , {headers:{
            'Authorization':`Bearer ${localStorage.getItem('token')}`
            }})
        const data = await response.json();

        context.commit('setStudents' , data)


    },
    async createStudents(context , payload){
        console.log(JSON.stringify(payload))
        const response = await fetch('http://localhost:3000/students' , {headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            } , method:'POST' , body:JSON.stringify(payload)})

        // if(!response.ok){
        //     const data = await response.json();
        //     return context.commit('setStudServerErr',data.message)
        // }
        const data = await response.json();

        // context.commit('setStudents' , data)


    },


}