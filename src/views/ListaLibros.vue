<template>
  <div class="lista-libros">
    <h2>Catálogo de libros</h2>

    <form class="formulario" @submit.prevent="onAgregar">
      <input v-model="nuevo.titulo" type="text" placeholder="Título del libro" @keyup.enter="onAgregar" />
      <input v-model="nuevo.autor" type="text" placeholder="Autor" @keyup.enter="onAgregar" />
      <select v-model="nuevo.categoria">
        <option value="Novela">Novela</option>
        <option value="Cuento">Cuento</option>
        <option value="Memoria">Memoria</option>
        <option value="Poesía">Poesía</option>
      </select>
      <textarea v-model="nuevo.notas" rows="2" placeholder="Notas o descripción breve (opcional)"></textarea>

      <p v-if="mostrarAyuda" class="ayuda" @click.once="mostrarAyuda = false">
        Completa título y autor, luego presiona Enter o el botón para añadir. (clic aquí para ocultar esta ayuda)
      </p>

      <button type="submit">Añadir libro</button>
    </form>

    <p v-if="libros.length === 0" class="vacio">
      Aún no hay libros en el catálogo. ¡Añade el primero arriba!
    </p>

    <ul v-else class="lista">
      <LibroItem v-for="libro in libros" :key="libro.id" :libro="libro" @eliminar="onEliminar" />
    </ul>
  </div>
</template>

<script>
import LibroItem from '../components/LibroItem.vue';
import estado, { agregarLibro, eliminarLibro } from '../store/libros.js';

export default {
  name: 'ListaLibros',
  components: { LibroItem },
  data() {
    return {
      estado,
      nuevo: { titulo: '', autor: '', categoria: 'Novela', notas: '' },
      mostrarAyuda: true
    };
  },
  computed: {
    libros() {
      return this.estado.libros;
    }
  },
  methods: {
    onAgregar() {
      if (!this.nuevo.titulo.trim() || !this.nuevo.autor.trim()) return;
      agregarLibro({ ...this.nuevo });
      this.nuevo = { titulo: '', autor: '', categoria: 'Novela', notas: '' };
    },
    onEliminar(id) {
      eliminarLibro(id);
    }
  }
};
</script>

<style scoped>
h2 { font-size: 18px; margin: 0 0 16px 0; }
.formulario { display: flex; flex-direction: column; gap: 8px; background: #fafafa; border: 1px solid #e5e7eb; border-radius: 8px; padding: 14px; margin-bottom: 20px; }
.formulario input, .formulario select, .formulario textarea { padding: 8px 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 13px; font-family: inherit; }
.formulario button { background: #4f46e5; color: #fff; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 13px; align-self: flex-start; }
.formulario button:hover { background: #4338ca; }
.ayuda { font-size: 12px; color: #888; margin: 0; cursor: pointer; }
.vacio { color: #888; font-size: 13px; }
.lista { list-style: none; padding: 0; margin: 0; }
</style>
