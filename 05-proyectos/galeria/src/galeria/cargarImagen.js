// Selecciona el elemento de la galería en el DOM por su ID.
const galeria = document.getElementById("galeria");

/**
 * Función para cargar una imagen y su información en la galería.
 *
 * @param {number} id - El ID único de la imagen.
 * @param {string} nombre - El nombre de la imagen.
 * @param {string} ruta - La ruta de archivo de la imagen.
 * @param {string} descripcion - La descripción de la imagen.
 */
const cargarImagen = (id, nombre, ruta, descripcion) => {
  // Establece el atributo 'src' del elemento de imagen de la galería con la ruta proporcionada.
  galeria.querySelector(".galeria__imagen").src = ruta;
  // Establece un atributo de dato personalizado 'data-id-imagen' con el ID de la imagen.
  galeria.querySelector(".galeria__imagen").dataset.idImagen = id;
  // Actualiza el texto del título de la galería con el nombre proporcionado.
  galeria.querySelector(".galeria__titulo").innerText = nombre;
  // Actualiza el texto de la descripción de la imagen activa con la descripción proporcionada.
  galeria.querySelector(".galeria__descripcion-imagen-activa").innerText =
    descripcion;
};

// Exporta la función cargarImagen para que pueda ser utilizada en otros módulos.
export { cargarImagen };
