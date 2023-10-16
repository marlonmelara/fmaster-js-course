const colores = ["rojo", "verde", "azul"];

/* .length
 * (propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
 */

console.log(`Tengo ${colores.length} colores almacenados en el array`);

/* .toString
 * - Nos permite transformar un arreglo a una cadena de texto.
 * - Por ejemplo, para poder mostrarlo en el navegador.
 */

document.body.innerHTML = colores.toString();

/* .join()
 * - Nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
 */

console.log(colores.join("- -"));

/* .sort()
 * - Nos permite ordenar un arreglo en orden ascendente (números o letras).
 */

const letras = ["c", "b", "d", "a"];
const numeros = [3, 2, 0, 1, -1];

console.log(colores.sort());
console.log(letras.sort());
console.log(numeros.sort());

/* .reverse()
 * - Nos permite ordenar un arreglo en orden descendende.
 */

console.log(numeros.reverse());

/* .concat()
 * - Nos permite concatenar arreglos en uno solo.
 */

const arregloConcat = letras.concat(numeros);
console.log(arregloConcat);

/* .push()
 * - Nos permite agregar un elemento al final de un arreglo.
 */

colores.push("amarillo");
console.log(colores);

/* .pop()
 * - Nos permite eliminar el último elemento de un arreglo.
 */

colores.pop("amarillo");
console.log(colores);
