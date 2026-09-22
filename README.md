BookList SPA – Gestor de Libros con Vue.js
Evaluación Módulo 6 — Editorial Nova (hecho con Vue CLI)
Repositorio: https://github.com/jaimejalvaradov/booklistlista-de-libros
Qué se hizo
●	App.vue con navegación entre pantallas (Inicio / Libros).
●	Un componente por cada libro (LibroItem), que se reutiliza tantas veces como libros haya.
●	Un formulario con casillas de texto, una lista desplegable y un cuadro de notas, todo conectado en tiempo real a los datos (v-model).
●	Botones que agregan o borran libros, y también se puede agregar apretando Enter.
●	Navegación entre 3 pantallas con Vue Router: Inicio, Catálogo, y el Detalle de cada libro.
●	El proyecto se armó con Vue CLI (en vez de Vite), tal como lo pidió la profesora.
Cómo funciona por dentro (MVVM)
Los datos de los libros se guardan en un solo lugar central. Cada pantalla los muestra en su HTML. Y Vue se encarga de mantener ambas cosas sincronizadas solas: cuando se agrega o borra un libro, la pantalla se actualiza automáticamente, sin tener que escribir código para "buscar y cambiar" cada parte a mano.
Decisiones tomadas
Se puso la lista de libros en un solo archivo compartido, para que todas las pantallas vean siempre los mismos datos al moverse entre ellas. Se usó Vue Router (en vez de todo en una sola pantalla) porque la consigna pedía al menos 3 vistas con navegación real entre ellas.
Capturas
[Agregar aquí capturas de la app funcionando: Inicio, catálogo, formulario y detalle de un libro.]
