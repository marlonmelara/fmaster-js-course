console.log("**** Propiedad .length ****");
/* Propiedad
 * 📌 .length
 * - Devuelve el número de caracteres de una cadena de texto.
 */

const texto = "¡Hola mundo!";
console.log(texto.length);

console.log("**** Método .indexOf() .lastIndexOf() ****");
/*
 * 📌 .indexOf() .lastIndexOf()
 * - Devuelve el index del primer/último caracter especificado.
 */

console.log(texto.indexOf("m"));
console.log(texto.lastIndexOf("o"));

console.log("**** Método .slice() ****");
/*
 * 📌 .slice()
 * - Devuelve un fragmento de una cadena de texto.
 * - 1er parámetro - index desde donde queremos cortar
 * - 2do parámetro (opcional) - index hasta donde queremos cortar
 */

console.log(texto.slice(6));
