<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import HelloWorld from './components/Principal';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
