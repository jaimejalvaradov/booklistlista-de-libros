import { reactive } from 'vue';

const estado = reactive({
  libros: [
    { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', categoria: 'Novela', notas: 'Referente del realismo mágico.' },
    { id: 2, titulo: 'La casa de los espíritus', autor: 'Isabel Allende', categoria: 'Novela', notas: 'Saga familiar chilena.' },
    { id: 3, titulo: 'Ficciones', autor: 'Jorge Luis Borges', categoria: 'Cuento', notas: 'Relatos breves y laberínticos.' }
  ],
  siguienteId: 4
});

export function agregarLibro({ titulo, autor, categoria, notas }) {
  estado.libros.push({
    id: estado.siguienteId++,
    titulo,
    autor,
    categoria,
    notas
  });
}

export function eliminarLibro(id) {
  const index = estado.libros.findIndex((libro) => libro.id === id);
  if (index !== -1) estado.libros.splice(index, 1);
}

export function buscarLibroPorId(id) {
  return estado.libros.find((libro) => libro.id === Number(id));
}

export default estado;
