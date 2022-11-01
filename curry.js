let currying1 = (fn, ...args) => {
  if (fn.length > args.length) {
    return (...arguments) => {
      console.log("aaa", arguments);

      return currying(fn, ...args, ...arguments);
    };
  } else {
    console.log("aaar", args);

    return fn(...args);
  }
};
let currying = (fn) => {
  return (...arguments) => {
    console.log("aaa", arguments);
    if (arguments.length === 0) {
      fn();
    } else {
      return currying(fn, ...arguments);
    }
  };
};
let addSum = (a, b, c) => a + b + c;

let cy = (fn, ...args) => {
  if (fn.length > args.length) {
    return (...arguments) => {
      return cy(fn, ...args, ...arguments);
    };
  } else {
    return fn(...args);
  }
};

let add = cy(addSum);
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(2, 2)());

let cy1 = (fn, ...args) => {
  if (fn.length > args.length) {
    return (...arguments) => {
      return cy1(fn, ...args, ...arguments);
    };
  } else {
    return fn(...args);
  }
};
