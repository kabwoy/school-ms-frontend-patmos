<template>
    <SubNav title="Update Parent" link2="ParentList" link2Href="/dash/parents" />
    <div class="flex-container">
        <form @submit.prevent="handleUpdate">
            <h1 class="h3 mb-3 fw-normal">Edit Parent</h1>
            <div class="row">
                <div class="col form-group">
                    <input type="text" v-model="first_name"  class="form-control" placeholder="First name">
                </div>
                <div class="col">
                    <input type="text" v-model="last_name"  class="form-control" placeholder="Last name">
                </div>
            </div>
            <div class="form-group mt-2">
                <input type="text" class="form-control" v-model="contact" placeholder="contact">
            </div>
            <div class="form-group mt-2">
                <input type="text" class="form-control" v-model="id_number" placeholder="id number">
            </div>
            <div class="form-group mt-2">
                <input type="text" class="form-control" v-model="address" placeholder="address">
            </div>
            <button class="btn btn-outline-primary mt-2 w-100"><i class="bi bi-pencil-square"></i> Update Parent</button>
        </form>
    </div>

</template>

<script>
    import SubNav from "../SubNav.vue";
    export default {
        name: "UpdateParent",
        components: {SubNav},
        props:['id'],
        data(){
            return{
                first_name:'',
                last_name:'',
                contact:'',
                id_number:'',
                address:'',
                parent:null


            }
        },
        methods:{
            async handleUpdate(){

                const parentBody = {
                    first_name:this.first_name,
                    last_name:this.last_name,
                    contact:this.contact,
                    id_number:this.id_number,
                    address:this.address
                }
                if(
                    this.first_name.trim() === '' || this.last_name.trim() === '' || this.contact.trim() === '' ||
                    this.id_number.trim() === '' || this.address.trim() === ''
                ){
                    return alert("All fields are required ")
                }
                const id = +this.$route.params.id
                const token  = JSON.parse(localStorage.getItem('token')).token

                const response = await fetch(`http://localhost:3000/parents/${id}`
                , {headers:{'Authorization':`Bearer ${token}` , 'Content-Type':'application/json'} , method:'PATCH' , body:JSON.stringify(parentBody) })
                // if(!response.ok)
                const data = await response.json()
                if(!data) return alert(data)
                console.log(data)
                this.$router.push({path:"/dash/parents"})

            },

        },

        computed:{


        },

        async  mounted() {
            console.log('mounted')
            const token  = JSON.parse(localStorage.getItem('token')).token
            const id = this.$route.params.id
            const response = await fetch(`http://localhost:3000/parents/${+id}` , {headers:{'Content-Type':'application/json' , 'Authorization' : `Bearer ${token}`}})
            if(!response.ok) return alert("Failed to fetch records from the server")
            const parent = await response.json()

            this.first_name = parent.first_name
            this.last_name = parent.last_name
            this.contact = parent.contact
            this.id_number = parent.id_number
            this.address = parent.address

        }

    }
</script>

<style scoped>
    .flex-container{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 82px;
        width: 100%;
        /*margin: auto;*/
        margin-top: .5rem;
        gap: 5rem;
        position: relative;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        border-radius: 8px;

    }
    form{
        flex-basis: 100vw;

    }
</style>