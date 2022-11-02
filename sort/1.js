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

function select(arr) {
  let length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < array.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex);
    }
  }
}

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

function quick(arr, left, right) {
  // let middle;
  if (arr.length > 1) {
    let index = getIndex(arr, left, right);
    if (left < index - 1) {
      quick(arr, left, index);
    }
    if (index < right) {
      quick(arr, index, right);
    }
  }
  console.log("arr", arr);

  return arr;
}
function getIndex(arr, left, right) {
  let middle = Math.floor((left + right) / 2);
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < arr[middle]) {
      i++;
    }
    while (arr[middle] < arr[j]) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

quick(array, 0, array.length - 1);
