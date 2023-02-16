export default {

    async loginAsParent(context , payload){

        const response = await fetch('http://localhost:3000/auth/login' , {headers:{'Content-Type':'application/json'}, method:'POST' , body:JSON.stringify(payload)})
        const data = await response.json()
        if (!response.ok) return alert(data.message)
        console.log(data)
        localStorage.setItem('user' , JSON.stringify(data))
        context.commit('setFirstName' , data.first_name)
        context.commit('setTokenParent' , data.token)

    }

}