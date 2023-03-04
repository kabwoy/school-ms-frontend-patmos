<template>
    <NavBar/>
<!--    <LocationMap/>-->
    <div class="container">
        <div class="contact-details">
            <p class="heading">Contact Us</p>
            <hr>
            <p class="title-heading">Mr XYZ (Headteacher Patmos Montisorry)</p>
            <p class="details"><i class="bi bi-telephone"></i> Phone Number:07895695689</p>
            <p class="details"> <i class="bi bi-mailbox"></i> Address:P.O BOX 85765878-457 uthiru</p>
            <p class="details"><i class="bi bi-envelope-at"></i> Email:Pm@gmail.com</p>
            <hr>
            <p class="title-heading">Mrs XYZ (Deputy Headteacher Patmos Montisorry)</p>
            <p class="details"><i class="bi bi-telephone"></i>  Phone Number:07895695689</p>
            <p class="details"><i class="bi bi-mailbox"></i> Email:dm@gmail.com</p>
            <p class="fw-bold contact-heading">Leave us a message,We are always pleased to hear from you</p>
            <form action="">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="form-control">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" id="email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" class="form-control">
                </div>

                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea type="text" id="message" class="form-control"></textarea>
                </div>

                    <button class=" mt-2 btn btn-outline-success">Send</button>

            </form>
<!--            {{$store.state.GradeModule}}-->
        </div>
        <div class="map">
            <p class="fw-bold" style="padding: 0; font-size: 22px; color:#555;">Location</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8621802107396!2d36.70744612710462!3d-1.25438403300298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19e9f713309f%3A0xe81da26ae930807c!2sPatmos%20Montessori%20School!5e0!3m2!1sen!2suk!4v1676367893668!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p class="details mt-2 fw-bolder"><i class="bi bi-geo-alt"></i> We are located near the uthiru dispensary on the uthiru gichagi road👆👆</p>
        </div>
    </div>
    <Footer/>
</template>

<script>
    import NavBar from "./NavBar.vue";
    import LocationMap from "./LocationMap.vue";
    import Footer from "./Footer.vue";
    export default {
        name: "ContactUs",
        components: {Footer, LocationMap, NavBar}
    }
</script>

<style scoped>
    p{

    }
    .heading{
        color: #555;
        font-size: 20px;
        font-weight: bold;
    }
    .container{
        margin-top: 6rem;
        display: flex;
        align-self: center;
        justify-content: space-between;
        /*justify-content: space-around;*/
    }
    .contact-details{
        /*margin: auto;*/
    }
    .title-heading{
        color: black;
        font-size: 20px;
        padding: 0;
    }
    .details{
        color: #555;
        font-size: 18px;
        padding: 0;
    }
.contact-heading{
    padding: 0;
    font-size: 22px;
    color: #db7c32;
}
    @media(max-width: 480px){
        .container{
            flex-direction: column;
            gap: 3rem;
        }
    }

</style>