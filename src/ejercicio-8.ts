type Point = [number, number];

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
