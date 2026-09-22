<template>
  <div class="app">
    <nav class="nav">
      <router-link to="/" class="link">Inicio</router-link>
      <router-link to="/libros" class="link">Libros</router-link>
    </nav>
    <main class="contenido">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body { font-family: system-ui, sans-serif; background: #f5f6f8; margin: 0; display: flex; justify-content: center; padding: 30px 16px; }
.app { background: #fff; border-radius: 10px; max-width: 520px; width: 100%; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); overflow: hidden; }
.nav { display: flex; gap: 16px; padding: 14px 24px; border-bottom: 1px solid #eee; background: #101010; }
.nav .link { color: #ccc; text-decoration: none; font-weight: 600; font-size: 14px; }
.nav .link:hover, .nav .router-link-exact-active { color: #fff; }
.contenido { padding: 24px; }
</style>
