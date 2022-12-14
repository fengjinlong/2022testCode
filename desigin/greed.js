/**
 * 贪心算法
 * 商店老板有1、2、5、10面额的纸币，小伙买东西给了100花了80，计算如何找零是最佳(钱的张数最少)
 * 无数个 12510
 *
 * 默认数组是排好序列的 [ 10, 5, 2, 1]
 */

function fun(arr, total) {
  let result = [];
  let al = 0;
  for (let i = 0; i < arr.length; i++) {
    const coins = arr[i];
    while (al + coins <= total) {
      result.push(coins);
      al += coins;
    }
  }
  console.log("result", result);

  return result;
}
fun([10, 5, 2, 1], 23);

/**
 * 假如 零钱的数量是有限的
 * [10,10,5,5,2,2,1,1,1,1,1]
 */
function fun1(arr, total) {
  // map
  let map = getMap(arr);
  let result = [];
  let al = 0;
  for (let i = 0; i < arr.length; i++) {
    const coins = arr[i];
    let n = map.get(coins);
    while (n && al + coins <= total) {
      result.push(coins);
      al += coins;
      map.set(coins, --n);
    }
  }

  console.log("map", result);
  return result;
}

function getMap(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    let n = map.get(ele);
    if (n) {
      n++;
      map.set(ele, n);
    } else {
      map.set(ele, 1);
    }
  }
  return map;
}
fun1([10, 10, 5, 5, 2, 2, 1, 1, 1, 1, 1], 3);

/**
 * 小孩分面包,第一个小孩能吃1块，第二个能吃2块，第三个能吃3块，一共有三块面包。怎么分配
 * - 小孩按照能吃面包多少排序，少的在前
 * [1,2,3] children
 * - 面包吃一块少一块
 * [1,1,1] breads
 */
function f1(children, breads) {
  let result = [];
  let i = 0;
  let j = 0;
  let n = 0;
  while (i < children.length && j < breads.length) {
    n += breads[j];
    if (children[i] === n) {
      i++;
      result.push(i);
      n = 0;
    }
    j++;
  }
  console.log("r", result);

  return result;
}
f1([1, 2, 3], [1, 1, 1, 1, 1, 1, 1]);

/**
 * 是回文么
 * abccba
 * abcba
 */
function ish(str) {
  let s = 0;
  let e = str.length - 1;
  while (s <= e) {
    if (str[s] === str[e]) {
      s++;
      e--;
    } else {
      return str[s] + "---" + str[e];
    }
  }
  return true;
}
console.log("ish", ish("abcdsgcba"));

var arr = [1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 5, 5];
console.log("ss", Array.from(getMap(arr).keys()));
