<template>
    <div class="container">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8621802107396!2d36.70744612710462!3d-1.25438403300298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19e9f713309f%3A0xe81da26ae930807c!2sPatmos%20Montessori%20School!5e0!3m2!1sen!2suk!4v1676367893668!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<script>
    export default {
        name: "LocationMap"
    }
</script>

<style scoped>
    .container{
        padding: 30px;
    }
iframe{
    margin-left: 20rem;
}

    @media(max-width: 480px) {

        iframe{
            margin: 0;
            width: 30rem;
        }
        .container{
            margin: 0;
        }

    }
</style>