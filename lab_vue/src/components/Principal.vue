<template>
<dashboard title="Dashboard">
    <Graficos></Graficos>
</dashboard>

    
</template>

<script>
    import Dashboard from "../components/Dashboard";
    import Graficos from "../components/Graficos";
    export default {
        name: "PrincipalDash",
        components: {Graficos, Dashboard}
    }
</script>

<style scoped>

</style>
