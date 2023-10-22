/*
 * 📌 Operador Spread
 * -Permite tomar los elementos de un arrelgo u objeto y expandirlos en otro sitio.
 */

const frutas = ["manzana", "pera", "uvas", "piña"];
const comidaFavorita = ["pizza", "hamburguesa", ...frutas];
console.log(comidaFavorita);

const datosLogin = {
  correo: "correo@correo.com",
  password: "123elm4s5egur0",
};

const usuario = {
  nombre: "Charlie",
  ...datosLogin,
  edad: 9,
};

console.log(usuario);
