function Dialog(title) {
  this.title = title;
}
Dialog.prototype.getTitle = function () {
  console.log("getTitle", this.title);
};
let CreateSingle = function (Constructor) {
  let instance;
  let SingleConstructor = function () {
    if (!instance) {
      instance = new Constructor(...arguments);
    }
    return instance;
  };
  return SingleConstructor;
};
let Single1 = CreateSingle(Dialog);
let s1 = Single1("xxx");
let s2 = Single1();
s1.getTitle();
console.log("===", s1 === s2);

let C = function (Constructor) {
  let instance;
  let S = function () {
    if (!instance) {
      instance = new Constructor(...arguments);
    }
    return instance;
  };
  return S;
};
