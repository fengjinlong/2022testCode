// const add = (num) => num + 10;
// const multiply = (num) => num * 2;
// const m = (num) => num * 2;
// const foo = compose(m, multiply, add);
// // foo(5) => 30
// function compose(...funs) {
//   const inner = (p) => {
//     return funs.reverse().reduce((pre, cur) => {
//       return cur(pre);
//     }, p);
//   };
//   return inner;
// }
// console.log(foo(5));
// 实现如下效果：
sum(1, 3).sumOf(); // 4
sum(1, 3)(2, 4).sumOf(); // 10
function sum() {
  let arr = [...arguments];
  let fn = (...a) => {
    arr = arr.concat(a);
    return fn;
  };
  fn.sumOf = () => {
    console.log(
      "ddd",
      arr.reduce((pre, cur) => pre + cur)
    );

    return arr.reduce((pre, cur) => pre + cur);
  };

  return fn;
}
// let list = [1, 5, [9, 8], [2, [1, 9]], 7];
// console.log(
//   "list",
//   list
//     .toString()
//     .split(",")
//     .map((v) => Number(v))
// );
// console.log("list", list.flat(Infinity));

// function f(list) {
//   return list.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? f(cur) : cur);
//   }, []);
// }
// console.log(f(list));

// 数组转换成Tree
var list = [
  {
    id: 1,
    name: "jack",
    pid: 0,
  },
  {
    id: 2,
    name: "jack",
    pid: 1,
  },

  {
    id: 3,
    name: "jack",
    pid: 1,
  },
  {
    id: 4,
    name: "jack",
    pid: 2,
  },
];
function getTree(root, resule, parentId) {
  for (let i = 0; i < root.length; i++) {
    const child = root[i];
    if (child.pid === parentId) {
      let item = { ...child, children: [] };
      resule.push(item);
      getTree(root, item.children, item.id);
    }
  }
}
let arr = [];
getTree(list, arr, 0);
console.log(JSON.stringify(arr));
function tr(root, result, parentId) {
  for (let i = 0; i < root.length; i++) {
    const child = root[i];
    if (child.id === parentId) {
      let item = { ...child, children: [] };
      result.oush(item);
      tr(root, item.children, item.id);
    }
  }
}
function tre(root, result, parentId) {
  for (let i = 0; i < root.length; i++) {
    const child = root[i];
    if (child.pid === parentId) {
      let item = { ...child, children: [] };
      result.push(item);
      tre(root, item.children, item.id);
    }
  }
}
