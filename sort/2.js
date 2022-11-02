const fun = (root) => {
  if (!root) {
    return 0;
  } else {
    let l = fun(root.left);
    let r = fun(root.right);
    return Math.max(l, r) + 1;
  }
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const createTree = (arr) => {
  let length = arr.length;
  let tree = new Node(arr[0]);
  let i = 1;
  let trees = [tree];
  for (const t of trees) {
    t.left = new Node(arr[i]);
    trees.push(t.left);
    i++;
    if (i === length) return tree;
    t.right = new Node(arr[i]);
    trees.push(t.right);
    i++;
    if (i === length) return tree;
  }
};
const arr = [3, 9, 20, null, null, 15, 7];
const tree = createTree(arr);
console.log("tree", tree);

const reverseTree = function (root) {
  if (!root) return null;
  let left = reverseTree(root.left);
  let right = reverseTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};
console.log("reverseTree", reverseTree(tree));
