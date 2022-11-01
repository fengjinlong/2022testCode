// 图片懒加载
function createImg(url) {
  return new Promise((resolve, reject) => {
    if (url) {
      let imgEle = document.createElement("img");
      imgEle.src = url;
      resolve(imgEle);
    } else {
      reject("url ?");
    }
  });
}
function newMy(Con, ...args) {
  let obj = {};
  Object.setPrototypeOf(obj, Con.prototype);
  let result = Con.apply(obj, args);
  return result instanceof Object ? result : obj;
}

// fun.bind(obj, arg)
Function.prototype.bind = function (thisObj) {
  // fun 必须是方法
  if (typeof this !== "function") {
    throw new TypeError("err");
  }
  const fun = this;
  // args
  const args = [].slice.call(arguments, 1);
  // 返回的函数
  function Bound() {
    if(this instanceof Bound) {
      return new fun(...args, ...arguments)
    }
    return fun.apply(thisObj, args.concat(...arguments))
  }
  return Bound;
};
