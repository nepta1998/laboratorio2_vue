<template>
  <dashboard title="Tablas">
    
  </dashboard>
</template>

<script>
import Dashboard from "../components/Dashboard";
export default {
  name: "Tablas",
  created() {
    this.$vuetify.theme.dark = true;
  },
  components: { Dashboard }
};
</script>