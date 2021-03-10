
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
