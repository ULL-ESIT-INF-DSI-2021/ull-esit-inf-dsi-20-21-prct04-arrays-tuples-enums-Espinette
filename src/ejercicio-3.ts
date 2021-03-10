/**
 * __Funcion que calcula la media de valores numericos y una cadena de la concatenacion de caracteres__
 * @param array Array de entrada con números o letras
 * @returns Un array donde el primer valor es la media de los valores numericos y en el segundo la concatenacion de todos los caracteres
 * ```TypeScript
 * meanAndConcatenate([`h`, `o`, 5, `l`, 10, 7, `a`, 2]) -> [6, `hola`]
 * ```
 */
export function meanAndConcatenate(array: (string|number)[]) {
  let media: number = 0;
  let cont: number = 0;
  let palabra: string = ``;
  const solucion: (string|number)[] = [];
  array.forEach((element) => {
    if (typeof element === "number") {
      media = media + element;
      cont++;
    } else {
      palabra = palabra + element;
    }
  });
  media = media / cont;
  solucion[0] = media;
  solucion[1] = palabra;
  return solucion;
}
