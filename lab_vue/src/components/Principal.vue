<template>
  <dashboard title="Dashboard">
    <Graficos/>
  </dashboard>
</template>

<script>
import Dashboard from "../components/Dashboard";
import Graficos from "../components/Graficos";
export default {
  name: "Principal",
  created() {
    this.$vuetify.theme.dark = true;
  },
  components: { Graficos, Dashboard }
};
</script>

<style scoped>
</style>
