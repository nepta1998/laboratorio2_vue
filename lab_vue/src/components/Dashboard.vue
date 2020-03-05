<template>
  <v-app id="inspire">
    <Drawer/>
    <!-- <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>DashBoard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-grid</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Tablas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-app-bar
            app
            clipped-left
    >
      <v-app-bar-nav-icon @click.stop/>
      <v-toolbar-title>{{Title}}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
              class="fill-height"
              fluid
      >
        <v-row
                align="center"
                justify="center"
        >
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
      source: String,
      Title:String
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark= true
    },
  }
</script>
