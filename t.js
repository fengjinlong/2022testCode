console.log("1");

setTimeout(function () {
  console.log("2");
  process.nextTick(function () {
    console.log("3");
  });
  new Promise(function (resolve) {
    console.log("4");
    resolve();
  }).then(function () {
    console.log("5");
  });
});

process.nextTick(function () {
  console.log("6");
});

new Promise(function (resolve) {
  console.log("7");
  resolve();
}).then(function () {
  console.log("8");
});

setTimeout(function () {
  console.log("9");
  process.nextTick(function () {
    console.log("10");
  });
  new Promise(function (resolve) {
    console.log("11");
    resolve();
  }).then(function () {
    console.log("12");
  });
});

function debounce(fun, wait) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
      return;
    }
    timer = setTimeout(() => {
      fun.apply(this, arguments);
    }, wait);
  };
}
function t(fn, wait) {
  let pre = 0;
  return function () {
    let nowt = +new Date();
    if (nowt - pre > wait) {
      fn.apply(this, arguments);
      pre = nowt;
    }
  };
}

function myInstance(target, origin) {
  if (typeof target !== "object" || target === null) {
    return false;
  }
  if (typeof origin !== "function") {
    throw new TypeError("origin must be function ");
  }
  let proto = Object.getPrototypeOf(target);
  while (proto) {
    if (proto === origin.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

function flat(arr, deph) {
  if (deph > 0) {
    return arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? flat(cur, deph - 1) : cur);
    }, []);
  }
  return arr.slice();
}
Array.prototype.myReduce = function (cb) {
  const arr = this;
  let total = arr[0];
  for (let i = 1; i < arr.length; i++) {
    total = cb(total, arr[i], i, arr);
  }
  return total;
};
Array.prototype.myReduce2 = function (cb, init) {
  const arr = this;
  let total = init ? init : arr[0];
  for (let i = init ? 0 : 1; i < arr.length; i++) {
    total = cb(total, arr[i], i, arr);
  }
  return total;
};

function throttle(fn, delay) {
  let flat = true;
  let timer = null;
  return function (...arg) {
    let context = this;
    if (!flat) return;
    flat = false;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arg);
      flat = true;
    }, delay);
  };
}
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    let context = this;
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(context, arg);
    }, delay);
  };
}

let currying = (fn, ...args) =>
  fn.length > args.length
    ? (...arguments) => currying(fn, ...args, ...arguments)
    : fn(...args);

let curry = (fn, ...args) => {
  if (fn.length > args.length) {
    return (...arguments) => {
      return curry(f, ...args, ...arguments);
    };
  } else {
    return fn(...args);
  }
};
let addSum = (a, b, c) => a + b + c;
let add = currying(addSum);
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1, 2, 3));

function fun() {
  const result = [];
  for (let i = 0; i < 10; i++) {
    result[i] = function (i) {
      console.log("a", i);
    };
  }
}
function fun2() {
  var result = [];
  var loop = function (i) {
    result[i] = function () {
      console.log("r", i);
    };
  };
  for (var i = 0; i < 10; i++) {
    loop(i);
  }
}
