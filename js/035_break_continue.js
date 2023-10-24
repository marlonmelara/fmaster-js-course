/*
 * 📌 Break
 * La sentencia break nos sirve para salir de bloques de tipo Switch.
 * Pero también nos sirve para forzar la salida de un ciclo.
 *
 */

const nombres = [
  "Arturo",
  "Andres",
  "Alejandro",
  "Adrian",
  "Antonio",
  "Ana",
  "Roberto",
  "Angela",
  "Alejandra",
];

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i][0] !== "A") {
    console.log("Alto! Hay un nombre que no empieza por la letra A");
    console.log(`${nombres[i]} no empieza por la letra A`);
    break;
  }

  console.log(nombres[i]);
}

/*
 * 📌 Continue
 * La sentencia break nos sirve para saltar a la siguiente iteración.
 *
 */

const jugadores = [
  "Charlie",
  "Snoppy",
  "Woodstock",
  "Lucy",
  "Sally",
  "Linus",
  "Patty",
  "Marcie",
  "Schroeder",
  "Franklin",
];

console.log("Lista de integrantes del equipo de baseball:");

for (let i = 0; i < jugadores.length; i++) {
  if (jugadores[i] === "Marcie") {
    continue;
  }
  console.log(jugadores[i]);
}
