<template>
    <SubNav title="Add Grades" link2="View Grades" link2Href="/dash/grades"/>
    <div class="container">
        <form @submit.prevent="handleGrades">
            <p class="fw-bolder">Add Grade</p>
            <div class="form-group">
                <label for="grade">Grade Name</label>
                <input v-model.trim="grade_name" type="text" id="grade" class="form-control" placeholder="grade name">
            </div>
            <button class="btn btn-outline-dark w-100 mt-2">Add Grade</button>
        </form>
    </div>
</template>

<script>
    import SubNav from "../SubNav.vue";
    export default {
        name: "AddGrade",
        data(){
          return{
              grade_name:''
          }
        },
        methods:{
          handleGrades(){

              if(this.grade_name==""){
                  return alert("Grade Name Is Required!!")
              }
              this.$store.dispatch('createGrade' , {grade_name:this.grade_name}).then(()=>{
                  this.$router.replace({path:'/dash/grades'})
              })

          }
        },
        components: {SubNav}
    }
</script>

<style scoped>
    .container{
        margin-top: 1rem;
        margin-bottom: 15rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    form{

        margin-left: 1rem;
        /*max-width: 930px;*/
    }
p{
    color: #555;
    padding: 0;
}
</style>