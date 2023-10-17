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



const nombreIndice = (nombre) => {
  nombres.lastIndexOf(nombre);
}
  
  nombreIndice("Snoppy")
  
console.log(`Su número de indice de ${nombreIndice} es ${nombres.lastIndexOf("Snoppy")}`);
