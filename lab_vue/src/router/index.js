import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Principal from '../components/Principal.vue'
import Tablas from '../components/Tablas.vue'
import Musica from '../components/Musica.vue'
import Nosotros from '../components/Nosotros.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dash',
    name: 'Dash',
    component: Principal
  },
  {
    path: '/table',
    name: 'Tablas',
    component: Tablas
  },
  {
    path: '/musica',
    name: 'Musica',
    component: Musica
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
