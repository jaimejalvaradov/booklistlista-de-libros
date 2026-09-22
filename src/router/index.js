import { createRouter, createWebHistory } from 'vue-router';
import InicioView from '../views/InicioView.vue';
import ListaLibros from '../views/ListaLibros.vue';
import DetalleLibro from '../views/DetalleLibro.vue';

const routes = [
  { path: '/', name: 'inicio', component: InicioView },
  { path: '/libros', name: 'libros', component: ListaLibros },
  {
    path: '/libros/:id',
    name: 'detalle-libro',
    component: DetalleLibro,
    props: true
  }
];

// process.env.BASE_URL es la variable que usa Vue CLI (en vez de import.meta.env de Vite)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
