<template>
  <v-navigation-drawer  app clipped>
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://logosea.s3.eu-west-3.amazonaws.com/php/imagebrowser/L000042.png" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Smith Corporations</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-group
              value="true"
              prepend-icon="mdi-briefcase"
      >
        <v-list-item-title slot="activator">
          <v-list-item-title>Proyecto</v-list-item-title>
        </v-list-item-title>
        <v-list-item v-for="item in items" :key="item.title" :to = "item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-home", link: "/dash" },
        { title: "Tablas", icon: "mdi-table", link: "/table" },
        { title: "Música", icon: "mdi-music", link: "/musica" },
        { title: "Sobre nosotros", icon: "mdi-account-group-outline", link: "/nosotros"  }
      ]
    };
  }
};
</script>