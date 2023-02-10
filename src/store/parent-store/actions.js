export default {

    async fetchParents({commit}){
        const response = await fetch('http://localhost:3000/parents' , {headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }})

        if(!response.ok) return console.log("failed fetching")

        const data = await response.json()

        commit('setParentList' , data)
    },

    async createParent(context , payload){
        const response = await fetch('http://localhost:3000/parents' , {headers:{
                'Content-Type':'application/json',
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            } , method:'POST' , body:JSON.stringify(payload)})

        const data = response.json()



    }

}