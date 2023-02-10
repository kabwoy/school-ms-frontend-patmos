<template>
    <div class="parent-nav" :style="{backgroundColor: bgColor}">
        <nav class="parent-nav-flex-container" >
            <h3>{{title}}</h3>
            <div class="nav-links">
                <a href=""><i class="bi bi-house-check"></i>Home</a>
                <router-link :to="link2Href"><i class="bi bi-person-fill-add"></i>{{link2}}</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "SubNav",
        props:['title' , 'link2' , 'link2Href' , 'bgColor']
    }
</script>

<style scoped>
    .parent-nav{
        margin-top: 4rem;
        background-color: #e9ecef;
        padding: 32px;
    }
    .parent-nav-flex-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .parent-nav-flex-container>.nav-links>a{
        margin: 8px;
        text-decoration: none;
        color: #495057;
    }
    .parent-nav-flex-container>.nav-links>a:hover{
        color: #212529;
    }
</style>