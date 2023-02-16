<template>
    <NavBar/>
    <div class="container">
        <h1>Mission , Vision , Values</h1>
        <div class="mission mt-4">
        <h2 class="mission-title">Mission</h2>
        <p class="mission-text">empower, and enable all students to become caring,
            contributing citizens who can succeed in an ever-changing world. Patmos Montisorri
            is committed to focusing on high expectations and individual academic success and to creating a
            community of respect and responsibility</p>
        </div>
        <div class="vision mt-4">
            <h2 class="mission-title">Vision</h2>
            <p class="mission-text">nurturing, safe and professional environment that supports the educational success and social,
                emotional, and physical development of all students. Courses will be academic, engaging, and standards-based,
                with a focus on the learner. All school staff will be highly qualified and caring instructors who are attentive
                to the educational</p>
        </div>

        <div class="values">
            <h2 class="mission-title">Our Values</h2>
            <p class="fw-bold" style="padding-bottom: 0px">Learning</p>
            <ul>
                <li>We will come to school every day, be on time, and be prepared and ready to learn</li>
                <li>We will be responsible for our own academic success by being organized, completing our assignments, and staying updated on grades</li>
                <li>We will do our best to participate fully in class by working with our peers and teachers in order to achieve academic success</li>
            </ul>
            <p class="fw-bold" style="padding-bottom: 0px">Self Development</p>
            <ul>
                <li>We will engage in positive activities that promote healthy relationships while preventing conflicts, fights, and drama</li>
                <li>We will not engage in bullying, harassment, profanity, or any other activities that harm others physically or mentally</li>
                <li>We will promote a safe environment by dressing appropriately and proactively ensuring the safety of our surroundings</li>
            </ul>
            <p class="fw-bold" style="padding-bottom: 0px">Discipline</p>
            <ul>
                <li>We will engage in positive activities that promote healthy relationships while preventing conflicts, fights, and drama</li>
                <li>We will not engage in bullying, harassment, profanity, or any other activities that harm others physically or mentally</li>
                <li>We will promote a safe environment by dressing appropriately and proactively ensuring the safety of our surroundings</li>
            </ul>
        </div>

        <div class="location">
            <div class="contacts">
                <p class="fw-bold">Contacts</p>
                <p>Patmos Montisorry School</p>
                <p class="fw-bold">Contact Us : <span> <i class="bi bi-telephone"></i> 078656534334</span></p>
                <p class="fw-bold">Email Us : <span><i class="bi bi-envelope-at"></i> Patmoske@gmail</span></p>
                <p class="fw-bold">Facebook : <span><i class="bi bi-facebook"></i><a href="https://web.facebook.com/profile.php?id=100054506617600">Facebook</a></span></p>


            </div>
            <div class="map">
                <p class="fw-bold">Location</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8621802107396!2d36.70744612710462!3d-1.25438403300298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19e9f713309f%3A0xe81da26ae930807c!2sPatmos%20Montessori%20School!5e0!3m2!1sen!2suk!4v1676367893668!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>

</template>

<script>
    import MissionVision from './MissionVision.vue'
    import NavBar from "./NavBar.vue";
    export default {
        name: "About.vue",
        components: {NavBar, MissionVision}
    }
</script>

<style scoped>
    p{
        color: #555;
    }
    .container{
        margin-top: 4rem;
        padding: 32px;
    }
.mission-text{

    color: #555;
}
    .mission-title{
        color: #796204;
    }
    ul{
        margin-left: 36px;
    }
    ul>li{
        font-size: 22px;
    }

    @media(max-width: 480px) {
        h1{
            font-size: 25px;
            font-weight: bolder;
        }

        ul{
            padding-left: 16px;
            font-size: 18px;
        }
        .mission-text{
            font-size: 18px;
        }
        ul>li{
            font-size: 18px;
        }
        .location{

            flex-direction: column;
            font-size: 18px;
            width: 100%;
            padding-right: 20rem;

        }
        .location>p{

            font-size: 18px;

        }
        .map > iframe{

            width: 100%;

        }

    }
    .location{
        display: flex;
        justify-content: space-around;
        background-color: #deec6d;
        padding: 24px;
    }
</style>