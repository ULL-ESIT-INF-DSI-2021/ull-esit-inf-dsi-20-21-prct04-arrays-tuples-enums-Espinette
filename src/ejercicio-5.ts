/**
 * __Funcion que lo que hace es multiplicar por un valor cada elemento del vector__
 * @param arrayNum Array con los numeros a multiplicar
 * @returns Retorna una llamada a una funcion anónima
 * ```TypeScript
 * multiplyAll([2,6,8])(3) -> [6, 18, 24]
 * ```
 * __Función anónima__
 * @param mult Numero por el que multiplicar
 * @returns Salida de un nuevo array multiplicado
 */

export function multiplyAll(arrayNum: number[]) {
  return (mult: number) => {
    const sol: number[] = [];
    arrayNum.forEach((number) => {
      sol.push(number * mult);
    });
    return sol;
  };
}
