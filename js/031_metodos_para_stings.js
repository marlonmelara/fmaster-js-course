console.log("**** Propiedad .length ****");
/* Propiedad
 * 📌 .length
 * - Devuelve el número de caracteres de una cadena de texto.
 */

const texto = "¡Hola mundo!";
console.log(texto.length);

console.log("**** Método .indexOf() .lastIndexOf() ****");
/*
 * 📌 .slice(start, end)
 * - Extrae una sección de una cadena y devuelve una nueva cadena sin modificar la cadena original.
 * - 'start': El índice base cero en el que comienza la extracción.
 * - 'end': (Opcional) El índice base cero antes del cual terminar la extracción.
 */

const resultado = texto.slice(1, 5);
console.log(resultado); // Output: Hola

console.log("**** Método .slice() ****");

/*
 * 📌 .slice()
 * - El método .slice() es usado para extraer una sección de una cadena de texto sin modificar la cadena original.
 * - Devuelve una nueva cadena de texto que contiene los caracteres de la cadena original desde el índice proporcionado
 *   en el primer parámetro hasta el índice proporcionado en el segundo parámetro (no incluido).
 * - 1er parámetro (obligatorio): El índice desde donde queremos empezar a cortar.
 * - 2do parámetro (opcional): El índice hasta donde queremos cortar (este índice no se incluye en el resultado).
 *   Si se omite este parámetro, se extraerá hasta el final de la cadena.
 */

// Encuentra el índice de la letra 'm' en la cadena 'texto'
const index = texto.indexOf("m");

// Encuentra el último índice de la letra 'o' en la cadena 'texto'
const lastIndex = texto.lastIndexOf("o");

// Usa .slice() para cortar la cadena desde el índice de 'm' hasta el índice de 'o' + 1
// El +1 es necesario porque el segundo parámetro del método .slice() no se incluye en el resultado.
// Así que al agregar +1, estamos incluyendo la letra 'o' en la nueva cadena.
console.log(texto.slice(index, lastIndex + 1)); // salida: "mundo"
