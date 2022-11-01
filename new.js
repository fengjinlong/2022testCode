function myNew2(fn, ...args) {
  if (typeof fn !== "function") {
    throw new Error("error");
  }
  const obj = {};
  Object.setPrototypeOf(obj, fn.prototype);
  let result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

function new2(fn, ...args) {
  if (typeof fn === "function") {
    return new Error("err");
  }
  let obj = Object.create(fn.prototype);
  let result = fn.call(obj, args);
  return result instanceof Object ? result : obj;
}

function new3(fn, ...args) {
  if (typeof fn !== "function") {
    return new Error("sss");
  }
  let obj = Object.create(fn.prototype);
  let result = fn.call(obj, args);
  return result instanceof Object ? result : obj;
}
function new4(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let r = fn.apply(obj, args);
  return r instanceof Object ? r : obj;
}
function new5(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let r = fn.apply(obj, args);
  return r instanceof Object ? r : obj;
}

function new6(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let r = fn.apply(obj, args);
  return r instanceof Object ? r : obj;
}

function new7(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let r = fn.apply(obj, args);
  return r instanceof Object ? r : obj;
}
