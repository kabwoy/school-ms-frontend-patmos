<template>
    <div class="user">
        <h2>Welcome {{returnUser}}</h2>
        <p class="text-dark">{{returnUserName}}</p>
    </div>

    <div class="container">
        <div class="box box1">
          <p>No Of Students</p>
            <p class="fw-bolder fs-2">{{$store.state.StudentModule.students.length}}</p>
        </div>
        <div class="box box2 p-4">
            <p>No Of Subjects</p>
            <p class="fw-bolder fs-2">{{$store.state.SubjectModule.subjects.length}}</p></div>
        <div class="box box3 p-4">
            <p>No Of Parents</p>
            <p class="fw-bolder fs-2">{{$store.state.ParentModule.parents.length}}</p>

        </div>
        <div class="box box4 p-4">
            <p>No Of Teachers</p>
            <p class="fw-bolder fs-2">0</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeDash",
        data(){
          return {

              students:null,
              subjects:null,
              parents:null
          }
        },
        computed:{
            intervalFunction(num){
                let counter = 0
                const interval = setInterval(function () {
                    counter++
                    if(counter === num + 1){
                        clearInterval(interval)
                        return counter
                    }
                } , 100)

            },
            returnUser(){
                const role = JSON.parse(localStorage.getItem('token')).role
                return role
            },
            returnUserName(){
                const username = JSON.parse(localStorage.getItem('token')).username
                return username
            }
        }
    }
</script>

<style scoped>
    .box{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        border-radius: 10px;
        cursor: pointer;
        transition: all .4s ease-in;
    }
    .box:hover{
        transform: translateY(-10px);
    }
    p{
        padding: 0;
    }
    .container{
        display: grid;
        margin-top: 1rem;
        row-gap: 5rem;
        column-gap: 2rem;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 200px  200px ;
        padding: 32px;
    }

    .box1{
        background-color: red;
        padding: 12px;
    }
.box2{
    background-color: #51cf66;
}
.box3{
    background-color: #db7c32;
}
.box4{
    background-color: #58f515;
}
    .user{
        margin-top: 3rem;
        padding: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>