<template>
    <NavBar/>
    <HeroSection/>
    <KeyValues/>
    <MissionVision/>
    <Footer/>
</template>

<script>
    import HeroSection from "./HeroSection.vue";
    import KeyValues from "./KeyValues.vue";
    import MissionVision from "./MissionVision.vue";
    import NavBar from "./NavBar.vue";
    export default {
        name: "Home.vue",
        components:{
            NavBar,
            HeroSection,
            KeyValues,
            MissionVision
        }
    }
</script>

<style scoped>


</style>