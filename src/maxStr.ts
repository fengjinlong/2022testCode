function getMax(string) {
  let left = 0;
  let right = 1;
  let max = 0;
  while (right <= string.length) {
    if (string.length === 0) {
      return 0;
    }
    let str = string.slice(left, right);
    let index = str.indexOf(string[right]);
    if (index > -1) {
      left = index + left + 1;
    } else {
      str = string.slice(left, right + 1);
      max = Math.max(max, str.length);
    }
    right++;
  }
  return max;
}
export { getMax };
