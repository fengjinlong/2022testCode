const root = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
  right: {
    value: 3,
  },
};
function fun(root) {
  let val = 0;
  function f(root) {
    val += root.value;
    if (root.left) f(root.left);
    if (root.right) f(root.right);
  }
  f(root);
  return val;
}
console.log("cc", fun(root));
