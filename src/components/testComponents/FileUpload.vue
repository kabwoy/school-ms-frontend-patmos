<template>
    <form action="">
        <input @change="handlefile" type="file" name="" id="">
    </form>
</template>

<script>
    export default {
        name: "FileUpload",
        methods:{
            handlefile(e){
                const fd = new  FormData()
                fd.append('file' , e.target.files[0])
                console.log(fd)
            }
        }
    }
</script>

<style scoped>

</style>