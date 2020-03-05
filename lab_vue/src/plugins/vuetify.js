import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
        dark:true,
      },
    themes: {
      dark: {
        primary: '#4CAF50',
        secondary: '#9C27b0',
        accent: '#9C27b0',
        info: '#00CAE3',
      },
    },
  },
});
