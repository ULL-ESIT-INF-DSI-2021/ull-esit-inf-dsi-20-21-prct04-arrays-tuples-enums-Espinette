/**
 * __Funcion para mover los ceros de un array al final__
 * @param array Array de numeros
 * @returns El array con los 0 al final del array
 * ```TypeScript
 * moveZeros([1, 0, 1, 2, 0, 1, 3]) -> [1, 1, 2, 1, 3, 0, 0]
 * ```
 */
export function moveZeros(array: number[]) {
  let aux: number = 0;
  array.forEach((numero) => {
    let pos: number = array.indexOf(numero);
    if (numero == 0) {
      while (pos + 1 < array.length) {
        aux = array[pos];
        array[pos] = array[pos + 1];
        array[pos + 1] = aux;
        pos++;
      }
    }
  });
  return array;
}
