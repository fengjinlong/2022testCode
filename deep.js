function dfs(node) {
  let nodes = [];
  function deep(node) {
    if (node !== null) {
      nodes.push(node);
      let childrens = node.children;
      for (let i = 0; i < childrens.length; i++) {
        const n = childrens[i];
        deep(n);
      }
    }
  }
  deep(node);
  console.log("dfs", nodes);
}
function bfs(node) {
  let nodes = [];
  let i = 0;
  if (node !== null) {
    nodes.push(node);
  }
}
const node = {
  text: 1,
  children: [
    { text: 2, children: [{ text: 4, children: [] }] },
    {
      text: 3,
      children: [],
    },
  ],
};
dfs(node);

function wideTraversal(node) {
  let nodes = [],
    i = 0;
  while (node != null) {
    nodes.push(node);
    node = nodes[i];
    i++;
    let childrens = node.children;
    for (let i = 0; i < childrens.length; i++) {
      nodes.push(childrens[i]);
    }
  }
  return nodes;
}
