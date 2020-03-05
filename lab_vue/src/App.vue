<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Principal from './components/Principal';

export default {
  name: 'App',

  components: {
    Principal,
  },

  data: () => ({
    //
  }),
};
</script>
