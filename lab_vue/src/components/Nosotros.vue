<template>
  <dashboard title="Sobre nosotros">
    
  </dashboard>
</template>

<script>
import Dashboard from "../components/Dashboard";
export default {
  name: "Nosotros",
  created() {
    this.$vuetify.theme.dark = true;
  },
  components: {  Dashboard }
};
</script>