// //  继承
// /**
//  *
//  * 原型链继承
//  * 污染别的子对象
//  */
// function Parent1(x) {}
// function Child1() {}
// Child1.prototype = new Parent1();
// const c = new Child1();
// /**
//  *
//  *  构造函数继承
//  *  不能继承原型链属性和方法
//  */
// function P2(arguments) {}
// function C2() {
//   P2.call(this, ...arguments);
// }
// const c2 = new C2();

// /**
//  * 组合继承
//  * 调用多次父构造函数
//  */
// function P3() {}
// function C3() {
//   P3.call(this, arguments);
// }
// C3.prototype = new P3();
// const c3 = new C3();

// /**
//  * 原型式继承
//  * Object.create 只是浅拷贝
//  */
// function P4() {}
// const c4 = Object.create(new P4());

// /**
//  * 寄生式继承
//  * 比原型式 多了能在父添加属性和方法，
//  */
// function P5(arguments) {}
// function clone(origin) {
//   let instance = Object.create(origin);
//   instance.addFn = () => {
//     return this.age;
//   };
//   return instance;
// }
// const c5 = clone(P5);

// /**
//  * 寄生组合式继承
//  */
// function P6(arguments) {}
// function C6() {
//   P6.call(this);
// }
// function clone2(parent, child) {
//   child.prototype = Object.create(parent.prototype);
//   child.constructor = child;
// }
// clone2(P6, C6);

// /**
//  * class extends
//  */
// class P7 {}
// class C7 extends P7 {}
// const c7 = new C7();

// // 1 原型链继承
// function P() {}
// function C() {}
// C.prototype = new P();
// const c1 = new C();
// // 2  构造函数继承
// function P2() {}
// function C2() {
//   P2.call(this, ...arguments);
// }
// const d2 = new C2();

// // 3 组合继承
// function P3() {}
// function C3() {
//   P3.call(this, arguments);
// }
// C3.prototype = new P3();
// const d3 = new C3();

// // 4 原型式继承
// function P4(arguments) {}
// const d4 = Object.create(new P4());

// // 5 寄生式继承
// function P5() {}
// function clone(origin) {
//   let instance = Object.create(new P5());
//   instance.addFn = (params) => {};
//   return instance;
// }
// const d5 = clone(P5);

// // 6 寄生组合式继承
// function P6(arguments) {}
// function C6() {
//   P6.call(this, arguments);
// }
// function clone2(P, C) {
//   C.prototype = Object.create(P.prototype);
//   C.constructor = C;
// }
// clone2(P6, C6);

// 1 原型链继承
// function P1(arguments) {}
// function C1() {}
// C1.prototype = new P1();
// const c1 = new C1();

// // 2 构造函数继承
// function P2() {}
// function C2() {
//   P2.call(this, arguments);
// }
// const c2 = new C2();

// // 3 组合继承
// function P3() {}
// function C3() {
//   P3.call(this, arguments);
// }
// C3.prototype = new P3();
// const c3 = new C3();

// // 4 原型式继承
// function P4() {}
// const c4 = Object.create(new P4());
// // 5 寄生式继承
// function P5() {}
// function clone(P) {
//   const instance = Object.create(new P());
//   instance.getFun = function () {};
//   return instance;
// }
// const c5 = clone(P5);
// // 6 寄生组合式继承
// function P6() {}
// function C6() {
//   P6.call(this, arguments);
// }
// function clone2(P, C) {
//   C.prototype = Object.create(P.prototype);
//   C.constructor = C;
// }
// clone2(P6, C6);

// // 1 原型链继承
// function P1() {}
// function C1() {}
// C1.prototype = new P1();
// // 2 构造函数继承
// function P2() {}
// function C2() {
//   P2.call(this, arguments);
// }
// // 3 组合继承
// function P3() {}
// function C3() {
//   P3.call(this, arguments);
// }
// C3.prototype = new P3();
// // 4 原型继承
// function P4() {}
// const c4 = Object.create(new P4());
// // 5 寄生继承
// function P5() {}
// function clone(P) {
//   const instance = Object.create(new P());
//   instance.getFun = () => {};
//   return instance;
// }
// const c5 = clone(P5);
// // 6 寄生组合
// function P6(arguments) {}
// function C6() {
//   P6.call(this, arguments);
// }
// function clone2(P, C) {
//   C.prototype = Object.create(P.prototype);
//   C.constructor = C;
// }
// clone2(P6, C6);

// 1
// function P1() {}
// function C1() {}
// C1.prototype = new P1();

// // 2
// function P2() {}
// function C1() {
//   P2.call(this, arguments);
// }
// // 3 组合
// function P3() {}
// function C3() {
//   P3.call(this, arguments);
// }
// C3.prototype = new P3();
// // 4 原型继承
// function P4() {}
// const c4 = Object.create(new P4());
// // 5 寄生继承
// function P5() {}
// function clone(P) {
//   const instance = Object.create(new P());
//   instance.fun = () => {};
//   return instance;
// }
// // 6 寄生组合
// function P6() {}
// function C6(arguments) {
//   P6.call(this, arguments);
// }
// function cl(P, C) {
//   C.prototype = Object.create(p.prototype);
//   C.constructor = C;
// }

// // 原型链继承
// function P1() {}
// function C1() {}
// C1.prototype = new P1();
// // 构造函数
// function P2() {}
// function C2() {
//   P2.call(this, arguments);
// }
// // 3 组合继承
// function P3() {}
// function C3() {
//   P3.call(this, arguments);
// }
// C3.prototype = new P3();
// // 4 原型继承
// function P4() {}
// const c4 = Object.create(new P4());
// // 5 寄生继承
// function P5(arguments) {}
// function clone(P) {
//   const instance = Object.create(new P());
//   instance.fun = () => {};
//   return instance;
// }
// // 6 寄生组合继承
// function P6() {}
// function C6() {
//   P6.call(this, arguments);
// }
// function clone2(P, C) {
//   C.prototype = Object.create(P.prototype);
//   C.constructor = C;
// }

function P1() {}
function C1() {}
C1.prototype = new P1();

function P2() {}
function C2() {
  P2.call(this, arguments);
}
function P3() {}
function C4() {
  P3.call(this, arguments);
}
C4.prototype = new P3();
function P4() {}
const c4 = Object.create(new P4());

function P5() {}
function clone1(P, C) {
  const instance = Object.create(new P());
  instance.getFun = () => {};
  return instance;
}
function P6() {}
function C6() {
  P6.call(this, arguments);
}
function clone2(P, C) {
  C.prototype = Object.create(P.prototype);
  C.constructor = C;
}
