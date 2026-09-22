<template>
  <div class="inicio">
    <h1>📚 BookList</h1>
    <p class="subtitulo">Gestor de libros de Editorial Nova</p>
    <p class="texto">
      Bienvenido al prototipo de BookList. Aquí podrás ver el catálogo completo,
      añadir nuevos libros y revisar el detalle de cada uno.
    </p>
    <router-link to="/libros" class="boton">Ver catálogo de libros</router-link>
  </div>
</template>

<script>
export default {
  name: 'InicioView'
};
</script>

<style scoped>
.inicio { text-align: center; padding: 20px 0; }
h1 { font-size: 26px; margin: 0 0 4px 0; }
.subtitulo { color: #888; margin: 0 0 20px 0; }
.texto { color: #555; font-size: 14px; margin-bottom: 24px; line-height: 1.5; }
.boton { display: inline-block; background: #4f46e5; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 14px; }
.boton:hover { background: #4338ca; }
</style>
