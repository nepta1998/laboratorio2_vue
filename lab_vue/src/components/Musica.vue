<template>
  <dashboard title="Música">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row dense align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card color="#1300FF" dark>
              <v-card-title class="headline">Unlimited music now</v-card-title>

              <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

              <v-card-actions>
                <v-btn text>Listen Now</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col v-for="(item, i) in items" :key="i" cols="12" sm="8" md="4">
            <v-card :color="item.color" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="headline" v-text="item.title"></v-card-title>

                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                </div>

                <v-avatar class="ma-3" size="125" tile>
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

  </dashboard>
</template>

<script>
import Dashboard from "../components/Dashboard";
export default {
  name: "Musica",

  created() {
    this.$vuetify.theme.dark = true;
  },
  components: { Dashboard },
  data: () => ({
    items: [
      {
        color: '#1F7087',
        src: require("../assets/foster.jpg"),
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: '#952175',
        src: require("../assets/halcyon.png"),
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
  }),
};
</script>