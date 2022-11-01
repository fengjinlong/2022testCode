function selectSort(arr) {
  const len = arr.length;
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex);
    }
  }
}

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
}
function is(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
}

function as(arr) {
  return q(arr, 0, arr.length - 1);
}

function q(arr, left, right) {
  if (arr.length > 1) {
    let index = getIndex(arr, left, right);
    if (left < index - 1) {
      q(arr, left, right);
    }
    if (index < right) {
      q(arr, index, right);
    }
  }
  return arr;
}

function getIndex(arr, left, right) {
  let middle = arr[Math.floor(left + right) / 2];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < middle) {
      i++;
    }
    while (arr[j] > middle) {
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

qus(arr, 0, arr.length - 1);
function qus(arr, left, right) {
  if (arr.length > 1) {
    let index = getIndex1(arr, left, right);
    if (left < index - 1) {
      qus(arr, left, index - 1);
    }
    if (index < right) {
      qus(arr, index, right);
    }
  }
  return arr;
}

function getIndex1(arr, left, right) {
  let middle = arr[Math.floor(left + right) / 2];
  let j = right;
  let i = left;
  while (i <= j) {
    while (arr[i] < middle) {
      i++;
    }
    while (middle < arr[j]) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      j--;
      i++;
    }
  }
  return i;
}
