<template>
    <div  class="alert alert-danger mt-2 text-center fw-bold" role="alert" >
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: "ErrorAlert",
        props:['msg']
    }
</script>

<style scoped>

</style>