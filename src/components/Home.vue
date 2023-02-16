<template>
    <NavBar/>
    <HeroSection/>
    <OurMotto/>
    <KeyValues/>
    <MissionVision/>
    <Activities/>
    <h2 class="text-center mt-2 fw-bold" style="color: #555">Location👇👇</h2>
    <LocationMap/>
    <Footer/>
</template>

<script>
    import HeroSection from "./HeroSection.vue";
    import KeyValues from "./KeyValues.vue";
    import MissionVision from "./MissionVision.vue";
    import NavBar from "./NavBar.vue";
    import OurMotto from "./OurMotto.vue";
    import Activities from "./Activities.vue";
    import LocationMap from "./LocationMap.vue";
    export default {
        name: "Home.vue",
        components:{
            LocationMap,
            Activities,
            OurMotto,
            NavBar,
            HeroSection,
            KeyValues,
            MissionVision
        }
    }
</script>

<style scoped>


</style>