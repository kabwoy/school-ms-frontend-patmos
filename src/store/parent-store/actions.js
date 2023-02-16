export default {

    async fetchParents({commit}){
        const token = JSON.parse(localStorage.getItem('token')).token
        const response = await fetch('http://localhost:3000/parents' , {headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }})

        if(!response.ok) return console.log("failed fetching")

        const data = await response.json()

        commit('setParentList' , data)
    },

    async createParent(context , payload){
        const token = JSON.parse(localStorage.getItem('token')).token
        const response = await fetch('http://localhost:3000/parents' , {headers:{
                'Content-Type':'application/json',
                'Authorization' : `Bearer ${token}`
            } , method:'POST' , body:JSON.stringify(payload)})

        const data = response.json()



    }

}