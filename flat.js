function flat(arr, depth = 1) {
  if (depth > 0) {
    return arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? flat(cur, depth - 1) : cur);
    }, []);
  }
  return arr.slice();
}
Array.prototype.reduce = function (cb, init) {
  const arr = this;
  let total = init || arr[0];
  for (let i = 1; i < arr.length; i++) {
    const ele = arr[i];
    total = cb(total, ele, i, arr);
  }
  return total;
};

Array.prototype.redece1 = function (cb, init) {
  const arr = this;
  let total = init || arr[0];
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    total = cb(total, ele, i, arr);
  }
  return total;
};

// 数组扁平
function f(arr) {
  function ff(arr) {
    let b = arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? ff(pre) : pre);
    }, []);
    return b;
  }
  return ff(arr);
}
Array.prototype.map = function (cb, init) {
  let b = [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    b.push(cb(ele, i, arr));
  }
  return b;
};
Array.prototype.filter2 = function (cb) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (cb(ele)) result.push(ele);
  }
  return result;
};
Array.prototype.find2 = function (cb) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (cb(ele)) return ele;
  }
};
Array.prototype.indexOf2 = function (t, s = 0) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (t === ele) {
      if (s === 0) {
        return i;
      } else {
        if (i > s) {
          return i;
        }
      }
    }
  }
  return -1;
};

Array.prototype.forEach2 = function (cb) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    cb(ele, i, arr);
  }
};
