function getTenNum(arr: number[], arg1: number) {
  let result: any = [];
  let n = arg1;
  const obj = {};
  while (n > 0) {
    let index = Math.floor(Math.random() * arr.length);
    let el = arr[index];
    if (!obj[el]) {
      obj[el] = true;
      result.push(el);
      n--;
    }
  }
  return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 10);
console.log("aa", resArr);
