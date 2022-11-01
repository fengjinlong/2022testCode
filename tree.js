// 根据数组 转换 为 root
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function createTree(arr) {
  let tree = new Node(arr[0]);
  const Nodes = [tree];
  let i = 1;
  for (const n of Nodes) {
    n.left = new Node(arr[i]);
    Nodes.push(n.left);
    i++;
    if (i === arr.length) return tree;
    n.right = new Node(arr[i]);
    Nodes.push(n.right);
    i++;
    if (i === arr.length) return tree;
  }
}

function tree(root) {
  let arr = [];

  const order = (root) => {
    if (!root || !root.value) return;
    arr.push(root.value);
    order(root.left);
    order(root.right);
    // arr.push(root.value);
  };
  order(root);
  console.log("arr", arr);
}

const arr = [3, 9, 20, null, null, 15, 7];
const root = createTree(arr);

const a = {
  value: 3,
  left: {
    value: 9,
    left: { value: null, left: null, right: null },
    right: { value: null, left: null, right: null },
  },
  right: {
    value: 20,
    left: { value: 15, left: null, right: null },
    right: { value: 7, left: null, right: null },
  },
};
tree(a);
