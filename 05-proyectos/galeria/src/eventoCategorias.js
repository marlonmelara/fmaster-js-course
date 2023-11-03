// Se obtiene el contenedor de las categorías del DOM y se almacena en la constante contenedorCategorias.
const contenedorCategorias = document.getElementById("categorias");
// Se obtiene el elemento que representa la galería del DOM y se almacena en la constante galeria.
const galeria = document.getElementById("galeria");

// Se añade un listener de evento de clic al contenedor de categorías.
contenedorCategorias.addEventListener("click", (e) => {
  // Se evita el comportamiento por defecto de los enlaces, evitando que la página navegue al hacer clic.
  e.preventDefault();

  // Se verifica si el clic ocurrió dentro de un enlace (elemento <a>) utilizando el método closest.
  if (e.target.closest("a")) {
    // Si el clic fue dentro de un enlace, se añade la clase 'galeria--active' al elemento galeria.
    galeria.classList.add("galeria--active");
    // Se establece el estilo de overflow del cuerpo del documento a "hidden" para evitar el desplazamiento del fondo.
    document.body.style.overflow = "hidden";
  }
});
