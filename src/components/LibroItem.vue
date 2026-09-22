<template>
  <li class="libro">
    <div class="lomo" :style="{ background: colorPorCategoria }"></div>
    <div class="info">
      <router-link :to="`/libros/${libro.id}`" class="titulo">
        {{ libro.titulo }}
      </router-link>
      <p class="autor">{{ libro.autor }}</p>
      <span class="categoria">{{ libro.categoria }}</span>
    </div>
    <button class="borrar" @click="$emit('eliminar', libro.id)" title="Eliminar libro">
      Eliminar
    </button>
  </li>
</template>

<script>
export default {
  name: 'LibroItem',
  props: {
    libro: { type: Object, required: true }
  },
  emits: ['eliminar'],
  computed: {
    colorPorCategoria() {
      const colores = {
        Novela: '#4f46e5',
        Cuento: '#10b981',
        Memoria: '#f59e0b',
        Poesía: '#ec4899'
      };
      return colores[this.libro.categoria] || '#9ca3af';
    }
  }
};
</script>

<style scoped>
.libro {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  border-radius: 8px;
  padding: 12px 14px;
  margin-bottom: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  list-style: none;
}
.lomo { width: 8px; height: 36px; border-radius: 3px; flex-shrink: 0; }
.info { flex: 1; min-width: 0; }
.titulo { font-weight: 600; font-size: 14px; color: #101010; text-decoration: none; display: block; }
.titulo:hover { text-decoration: underline; }
.autor { margin: 2px 0; font-size: 13px; color: #555; }
.categoria { font-size: 11px; color: #4f46e5; font-weight: 600; }
.borrar { background: transparent; border: 1px solid #e5e7eb; color: #888; padding: 6px 10px; border-radius: 6px; cursor: pointer; font-size: 12px; flex-shrink: 0; }
.borrar:hover { background: #fde8ea; color: #c0392b; border-color: #fde8ea; }
</style>
