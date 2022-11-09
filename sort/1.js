// 冒泡
let array = [6, 1, 5, 2, 4, 3];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length - 1 - i; j++) {
//     let a = array[j];
//     let b = array[j + 1];
//     if (a > b) {
//       swap(array, j, j + 1);
//     }
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     let a = arr[j];
//     let b = arr[j + 1];
//     if (a > b) {
//       swap(arr, i, j);
//     }
//   }
// }
function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

// 选择排序
// function select(arr) {
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     let minIndex = i;
//     for (let j = i; j < length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (i !== minIndex) {
//       swap(arr, i, minIndex);
//     }
//   }
// }
// function selec(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       swap(arr, i, j);
//     }
//   }
// }
// select(array);

// 插入排序
// function insert(arr) {
//   let length = arr.length;
//   for (let i = 1; i < length; i++) {
//     let temp = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > temp) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = temp;
//   }
// }
function insert1(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
// function insert(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     const temp = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > temp) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = temp;
//   }
// }
// insert(array);

// function quick(arr, left, right) {
//   let middle;
//   if (arr.length > 1) {
//     middle = getMiddle(arr, left, right);
//     if (left < middle - 1) {
//       quick(arr, left, middle);
//     }
//     if (middle < right) {
//       quick(arr, middle, right);
//     }
//   }

//   return arr;
// }
// function quick(arr, left, right) {
//   let middle;
//   if (arr.length > 1) {
//     middle = getIn(arr, left, right);
//     if (left < middle - 1) {
//       quick(arr, left, middle);
//     }
//     if (middle < right) {
//       quick(arr, middle, right);
//     }
//   }
// }
// function getIn(arr, left, right) {
//   let middle = Math.floor((left + right) / 2);
//   let i = left;
//   let j = right;
//   while (i <= j) {
//     while (arr[i] < arr[middle]) {
//       i++;
//     }
//     while (arr[middle] < arr[j]) {
//       j--;
//     }
//     if (i <= j) {
//       swap(arr, i, j);
//     }
//   }
//   return i;
// }

// function getMiddle(arr, left, right) {
//   let mindex = Math.floor((right + left) / 2);
//   let i = left;
//   let j = right;
//   while (i <= j) {
//     while (arr[i] < arr[mindex]) {
//       i++;
//     }
//     while (arr[mindex] < arr[j]) {
//       j--;
//     }
//     if (i <= j) {
//       swap(arr, i, j);
//       i++;
//       j--;
//     }
//   }
//   return i;
// }
// quick(array, 0, array.length - 1);
// // let array = [1, 5, 2, 4, 3];
// console.log("arr", array);

// function select(arr) {
//   let length = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i; j < array.length; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       swap(arr, i, minIndex);
//     }
//   }
// }

// 插入排序
// function insert(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     const temp = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > temp) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = temp;
//   }
// }

// function insert2(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     const temp = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > temp) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = temp;
//   }
// }
// function insert3(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let temp = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > temp) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = temp;
//   }
// }
// function insert(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let temp = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > temp) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = temp;
//   }
// }

// function quick(arr, left, right) {
//   // let middle;
//   if (arr.length > 1) {
//     let index = getIndex(arr, left, right);
//     if (left < index - 1) {
//       quick(arr, left, index);
//     }
//     if (index < right) {
//       quick(arr, index, right);
//     }
//   }
//   console.log("arr", arr);

//   return arr;
// }
// function quick2(arr, left, right) {
//   if (arr.length > 1) {
//     let index = getIndex(arr, left, right);
//     if (left < index - 1) {
//       quick(arr, index, right);
//     }
//     if (index < right) {
//       quick(arr, index, right);
//     }
//   }
//   return arr;
// }
// function getIndex(arr, left, right) {
//   let middle = Math.floor((left + right) / 2);
//   let i = left;
//   let j = right;
//   while (i <= j) {
//     while (arr[i] < arr[middle]) {
//       i++;
//     }
//     while (arr[middle] < arr[j]) {
//       j--;
//     }
//     if (i <= j) {
//       swap(arr, i, j);
//       i++;
//       j--;
//     }
//   }
//   return i;
// }
// function getIndex2(arr, left, right) {
//   let middle = Math.floor((left + right) / 2);
//   let i = left;
//   let j = right;
//   while (i <= j) {
//     while (arr[i] < arr[middle]) {
//       i++;
//     }
//     while (arr[middle] < arr[j]) {
// //       j--;
//     }
//     if (i <= j) {
//       swap(arr, i, j);
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

// quick(array, 0, array.length - 1);

// var moduleA = (function () {
//   return {
//     a: 1,
//   };
// })();
// var moduleB = (function (moduleA) {
//   var b = moduleA.a;
//   return {
//     b,
//   };
// })(moduleA);
// // moduleA.js
// define("moduleA", function () {
//   return { a: [1] };
// });
// define(function (require, exports, module) {
//   return { a: [] };
// });
// // moduleB.js
// define(function (require, exports, module) {
//   var b = require("moduleA");
//   return { b };
// });
// seajs.use(["moduleA", "moduleB"], function (moduleA, moduleB) {});
// // moduleB.js
// define("moduleB", ["moduleA"], function (moduleA) {
//   return {
//     b: moduleA.a,
//   };
// });
// // index.js 引用方法
// // 配置路径
// require.config({
//   paths: {
//     moduleA: "js/moduleA.js",
//     moduleB: "js/moduleB.js",
//   },
// });
// require(["moduleA", "moduleB"], function (moduleA, moduleB) {});
// function shell(arr) {
//   for (let i = arr.length / 2; i > 0; i = i / 2) {
//     for (let j = i; j < arr.length; j++) {
//       let temp = arr[j];
//       let t = j - i;
//       while (t >= 0 && arr[t] > temp) {
//         arr[t + temp] = arr[j];
//         j -= i;
//       }
//       arr[j + i] = temp;
//     }
//   }
//   return arr;
// }
// console.log("arr", shell(15, 2, 4, 3, 6, 8));
