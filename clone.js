// let arr = [{ a: 1 }];
// let arr2 = [].concat([], arr);
// console.log("arr", arr);
// console.log("arr2", arr2);

// arr[0].a = 2;
// console.log("arr", arr);
// console.log("arr2", arr2);

let isObjFun2 = (obj) =>
  (typeof obj === "function" || typeof obj === "object") && obj !== null;
const deepClone2 = function (obj, hash = new WeakMap()) {
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let type = [Date, RegExp, Set, Map, WeakMap, WeakSet];
  if (type.includes(obj.constructor)) {
    return new Object.constructor(obj);
  }
  // 获取一个对象的所有自身属性的描述符
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  // getPrototypeOf 返回对象的原型
  // Object.create(proto, propertiesObject)
  // propertiesObject 存在，将为新对象添指定的属性值和对应的属性描述符
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  hash.set(obj, cloneObj);
  for (const key of Reflect.ownKeys(obj)) {
    cloneObj[key] = isObjFun2(obj[key] ? deepClone2(obj[key]) : obj[key]);
  }
  return cloneObj;
};

let isObjFun3 = (obj) => {
  // 是对象 方法
  return (typeof obj === "function" || typeof obj === "object") && obj !== null;
};
const deepC = function (obj, hash = new WeakMap()) {
  // 缓存
  if (hash.has(obj)) return hash.get(obj);
  //  特殊的集中类别 特别处理
  let type = [Date, RegExp, Set, Map, WeakMap, WeakSet];
  if (type.includes(obj.constructor)) {
    return new Object.constructor(obj);
  }
  // 正常的 obj
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  // 存一次
  hash.set(obj, cloneObj);
  // 需要递归处理么
  for (const key of Reflect.ownKeys(obj)) {
    cloneObj[key] = isObjFun3(obj[key]) ? deepC(obj[key]) : obj[key];
  }
};
// 1. 属性描述符
// 2. 原型属性
// 3. 自身属性
// 4. 循环引用
// 5. 特出构造函数

let isObjFun4 = (obj) => {
  return (typeof obj === "function" || typeof obj === "object") && obj !== null;
};
let deepd = function (obj, hash = new WeakMap()) {
  if (hash.has(obj)) return hash.get(obj);
  let type = [Date, RegExp, Set, Map, WeakMap, WeakSet];
  if (type.includes(obj.constructor)) {
    return new Object.constructor(obj);
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  hash.set(obj, cloneObj);
  for (const key of Reflect.ownKeys(obj)) {
    cloneObj[key] = isObjFun4(obj[key]) ? deepd(obj[key]) : obj[key];
  }
  return cloneObj;
};

let isObjFun5 = (obj) => {
  return (typeof obj === "object" || typeof obj === "function") && obj !== null;
};
let deep5 = function (obj, hash = new WeakMap()) {
  if (hash.has(obj)) return hash.get(obj);
  let type = [Date, RegExp, Set, Map, WeakMap, WeakSet];
  if (type.includes(obj.constructor)) {
    return new Object.constructor(obj);
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  hash.set(obj, cloneObj);
  for (const key of Reflect.ownKeys(obj)) {
    cloneObj[key] = includes(obj[key]) ? deep5(obj[key]) : obj[key];
  }
  return cloneObj;
};
