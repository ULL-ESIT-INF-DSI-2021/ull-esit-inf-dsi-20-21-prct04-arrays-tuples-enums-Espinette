
export function multiplyAll(arrayNum: number[]) {
  return (mult: number) => {
    const sol: number[] = [];
    arrayNum.forEach((number) => {
      sol.push(number * mult);
    });
    return sol;
  };
}
