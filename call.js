Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx | window;
  let fn = Symbol();
  ctx[fn] = this;
  let result = ctx[fn](...args);
  delete ctx[fn];
  return result;
};

Function.prototype.myApply = function (ctx) {
  ctx = ctx || window;
  let fn = Symbol();
  ctx[fn] = this;
  let result;
  if (arguments[1]) {
    result = ctx[fn](...arguments[1]);
  } else {
    result = ctx[fn]();
  }
  delete ctx[fn];
  return result;
};

Function.prototype.myApply2 = function (ctx) {
  ctx = ctx || window;
  let fn = Symbol();
  ctx[fn] = this;
  let result;
  if (arguments[1]) {
    result = ctx[fn](...arguments[1]);
  } else {
    result = ctx[fn]();
  }
  delete ctx[fn];
  return result;
};
Function.prototype.apply3 = function (ctx) {
  ctx = ctx || window;
  let fn = Symbol();
  ctx[fn] = this;
  let result;
  if (arguments[1]) {
    result = ctx[fn](...arguments[1]);
  } else {
    result = ctx[fn]();
  }
  delete ctx[fn];
  return result;
};

Function.prototype.mcall = function (ctx, ...args) {
  ctx = ctx || window;
  let fn = Symbol();
  ctx[fn] = this;
  let result = ctx[fn](...args);
  delete ctx[fn];
  return result;
};
Function.prototype.myApply = function (ctx) {
  ctx = ctx || window;
  let fn = Symbol();
  ctx[fn] = this;
  let result;
  if (arguments[1]) {
    result = ctx[fn](...arguments[1]);
  } else {
    result = ctx[fn]();
  }
  delete ctx[fn];
  return result;
};

Function.prototype.apply4 = function (ctx) {
  ctx = ctx || window;
  ctx[fn] = this;
  let result;
  if (arguments[1]) {
    result = ctx[fn](...arguments[1]);
  } else {
    result = ctx[fn]();
  }
  delete ctx[fn];
  return result;
};

Function.prototype.mmcall = function (ctx, args) {
  ctx = ctx || window;
  let fn = Symbol();
  ctx[fn] = this;
  let result = ctx[fn](...args);
  delete ctx[fn];
  return result;
};

Function.prototype.call2 = function (ctx, args) {
  ctx = ctx | window;
  let fn = Symbol();
  ctx[fn] = this;
  let result = ctx[fn](...args);
  delete ctx[fn];
  return result;
};

Function.prototype.call3 = function (ctx, ...args) {
  let fn = Symbol();
  ctx[fn] = this;
  let r = ctx[fn](...args);
  delete ctx[fn];
  return r;
};
Function.prototype.call4 = function (ctx, ...args) {
  let fn = Symbol();
  ctx.fn = this;
  let r = ctx[fn](...args);
  delete ctx[fn];
  return r;
};