function fun(arr, total) {
  let n = 0;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const coins = arr[i];
    while (n + coins <= total) {
      result.push(coins);
      n += coins;
    }
  }
  console.log("re", result);

  return result;
}
fun([10, 5, 1], 27);

// 小孩吃面包
function eat(children, breads) {
  const result = [];
  let i = 0;
  let j = 0;
  let breadNum = 0;
  while (i < children.length && j < breads.length) {
    breadNum += breads[j];
    if (breadNum === children[i]) {
      result.push(i);
      i++;
      breadNum = 0;
    }
    j++;
  }
  console.log("children", result);

  return result;
}
eat([1, 2, 3], [1, 1, 1, 3]);
