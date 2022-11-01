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
