type PointN = [number, number, number, ...number[]];

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

export function productoNPoints(punto1: PointN, mult: number) {
  const puntoF: PointN = [0, 0, 0];
  for (let i: number = 0; i < punto1.length; i++) {
    puntoF[i] = punto1[i] * mult;
  }
  return puntoF;
}

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
