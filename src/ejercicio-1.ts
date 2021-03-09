/**
 * __Funcion para descodificar un resistor en funcion de sus colores__
 * Negro -> 0; Marrón -> 1; Rojo -> 2; Naranja -> 3; Amarillo -> 4; Verde -> 5; Azul -> 6; Violeta -> 7; Gris -> 8; Blanco -> 9
 * @param resistor Array de colores (puedes introducir tantos colores como quieras)
 * @returns Retorna el numero formado por la extración de los 2 primeros colores introducidos
 * ```TypeScript
 * decodeResistor(`Marron`,`Verde`) returns 15
 * ```
 */
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
