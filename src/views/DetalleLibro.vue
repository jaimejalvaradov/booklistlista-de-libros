<template>
  <div class="detalle">
    <router-link to="/libros" class="volver">← Volver al catálogo</router-link>

    <template v-if="libro">
      <h2>{{ libro.titulo }}</h2>
      <p class="autor">de {{ libro.autor }}</p>
      <span class="categoria">{{ libro.categoria }}</span>
      <p class="notas" v-if="libro.notas">{{ libro.notas }}</p>
      <p class="notas vacio" v-else>Este libro no tiene notas todavía.</p>
    </template>

    <p v-else class="no-encontrado">
      No se encontró ningún libro con id "{{ id }}".
    </p>
  </div>
</template>

<script>
import { buscarLibroPorId } from '../store/libros.js';

export default {
  name: 'DetalleLibro',
  props: {
    id: { type: [String, Number], required: true }
  },
  computed: {
    libro() {
      return buscarLibroPorId(this.id);
    }
  }
};
</script>

<style scoped>
.volver { display: inline-block; margin-bottom: 16px; color: #4f46e5; text-decoration: none; font-size: 13px; font-weight: 600; }
.volver:hover { text-decoration: underline; }
h2 { margin: 0 0 4px 0; font-size: 20px; }
.autor { margin: 0 0 8px 0; color: #555; font-size: 14px; }
.categoria { display: inline-block; background: #eef2ff; color: #4f46e5; font-size: 12px; font-weight: 600; padding: 3px 10px; border-radius: 999px; margin-bottom: 14px; }
.notas { font-size: 14px; color: #333; line-height: 1.5; }
.notas.vacio { color: #999; font-style: italic; }
.no-encontrado { color: #c0392b; font-size: 14px; }
</style>
