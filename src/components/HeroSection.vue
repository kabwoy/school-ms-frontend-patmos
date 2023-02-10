<template>
    <div class="header-description mh-100 vw-100  bg-dark">
        <h1 class="text-white px-4">Welcome To Patmos Montisorry primary</h1>
        <div class="description">
            <p>We give the best education quality across the sub sahara of east africa.join us tody
                inorder to shape the future of your child.foward ever backward never,
                Lorem ipsum dolor sit amet consectetur adipisicing epraesentium fugit, nihil.
            </p>
            <a href="" class="btn btn-warning mx-4">Register With Us</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeroSection"
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
    .header-description{
        padding: 160px;
        background-image: url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fms-my.facebook.com%2Fpages%2Fcategory%2FSchool%2FPatmos-Montessori-School-Uthiru-613692795819360%2F&psig=AOvVaw393FjUBQMqesdyR3kopD88&ust=1675537770760000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMikveGG-vwCFQAAAAAdAAAAABAb");
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

</style>