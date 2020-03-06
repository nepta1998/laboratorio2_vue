<template>
<dashboard title="Tablas">
  <v-data-table
    :headers="headers"
    :items="students"
    :search="search"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar >
        <v-toolbar-title>Estudiantes</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        
         <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
        <v-spacer></v-spacer>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Nuevo Estudiante</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Nombre"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.id" label="Cédula"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.subject" label="Asignatura"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.semester" label="Semestre"></v-text-field>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
   </dashboard>
</template>

<script>
import Dashboard from "../components/Dashboard";
  export default {
      name: "Tablas",
       components: { Dashboard },
    data: () => ({
      search: '',
      dialog: false,
      headers: [
        {
          text: 'Nombre',
          align: 'start',
          //sortable: false,
          value: 'name',
        },
        { text: 'Cédula', value: 'id' },
        { text: 'Asignatura', value: 'subject' },
        { text: 'Semestre', value: 'semester' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      students: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        id: '',
        subject: '',
        semester: '',
      },
      defaultItem: {
        name: '',
        id: '',
        subject: '',
        semester: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Estudiante' : 'Editar Estudiante'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
      this.$vuetify.theme.dark = true;
    },

    methods: {
      initialize () {
        this.students = [
          {
            name: 'Anyeli Villarreal',
            id: 26002905,
            subject: 'Laboratorio II',
            semester: 8,
          },
          {
            name: 'Dany Karam',
            id: 25147670,
            subject: 'Laboratorio II',
            semester: 8,
          },
          {
            name: 'José Pacheco',
            id: 26169922,
            subject: 'Laboratorio II',
            semester: 8,
          },
          {
            name: 'Neptalí Piña',
            id: 26136058,
            subject: 'Laboratorio II',
            semester: 8,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.students.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.students.indexOf(item)
        confirm('¿Está seguro que desea eliminar el estudiante?') && this.students.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.students[this.editedIndex], this.editedItem)
        } else {
          this.students.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>