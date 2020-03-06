<template>
  <dashboard title="Tablas">
    <v-card>
    <v-card-title>
      Cyberpunk
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="students"
      :search="search"
    ></v-data-table>
  </v-card>
  </dashboard>
</template>

<script>
import Dashboard from "../components/Dashboard";
export default {
  name: "Tablas",
  created() {
    this.$vuetify.theme.dark = true;
  },
  components: { Dashboard },
  data () {
      return {
        search: '',
        headers: [
          {
            text: 'Nombre',
            align: 'start',
           // sortable: false,
            value: 'name',
          },
          { text: 'Cédula', value: 'cedula' },
          { text: 'Asignatura', value: 'asignatura' },
          { text: 'Semestre', value: 'semestre' },
        ],
        students: [
          {
            name: 'Anyeli Villarreal',
            cedula: 26002905,
            asignatura: 'Laboratorio II',
            semestre: 8,
          },
          {
            name: 'Dany Karam',
            cedula: 25147670,
            asignatura: 'Laboratorio II',
            semestre: 8,
          },
          {
            name: 'José Pacheco',
            cedula: 26169922,
            asignatura: 'Laboratorio II',
            semestre: 8,
          },
          {
            name: 'Neptalí Piña',
            cedula: 26136058,
            asignatura: 'Laboratorio II',
            semestre: 8,
          },
        ],
      }
    },
};
</script>