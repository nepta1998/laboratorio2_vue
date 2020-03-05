<template>
    <v-card height="350px">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
        <template v-slot:prepend>
            <v-list-item two-line>
            <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/women/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>Smith Corporations</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item
            v-for="item in items"
            :key="item.title"
            @click=""
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-home' },
          { title: 'Tablas', icon: 'mdi-table' },
          { title: 'Sobre nosotros', icon: 'mdi-account-group-outline' },
        ],
      }
    },
  }
</script>