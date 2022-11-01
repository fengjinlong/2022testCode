function selectSort(arr) {
  const length = arr.length;
  let minIndex;
  for (let i = 0; i < length; i++) {
    minIndex = i;
    for (let j = i; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
}

function swap(arr, i, minIndex) {
  let t = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = t;
}
let a = selectSort([1, 5, 3, 4, 8, 2]);
console.log("a", a);

function insertSort(arr) {
  let temp;
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}
let aa = insertSort([4, 1, 3, 6]);
console.log("aa", aa);
function mergeSort(arr) {
  if (arr.length > 1) {
    const { length } = arr;
    let middle = Math.floor(length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle, length));
    arr = merge(left, right);
  }
  return arr;
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    let small = left[i] < right[j] ? left[i++] : right[j++];
    result.push(small);
  }
  // left right 谁还没空
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
let aaa = mergeSort([1, 4, 2, 3, 6]);
console.log("cl", aaa);

function quickSort(arr) {
  return quick(arr, 0, arr.length - 1);
}

function quick(arr, left, right) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quick(arr, left, index - 1);
    }
    if (index < right) {
      quick(arr, index, right);
    }
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
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
let q = quickSort([5, 1, 2, 4, 3, 7]);
console.log("q", q);
