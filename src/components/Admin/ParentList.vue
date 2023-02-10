<template>
    <SubNav title="Parents List" link2="Add Parent" link2Href="/dash/parent/new" bg-color="#e3fafc"/>
    <div class="container">
    <table class="table table-hover table-bordered .table-striped">
        <thead class="bg-dark text-white">
        <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Contact</th>
            <th scope="col">ID number</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr class="table-primary" v-for="parent of getAllParents">
            <td>{{parent.first_name}}</td>
            <td>{{parent.last_name}}</td>
            <td>{{parent.contact}}</td>
            <td>{{parent.id_number}}</td>
            <td>{{parent.address}}</td>
            <td><div class="btn-group"><a class="btn btn-outline-primary" href=""><i class="bi bi-pen"></i> Edit</a> <a class="btn btn-outline-danger" href=""><i class="bi bi-trash2"></i> Delete</a> </div></td>
        </tr>
        </tbody>
    </table>
    </div>
    {{getAllParents.length}}
</template>

<script>
    import SubNav from "./SubNav.vue";
    export default {
        name: "ParentList",
        components: {SubNav},
        computed:{
          getAllParents(){
              return this.$store.getters.getParentList
          }
        },
        mounted() {
            this.$store.dispatch('fetchParents')
        }
    }
</script>

<style scoped>
.container{
    margin-top: .9rem;
    width: 100vw;
}
</style>