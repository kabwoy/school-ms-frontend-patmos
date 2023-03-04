<template>
    <section class="mission container" >
        <h2 class="text-center">MISSION & VISION</h2>
        <hr class="text-warning h-3">
        <div class="row">
            <div class="mission col-md-6">
                <h2 class="mx-3">MISSION</h2>
                <p class="text-dark">empower, and enable all students to become caring,
                    contributing citizens who can succeed in an ever-changing world. Patmos Montisorri
                    is committed to focusing on high expectations and individual academic success and to creating a
                    community of respect and responsibility.</p>
            </div>

            <div class="vision col-md-6">
                <h2 class="mx-3">VISION</h2>
                <p class="text-dark">nurturing, safe and professional environment that supports the educational success and social,
                    emotional, and physical development of all students. Courses will be academic, engaging, and standards-based,
                    with a focus on the learner. All school staff will be highly qualified and caring instructors who are attentive
                    to the educational </p>
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        name: "MissionVision.vue"
    }
</script>

<style scoped>
section{
    animation-name: mission;
    animation-duration: 2s;
}
    @keyframes mission {

        0%{
            opacity:0;
            transform: translateX(-100px);

        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }

    }
</style>