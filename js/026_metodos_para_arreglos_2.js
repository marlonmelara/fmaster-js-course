/* .indexOf()
 * - Obtener el primer index de un elemento
 * - Si no hau elemento nos retorna -1
 */

const nombres = [
  "Charlie",
  "Snoppy",
  "Woodstock",
  "Lucy",
  "Sally",
  "Linus",
  "Patty",
  "Marcie",
  "Snoppy",
  "Schroeder",
  "Franklin",
];

console.log(`Su número de indice es ${nombres.indexOf("Snoppy")}`);

/* .lastIndexOf()
 * - Obtenemos el último index de un elemento
 */

const obtenerIndice = (nombre) => {
  const indice = nombres.lastIndexOf(nombre);
  // Si el índice es -1, significa que el nombre no se encontró en el array
  if (indice !== -1) {
    console.log(`El número de índice de ${nombre} es ${indice}`);
  } else {
    console.log(`${nombre} no se encontró en el array.`);
  }
};

// Llamada a la función obtenerIndice con "Snoppy" como argumento
obtenerIndice("lufy");

/* .forEach()
 * - Nos permite ejecutar una funcion por cada elemento
 */

nombres.forEach((nombre, index) => {
  console.log(`Hola ${nombre} (${index})`);
});
