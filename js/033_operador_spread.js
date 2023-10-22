/*
 * 📌 Operador Spread (...)
 * - Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
 * - Es útil para combinar arreglos u objetos, o para pasar elementos como argumentos a una función.
 */

// Ejemplo con arreglos:
const frutas = ["manzana", "pera", "uvas", "piña"];
// Aquí estamos combinando dos arreglos: uno que tiene comidas y otro que tiene frutas.
// El operador spread (...) toma cada elemento del arreglo 'frutas' y lo coloca en el nuevo arreglo 'comidaFavorita'.
const comidaFavorita = ["pizza", "hamburguesa", ...frutas];
console.log(comidaFavorita); // salida: ["pizza", "hamburguesa", "manzana", "pera", "uvas", "piña"]

// Ejemplo con objetos:
const datosLogin = {
  edad: 10,
  correo: "correo@correo.com",
  password: "123elm4s5egur0",
};

// Aquí estamos combinando las propiedades del objeto 'datosLogin' dentro del nuevo objeto 'usuario'.
// El operador spread (...) toma cada propiedad del objeto 'datosLogin' y la coloca en el nuevo objeto 'usuario'.
// Nota: Si hay propiedades con el mismo nombre, el valor de la última propiedad sobrescribirá a la anterior.
// En este caso, la propiedad 'edad' del objeto 'datosLogin' sobrescribirá la propiedad 'edad' del objeto 'usuario'.
const usuario = {
  nombre: "Charlie",
  edad: 9,
  ...datosLogin,
};

console.log(usuario); // salida: { nombre: "Charlie", edad: 10, correo: "correo@correo.com", password: "123elm4s5egur0" }
