<template>
  <v-app id="inspire">
    <Drawer />

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop />
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <slot></slot>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import Principal from "./Principal";
import Drawer from "./Drawer";
export default {
  components: {
    Principal,
    Drawer
  },
  props: {
    title: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
