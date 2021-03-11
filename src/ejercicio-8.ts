type Point = [number, number];
/**
 * __Funcion para mostrar el recorrido de un punto a otro__
 * @param x Ancho del tablero
 * @param y Alto del tablero
 * @param initialPoint Punto de inicio
 * @param endPoint Punto de destino
 * @returns Vector indicando norte, sur, este, oeste segun su desplazamiento
 * ```TypeScript
 * agent(10, 10, (1,3),(3,5)) -> [ Este, Norte, Este, Norte ]
 * ```
 */
export function agent(x: number, y: number, initialPoint: Point, endPoint: Point) {
  const recorrido: string[] = [];
  while ((initialPoint[0] != endPoint[0]) && (initialPoint[1] != endPoint[1])) {
    if (initialPoint[0] < endPoint[0]) {
      recorrido.push(`Este`);
      initialPoint[0]++;
    }
    if (initialPoint[0] > endPoint[0]) {
      recorrido.push(`Oeste`);
      initialPoint[0]--;
    }
    if (initialPoint[1] < endPoint[1]) {
      recorrido.push(`Norte`);
      initialPoint[1]++;
    }
    if (initialPoint[1] > endPoint[1]) {
      recorrido.push(`Sur`);
      initialPoint[1]--;
    }
    console.log(endPoint);
  }
  console.log(`hola`);
  return recorrido;
}

const initialPoint: Point = [1, 3];
const endPoint: Point = [3, 5];
console.log(agent(10, 10, initialPoint, endPoint));
