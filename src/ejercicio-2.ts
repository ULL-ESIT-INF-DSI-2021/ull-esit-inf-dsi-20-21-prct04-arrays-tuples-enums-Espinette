export function meshArray(arrayCadena: string[]) {
  let salida: string = ``;
  for (let i: number = 0; i < arrayCadena.length - 1; i++) {
    const word: string = arrayCadena[i];
    const nextWord: string = arrayCadena[i + 1];
    let pos: number= word.length - 1;
    let posNextWord: number = 0;
    while (word[pos] != nextWord[posNextWord]) {
      pos--;
      if (pos < 0) {
        return `Error al encadenar`;
      }
    }
    for (let j: number = pos; j < word.length; j++) {
      if (word[j] == nextWord[posNextWord]) {
        salida = salida + word[j];
        posNextWord++;
      } else {
        return `Error al encadenar`;
      }
    }
  }
  return salida;
}
