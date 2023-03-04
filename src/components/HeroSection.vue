<template>
    <div class="header-description mh-100 vw-100  ">

<!--    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">-->
<!--        <div class="carousel-inner">-->
<!--            <div class="carousel-item active">-->
<!--                <img src="http://www.build-africa.org/sites/default/files/build-a-school_9.jpg" class="d-block w-100" alt="...">-->
<!--                <div class="carousel-caption  d-md-block">-->
<!--                    <h1>Welcome To Patmos</h1>-->
<!--                    <OurMotto/>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="carousel-item">-->
<!--                <img src="https://i.pinimg.com/originals/a7/4c/ab/a74cab43a1ea87f851754dc7a917be2e.png" class="d-block w-100" alt="...">-->
<!--            </div>-->
<!--            <div class="carousel-item">-->
<!--                <img src="https://media.istockphoto.com/id/183368584/photo/school-in-juba-southern-sudan.jpg?s=612x612&w=0&k=20&c=zIvxawK_38rSnJFJ3pNbS3OvnL1w-5yIQLgIN1Tcn50=" class="d-block w-100" alt="...">-->
<!--                <div class="carousel-caption  d-md-block">-->
<!--                    <h5>First slide label</h5>-->
<!--                    <p>Some representative placeholder content for the first slide.</p>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">-->
<!--            <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--            <span class="visually-hidden">Previous</span>-->
<!--        </button>-->
<!--        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">-->
<!--            <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--            <span class="visually-hidden">Next</span>-->
<!--        </button>-->
<!--    </div>-->
        <h1 class="text-white px-4 fw-bolder heading-primary" style="letter-spacing: 2px; text-transform: uppercase;">Welcome To Patmos Montisorry primary</h1>
        <div class="description">
            <p class="heading-secondary">We give the best education quality across the sub sahara of east africa.join us tody
                inorder to shape the future of your child.foward ever backward never,
                Lorem ipsum dolor sit amet consectetur adipisicing epraesentium fugit, nihil.
            </p>
            <router-link to="/contact" class="btn btn-warning mx-4">Contact Us</router-link>
        </div>
    </div>
</template>

<script>
    import OurMotto from "./OurMotto.vue";
    export default {
        name: "HeroSection",
        components: {OurMotto}
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
    .header-description{
        padding: 160px;
        background-color: #8a8b1e;
        background-image: url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fms-my.facebook.com%2Fpages%2Fcategory%2FSchool%2FPatmos-Montessori-School-Uthiru-613692795819360%2F&psig=AOvVaw393FjUBQMqesdyR3kopD88&ust=1675537770760000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMikveGG-vwCFQAAAAAdAAAAABAb");
    }
    .heading-primary{
        animation-name: moveFromLeft;
        animation-duration: 3s;
    }
    .heading-secondary{
        animation-name: moveFromRight;
        animation-duration: 3s;
    }
    @keyframes moveFromLeft {

        0%{
            opacity: 0;
            transform: translateX(-100px);
        }
        80%{

        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }

    }
    @keyframes moveFromRight {
        0%{
            opacity: 0;
            transform: translateX(100px);
        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }


    }
    .btn{
        transition: all .2s ease-in;
        position: relative;
    }
    .btn::after{
        content: "";
        width: 100%;
        height: 100%;
        display: inline-block;
        position: absolute;
        border-radius: 10px;
        background-color: #ffc107;
        top: 0;
        left: 0;
        transition: all .2s;
        z-index: -1;

    }
    .btn:hover{

        transform: translateY(-5px);
        box-shadow: 0 5px 10px #3d3d3d;


    }
    .btn:hover::after{
        transform: scaleX(1.5);
        opacity: 0;
    }
    @media (max-width: 480px) {
        .header-description{
            padding-left:0;
            padding-top: 0;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            display: inline-block;
            padding-right: 24px;

            /* font-size: 0px; */
        }
        .header-description h1{
            margin-top: 70px;
            margin-left: 3px;
            font-size: 30px;
            text-align: center;
            /* padding-left: 14px; */
            white-space: normal;
        }

        .header-description p{
            font-size: 16px;
            white-space: normal;

        }
        .carousel{
            margin-top: 2rem;
            height: auto;
            font-size: 19px;

        }
        .carousel-item{
            position: relative;
        }
         .carousel-caption{

            position: absolute;
             top: 0;

        }
        .btn{

            text-align: center;
        }


        .description{
            /* text-align: center; */
            margin-left: 1.7em;
            line-height: 1;
        }
        .text-dark{
            line-height: 1.1;
            font-size: 24px;
        }

    }
    .carousel{
        z-index: -1;
    }
    .carousel .carousel-item{
        width: 100vw;
        max-height: 50rem ;


    }
    .carousel-caption{
        margin-bottom: 15rem;
    }



</style>