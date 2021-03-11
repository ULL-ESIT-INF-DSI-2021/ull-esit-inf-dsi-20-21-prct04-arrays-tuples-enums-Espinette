type Point = [number, number];

export function sumaPoints(punto1: Point, punto2: Point) {
  const puntoF: Point = [0, 0];
  puntoF[0] = punto1[0] + punto2[0];
  puntoF[1] = punto1[1] + punto2[1];
  return puntoF;
}

export function restaPoints(punto1: Point, punto2: Point) {
  const puntoF: Point = [0, 0];
  puntoF[0] = punto1[0] - punto2[0];
  puntoF[1] = punto1[1] - punto2[1];
  return puntoF;
}

export function productoPoints(punto1: Point, mult: number) {
  const puntoF: Point = [0, 0];
  puntoF[0] = punto1[0] * mult;
  puntoF[1] = punto1[1] * mult;
  return puntoF;
}

export function distEuclidea(punto1: Point, punto2: Point) {
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
