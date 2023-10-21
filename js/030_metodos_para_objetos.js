const usuario = {
  nombre: "Charlie",
  edad: 27,
  amigos: ["Snoopy", "Lucy", "Linus", 1, true],
  saludo: () => {
    console.log("¡Hola amigos!");
  },
};

/*
 * 📌 Métodos propios
 * Los objetos pueden tener métodos personalizados.
 */

usuario.saludo();

/*
 * 📌 Object.keys
 * Nos devuelve un arreglo con las llaves (keys) del objecto.
 */
