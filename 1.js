const arr = [1, 2, 3, 4, 5];
const sum = 11;
getMin(arr, sum);

function getMin(nums, target) {
  let length = nums.length;
  let s = 0;
  let e = 0;
  let min = length + 1;
  if (nums.includes(target)) return 1;
  let sum;
  while (e < length) {
    sum += nums[e];
    while (sum >= target) {
      min = Math.min(min, e - s + 1);
      sum -= nums[s];
      s++;
    }
    e++;
  }

  console.log("aa", min);

  return min;
}
function d(node) {
  node.cotext = "";
  node.left = node.right = null;
  function f(node) {
    if (!node) return;
    f(node.left);
  }
}
