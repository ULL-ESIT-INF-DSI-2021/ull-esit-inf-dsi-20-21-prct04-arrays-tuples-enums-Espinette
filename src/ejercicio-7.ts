type PointN = [number, number, number, ...number[]];

/**
 * __Funcion que suma dos puntos de mas de 3 dimensiones__
 * @param punto1 Primer punto a sumar
 * @param punto2 Segundo punto a sumar
 * @returns La suma de ambos puntos
 * ```TypeScript
 * sumaBiPoints([6, 4, 2], [3, 2, 1]) -> [9, 6, 3]
 * ```
 */
export function sumaNPoints(punto1: PointN, punto2: PointN) {
  const puntoF: PointN = [0, 0, 0];
  if (punto1.length != punto2.length) {
    return `Los puntos no tienen la misma dimensión`;
  }
  for (let i: number = 0; i < punto1.length; i++) {
    puntoF[i] = punto1[i] + punto2[i];
  }
  return puntoF;
}

/**
 * __Funcion que resta dos puntos de mas de 3 dimennsiones__
 * @param punto1 Primer punto a restar
 * @param punto2 Segundo punto a restar
 * @returns La resta de ambos puntos
 * ```TypeScript
 * restaBiPoints([6, 4, 2], [3, 2, 1]) -> [3, 2, 1]
 * ```
 */
export function restaNPoints(punto1: PointN, punto2: PointN) {
  const puntoF: PointN = [0, 0, 0];
  if (punto1.length != punto2.length) {
    return `Los puntos no tienen la misma dimensión`;
  }
  for (let i: number = 0; i < punto1.length; i++) {
    puntoF[i] = punto1[i] - punto2[i];
  }
  return puntoF;
}

/**
 * __Funcion que multiplica un punto de mas de 3 dimensiones por un número__
 * @param punto1 Punto a multiplicar
 * @param mult Numero por el que se multiplica
 * @returns El punto multiplicado
 * ```TypeScript
 * productoBiPoints([6, 4, 2], 4) -> [18, 12, 8]
 * ```
 */
export function productoNPoints(punto1: PointN, mult: number) {
  const puntoF: PointN = [0, 0, 0];
  for (let i: number = 0; i < punto1.length; i++) {
    puntoF[i] = punto1[i] * mult;
  }
  return puntoF;
}

/**
 * __Función que hace la distancia Euclidea entre dos puntos de mas de 3 dimensiones__
 * @param punto1 Primer punto
 * @param punto2 Segundo punto
 * @returns La operacion realizada
 * ```TypeScript
 * distBiEuclidea([6, 4, 2], [3, 2, 1]) -> 3,74
 * ```
 */
export function distNEuclidea(punto1: PointN, punto2: PointN) {
  let sum: number = 0;
  let aux: number = 0;
  let sol: number = 0;
  if (punto1.length != punto2.length) {
    return `Los puntos no tienen la misma dimensión`;
  }
  for (let i: number = 0; i < punto1.length; i++) {
    aux = Math.pow((punto1[i] - punto2[i]), 2);
    sum = sum + aux;
  }
  sol = Math.sqrt(sum);
  return parseFloat(sol.toFixed(2));
}
