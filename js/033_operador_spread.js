console.log("**** Operador Spread ****");

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

console.log("**** Parámetro Rest ****");

/*
 * 📌 Parámetro Rest (...)
 * - Permite que una función acepte un número indefinido de argumentos.
 * - Los argumentos extra que recibe la función se agrupan en un arreglo.
 * - Se denota mediante tres puntos (...) seguidos del nombre que queremos para el arreglo.
 */

// Definimos una función que recibe un nombre, un correo y cualquier cantidad de datos adicionales.
const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
  // Imprimimos el nombre, correo y los datos adicionales.
  console.log(nombre, correo, datosAdicionales);
};

// Llamamos a la función con 2 argumentos. No hay datos adicionales, por lo que 'datosAdicionales' será un arreglo vacío.
registrarUsuario("Charlie", "charlie@correo.com"); // salida: Charlie charlie@correo.com []

// Llamamos a la función con 4 argumentos. Los dos argumentos extra se agrupan en el arreglo 'datosAdicionales'.
registrarUsuario("Snoopy", "snoopy@correo.com", 4, "US"); // salida: Snoopy snoopy@correo.com [4, 'US']

/*
 * En el primer llamado a 'registrarUsuario', solo se pasan dos argumentos, por lo que 'datosAdicionales' es un arreglo vacío.
 * En el segundo llamado, se pasan cuatro argumentos. Los dos últimos argumentos se agrupan en el arreglo 'datosAdicionales'.
 * Esto demuestra cómo el parámetro Rest permite manejar una cantidad flexible de argumentos en una función.
 */
