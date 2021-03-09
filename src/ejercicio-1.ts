
export function decodeResistor(resistor: string[]) {
  const colores: string[] =[`Negro`, `Marron`, `Rojo`, `Naranja`, `Amarillo`, `Verde`, `Azul`, `Violeta`, `Gris`, `Blanco`];
  let solucion: string = '';
  let cont: number = 0;
  resistor.forEach((i) => {
    if (cont < 2) {
      solucion = solucion + colores.indexOf(i).toString();
    }
    cont++;
  });
  return parseInt(solucion);
}
