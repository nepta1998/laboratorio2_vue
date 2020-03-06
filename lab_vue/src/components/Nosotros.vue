<template>
  <dashboard title="Sobre nosotros">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row dense align="center" justify="center">
          <h1 class="display-4 font-weight-bold">
            Team Cyberpunk
          </h1>
        </v-row>
        <v-row dense align="center" justify="center">
          <v-col v-for="(item, i) in items" :key="i">
              <v-card
                      class="mx-auto"
                      max-width="300"
                      :color="item.color"
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="headline" v-text="item.nombre"></v-card-title>

                    <v-card-subtitle v-text="item.cedula"></v-card-subtitle>
                  </div>
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
  name: "Nosotros",
  created() {
    this.$vuetify.theme.dark = true;
  },
  components: {  Dashboard },
  data:()=>({
    items:[
      {
        color: '#2e3ebe',
        nombre: 'Neptalí Piña',
        cedula: '26.136.058',
      },
      {
        color: '#41a20c',
        nombre: 'Dany Karam',
        cedula: '',
      },
      {
        color: '#87602e',
        nombre: 'José Pacheco',
        cedula: '',
      },
      {
        color: '#661687',
        nombre: 'Anyeli Villarreal',
        cedula: '',
      },
    ]
  }),
};
</script>