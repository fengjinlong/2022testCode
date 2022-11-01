Function.prototype.myBind = function (ctx, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  const _this = this;
  const args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    } else {
    }
    return _this.apply(ctx, args.concat(...arguments));
  };
};
Function.prototype.myBind2 = function (ctx, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  const _this = this;
  const args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(ctx, args.concat(...arguments));
  };
};

Function.prototype.myBind2 = function (ctx, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  const _this = this;
  const args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(ctx, args.concat(...arguments));
  };
};
const arr = [[[]]];
const flatArr = arr.flat(Infinity);

const brr3 = (arr) => {
  let crr = arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? brr3(cur) : cur);
  }, []);
  return crr;
};

function debounce(fn, wait) {
  let timer = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, wait);
  };
}

function throttle(fn, wait) {
  let date = Date.now();
  return function () {
    let now = Date.now();
    if (now - date > wait) {
      fn.call(this, arguments);
      date = now;
    }
  };
}

function myNew(fn, ...args) {
  if (typeof fn !== "function") {
    throw new Error("error");
  }
  const obj = {};
  Object.setPrototypeOf(obj, fn.prototype);
  let result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

function createObj(obj) {
  let O = {};
  O.prototype = obj;
  return new O();
}
Function.prototype.bind3 = function (ctx, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  const _this = this;
  const args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(ctx, args.concat(...arguments));
  };
};
Function.prototype.bind4 = function (ctx, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  const _this = this;
  const args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(ctx, args.concat(...arguments));
  };
};

Function.prototype.bind5 = function (ctx, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  let _this = this;
  return function F(arguments) {
    if (this instanceof F) {
      return new _this(args, ...arguments);
    }
    return _this.apply(ctx, args.concat(...arguments));
  };
};

Function.prototype.bind6 = function (ctx, ...args) {
  let _this = this;
  return function F() {
    args = args.concat([...arguments]);
    if (this instanceof F) {
      return new _this(args);
    }
    return _this.apply(ctx, args);
  };
};
