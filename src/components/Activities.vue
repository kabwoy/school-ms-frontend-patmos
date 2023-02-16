<template>
    <div class="container">
        <h2>Activities</h2>
        <div class="row justify-content-lg-around">
            <div class="col card col-md-4  col-sm-12" style="width: 20rem;">
                <img class="card-img-top" src="../assets/4.jpg" alt="Card image cap" style="width: 100%; height: auto;">
                <div class="card-body">
                    <h5 class="card-title">Sports</h5>
                    <p class="card-text">Learners enjoying their learning in weather and light substrand.</p>
<!--                    <a href="#" class="btn btn-primary">Go somewhere</a>-->
                </div>
            </div>
            <div class=" col card col-md-4 col-sm-12" style="width: 20rem;">
                <img class="card-img-top" src="../assets/5.jpg" alt="Card image cap" height="300px" style="object-fit: cover;" >
                <div class="card-body">
                    <h5 class="card-title">Cleaning exercise.</h5>
                    <p class="card-text">Cleaning exercise of the classroom.CBC manenos..</p>
<!--                    <a href="#" class="btn btn-primary">Go somewhere</a>-->
                </div>
            </div>

            <div class=" col card col-md-4  col-sm-12" style="width: 20rem;">
                <img class="card-img-top" src="../assets/3.jpg" alt="Card image cap" height="300px" style="object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">Music festival</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<!--                    <a href="#" class="btn btn-primary">Go somewhere</a>-->
                </div>
            </div>


        </div>
    </div>
</template>

<script>

    export default {

        name: "Activities"
    }
</script>

<style scoped>
.card-body > .card-text{
    font-size: 18px;
    color: #555;
}
    @media(max-width: 480px){

        .row{
            flex-direction: column;
            gap: 1.5rem;
            padding-left: 2rem;
        }

    }
</style>