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
 * 📌 Object.keys();
 * Nos devuelve un arreglo con las llaves (keys) del objecto.
 */

const resultadosPropiedades = Object.keys(usuario);
console.log(resultadosPropiedades);

/*
 * 📌 Object.values();
 * Nos devuelve un arreglo con las valores (values) del objecto.
 */

const resultadosValues = Object.values(usuario);
console.log(resultadosValues);
