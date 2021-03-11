type Point = [number, number];
/**
 * __Funcion que suma dos puntos__
 * @param punto1 Primer punto a sumar
 * @param punto2 Segundo punto a sumar
 * @returns La suma de ambos puntos
 * ```TypeScript
 * sumaBiPoints([6, 4], [3, 2]) -> [9, 6]
 * ```
 */
export function sumaBiPoints(punto1: Point, punto2: Point) {
  const puntoF: Point = [0, 0];
  puntoF[0] = punto1[0] + punto2[0];
  puntoF[1] = punto1[1] + punto2[1];
  return puntoF;
}
/**
 * __Funcion que resta dos puntos__
 * @param punto1 Primer punto a restar
 * @param punto2 Segundo punto a restar
 * @returns La resta de ambos puntos
 * ```TypeScript
 * restaBiPoints([6, 4], [3, 2]) -> [3, 2]
 * ```
 */
export function restaBiPoints(punto1: Point, punto2: Point) {
  const puntoF: Point = [0, 0];
  puntoF[0] = punto1[0] - punto2[0];
  puntoF[1] = punto1[1] - punto2[1];
  return puntoF;
}

/**
 * __Funcion que multiplica un puntos por un número__
 * @param punto1 Punto a multiplicar
 * @param mult Numero por el que se multiplica
 * @returns El punto multiplicado
 * ```TypeScript
 * productoBiPoints([6, 4], 4) -> [18, 12]
 * ```
 */
export function productoBiPoints(punto1: Point, mult: number) {
  const puntoF: Point = [0, 0];
  puntoF[0] = punto1[0] * mult;
  puntoF[1] = punto1[1] * mult;
  return puntoF;
}

/**
 * __Función que hace la distancia Euclidea entre dos puntos__
 * @param punto1 Primer punto
 * @param punto2 Segundo punto
 * @returns La operacion realizada
 * ```TypeScript
 * distBiEuclidea([6, 4], [3, 2]) -> 3,61
 * ```
 */
export function distBiEuclidea(punto1: Point, punto2: Point) {
  let sol: number = 0;
  let aux1: number = 0;
  let aux2: number = 0;
  aux1 = punto1[0] - punto2[0];
  aux2 = punto1[1] - punto2[1];
  aux1 = Math.pow(aux1, 2);
  aux2 = Math.pow(aux2, 2);
  sol = aux1 + aux2;
  sol = Math.sqrt(sol);
  return parseFloat(sol.toFixed(2));
}
