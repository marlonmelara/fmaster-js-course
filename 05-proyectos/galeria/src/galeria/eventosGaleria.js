// Importar la función 'cerrarGaleria' desde el módulo 'cerrarGaleria'.
import cerrarGaleria from "./cerrarGaleria";

// Obtener el elemento del DOM con el id 'galeria'.
const galeria = document.getElementById("galeria");

// Añadir un manejador de eventos de tipo 'click' al elemento 'galeria'.
galeria.addEventListener("click", (e) => {
  // Intentar encontrar el elemento 'button' más cercano al lugar donde ocurrió el evento 'click'.
  // Esto es útil si hay varios botones o elementos interactivos dentro de la galería y se quiere
  // asegurar de reaccionar solo al botón correcto.
  const boton = e.target.closest("button");

  // Comprobar si el botón existe y tiene un atributo de 'data-accion' con el valor 'cerrar-galeria'.
  // El operador opcional '?' asegura que no se produzca un error si 'boton' es null o undefined.
  if (boton?.dataset?.accion === "cerrar-galeria") {
    // Si la condición se cumple, se llama a la función 'cerrarGaleria' importada anteriormente.
    cerrarGaleria();
  }
});
