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