<template>
    <div class="parent-nav">
        <nav class="parent-nav-flex-container">
            <h3>Parent Registration</h3>
            <div class="nav-links">
            <a href=""><i class="bi bi-house-check"></i>Home</a>
            <router-link to="/dash/parents"><i class="bi bi-person-fill-add"></i>Parents List</router-link>
            </div>
        </nav>
    </div>
    <div class="flex-container">
    <form @submit.prevent="handleSubmit">
        <h1 class="h3 mb-3 fw-normal">Add Parent</h1>
        <div class="row">
            <div class="col form-group">
                <input type="text" v-model="first_name" class="form-control" placeholder="First name">
            </div>
            <div class="col">
                <input type="text" v-model="last_name" class="form-control" placeholder="Last name">
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
        <button class="btn btn-primary mt-2 w-100"><i class="bi bi-plus-circle-fill"></i>Add Parent</button>
    </form>

    </div>
<!--    {{getParents}}-->
</template>

<script>
    export default {
        name: "Parent",

        data(){
            return{
                first_name:'',
                last_name:'',
                contact:'',
                id_number:'',
                address:''
            }
        },
        methods:{
            async handleSubmit(){
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

                // console.log(parentBody)
                // const response = await fetch('http://localhost:3000/parents' , {headers:{
                //     'Content-Type':'application/json',
                //         'Authorization' : `Bearer ${localStorage.getItem('token')}`
                //     } , method:'POST' , body:JSON.stringify(parentBody)})

                this.$store.dispatch('createParent' , parentBody).then(()=>{
                    this.first_name = ''
                    this.last_name = ''
                    this.contact = ''
                    this.id_number = ''
                    this.address = ''
                    location.reload()
                }).catch((err)=>{
                    console.log(err)
                })



            }
        },
        computed:{

            getParents(){

                return this.$store.getters.getParentList
            }

        },

        mounted() {
            this.$store.dispatch('fetchParents')
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
.parent-nav{
    margin-top: 4rem;
    background-color: #e9ecef;
    padding: 32px;
}
.parent-nav-flex-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.parent-nav-flex-container>.nav-links>a{
    margin: 8px;
    text-decoration: none;
    color: #495057;
}
.parent-nav-flex-container>.nav-links>a:hover{
    color: #212529;
}
i{
    margin-right: .1rem;
    font-size: 20px;
}
    .list-of-parents{
        /*position: absolute;*/
        top: 10rem;
        right: 0;
    }

    form{
        flex-basis: 100vw;

    }

</style>