/**
 * 📌 Ciclo for
 * - Repite un bloque de código mientras cumpla una condición.
 * - Expresión 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
 * - Expresión 2: Una condición, mientras se cumpla se ejecutará el bloque de código.
 * - Expresión 3: Esta expresión se ejecuta siempre y después de que se ejecute el bloque de código.
 *
 * - Cuidado con las condiciones que se agregan para evitar ciclos infinitos
 */

// Ejemplo 1: Imprimir números del 1 al 10
for (
  /* Expresión 1: Inicializa la variable 'numero' con el valor de 1 */
  let numero = 1;
  /* Expresión 2: Verifica si 'numero' es menor que 11, si es verdadero, ejecuta el bloque de código */
  numero < 11;
  /* Expresión 3: Incrementa el valor de 'numero' en 1 después de cada iteración */
  numero++
) {
  /* Bloque de código que se ejecutará: Imprime el valor actual de 'numero' en la consola */
  console.log(numero);
}

// Ejemplo 2: Imprimir números del 0 al 100 en incrementos de 10
for (
  /* Expresión 1: Inicializa la variable 'numero' con el valor de 0 */
  let numero = 0;
  /* Expresión 2: Verifica si 'numero' es menor o igual a 100, si es verdadero, ejecuta el bloque de código */
  numero <= 100;
  /* Expresión 3: Incrementa el valor de 'numero' en 10 después de cada iteración */
  numero = numero + 10
) {
  /* Bloque de código que se ejecutará: Imprime el valor actual de 'numero' en la consola */
  console.log(numero);
}

// Ejemplo 3: Imprimir números del 50 al 0 en decrementos de 10
for (
  /* Expresión 1: Inicializa la variable 'numero' con el valor de 50 */
  let numero = 50;
  /* Expresión 2: Verifica si 'numero' es mayor o igual a 0, si es verdadero, ejecuta el bloque de código */
  numero >= 0;
  /* Expresión 3: Decrementa el valor de 'numero' en 10 después de cada iteración */
  numero = numero - 10
) {
  /* Bloque de código que se ejecutará: Imprime el valor actual de 'numero' en la consola */
  console.log(numero);
}

// Ejemplo 4: Recorriendo un array para obtener su contenido
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
  123,
];

for (
  /* Expresión 1: Inicializa la variable 'i' con el valor de 0 */
  let i = 0;
  /* Expresión 2: Verifica si 'i' es menor que la longitud del array 'nombres', si es verdadero, ejecuta el bloque de código */
  i < nombres.length;
  /* Expresión 3: Incrementa el valor de 'i' en 1 después de cada iteración */
  i++
) {
  /* Bloque de código que se ejecutará: Imprime el elemento actual del array 'nombres' en la consola */
  console.log(nombres[i]);
}

/**
 * La estructura 'for' es muy útil para ejecutar código repetitivamente bajo una condición específica,
 * permitiendo operaciones como recorrer arreglos, imprimir series numéricas, entre otros.
 */
