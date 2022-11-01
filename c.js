let currying = (fn, ...args) => {
  console.log("ddd", fn.length, args.length);

  return fn.length > args.length
    ? (...arguments) => currying(fn, ...args, ...arguments)
    : fn(...args);
};
let addSum = (a, b, c) => a + b + c;

let add = currying(addSum);
// console.log(add(1)(2)(3));
console.log(add(1, 2)(3)(4));
// console.log(add(1, 2, 3));
