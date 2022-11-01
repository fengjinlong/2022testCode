// a === 1 && a === 2 && a === 3;
const a = {
  // toString() {
  //   return 1;
  // },
  v: 1,
  valueOf() {
    return this.v++;
  },
};
// new Proxy(a, {
//   get(target, key) {
//     console.log("key", key);
//     return 1;
//   },
// });
console.log("a", a == 1, a == 2, a == 3);
