<template>
    <router-link :class="btn-type" :to="destination"></router-link>
</template>

<script>
    export default {
        name: "Button",
        props:['btn-type' , 'destination']
    }
</script>

<style scoped>

</style>