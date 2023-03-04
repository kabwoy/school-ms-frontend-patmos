<template>
    <section class="mt-5">
        <h2 class="text-center p-4">OUR KEY VALUES</h2>
        <div class="container">
            <div class="row">
                <div class="col col-md-4 values">
                    <div class="heading">
                        <h2 class="title-heading mx-2"> <i class="fa-solid fa-book  "></i> LEARNING</h2>
                        <p class="text-dark">Lorem ipsum dolor sit, amet codolousantium ratione qui aut.
                            Obcaecati ipsum eaque placeat moles commodi eiusarum v doloruae, harum asperiores.</p>
                    </div>
                </div>
                <div class="col col-md-4 values">
                    <div class="heading">
                        <h2 class="title-heading mx-2 ">
                            <i class="fa-solid fa-graduation-cap"></i> DEVELOPMENT
                        </h2>

                        <p class="text-dark">Lorem ipsum dolor sit, amet consectetur mqui aut.
                            Obcaecati ipsum eaque pl mi numquam esseuos!
                            Exercitationem natus sed itect neces dtm asperiores.</p>
                    </div>
                </div>
                <div class="col col-md-4 values">
                    <div class="heading">
                        <h2 class="title-heading"> <i class="fa-sharp fa-solid fa-person-chalkboard"></i> DICISIPLINE</h2>
                        <p class="text-dark">The satisfaction of seeing the incremental gains,
                            through discipline alone, gives inspiration to apply the same methods in other areas of your life.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "KeyValues"
    }
</script>

<style scoped>
    i{
        color: rgb(5, 69, 99) ;
    }
    section{
        animation-name: keyValues;
        animation-duration: 2s;
    }
    @keyframes keyValues {

        0%{
            opacity: 0;
            transform: translateX(100px);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }

    }
</style>