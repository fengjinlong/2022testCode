function getMax(arr) {
  let result: any = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let a = [arr[i]];
    let temp = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[temp] < arr[j]) {
        a.push(arr[j]);
        temp = j;
      }
    }

    if (a.length > result.length) {
      result = [...a];
    }
  }
  console.log("result", result);
}
getMax([10, 9, 2, 5, 3, 7, 101, 18]);
