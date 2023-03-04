<script>

export default {

 created() {
  const token = JSON.parse(localStorage.getItem('token'))
  if(!token) return this.$store.state.isLoggedIn = false
  this.$store.state.token = token.token
  this.$store.state.role = token.role
  this.$store.state.isLoggedIn = true
 },
 async mounted() {
   const grades = await this.$store.dispatch('fetchGrades')

 }

}
</script>

<template>

 <router-view></router-view>
</template>

<style >
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  body{
   position: relative;
   background-color:#f5f5f5;
  }

  p{
   font-size: 24px;
   line-height: 1.6;
   color: #fff;
   padding: 24px;
  }

  h1{
   font-size: 52px;

  }

  h2{
   color: rgb(14, 12, 12);
  }
  @media (max-width: 480px) {

   html , body{
    overflow-x: hidden;
   }


   .btn{

    text-align: center;
   }

   .footer-container{
    padding: 32px;
    height: 12em;
    margin-top: 1em;

   }
   .footer-container > footer > span {
    display: block;
   }
  }
</style>
