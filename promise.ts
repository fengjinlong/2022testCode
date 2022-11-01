// class myPromise {
//   static PENDING = "pending";
//   static FULFILLED = "fulfilled";
//   static REJECTED = "rejected";
//   promiseState: string;
//   promiseResult: null;
//   onRejectedCallbacks: any[];
//   onFulfilledCallbacks: any[];
//   constructor(func) {
//     this.promiseState = myPromise.PENDING;
//     this.promiseResult = null;
//     this.onFulfilledCallbacks = [];
//     this.onRejectedCallbacks = [];
//     try {
//       func(this.resolve.bind(this), this.reject.bind(this));
//     } catch (error) {
//       this.reject(error);
//     }
//   }
//   resolve(result) {
//     if (this.promiseState === myPromise.PENDING) {
//       setTimeout(() => {
//         this.promiseState = myPromise.FULFILLED;
//         this.promiseResult = result;
//         this.onFulfilledCallbacks.forEach((cb) => {
//           cb(result);
//         });
//       });
//     }
//   }
//   reject(reason) {
//     if (this.promiseState === myPromise.REJECTED) {
//       setTimeout(() => {
//         this.promiseState = myPromise.REJECTED;
//         this.promiseResult = reason;
//         this.onRejectedCallbacks.forEach((cb) => {
//           cb(reason);
//         });
//       });
//     }
//   }
//   then(onFulfilled, onRejected) {
//     onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
//     onRejected =
//       typeof onRejected === "function"
//         ? onRejected
//         : (reason) => {
//             throw reason;
//           };

//     const promise2 = new myPromise((resolve, reject) => {
//       if (this.promiseState === myPromise.FULFILLED) {
//         setTimeout(() => {
//           try {
//             let x = onFulfilled(this.promiseResult);
//             resolvePromsie(promise2, x, resolve, reject);
//           } catch (error) {
//             reject(error);
//           }
//         });
//       }
//       if (this.promiseState === myPromise.REJECTED) {
//         setTimeout(() => {
//           try {
//             let x = onRejected(this.promiseResult);
//             resolvePromsie(promise2, x, resolve, reject);
//           } catch (error) {
//             reject(error);
//           }
//         });
//       }
//       if (this.promiseState === myPromise.PENDING) {
//         this.onFulfilledCallbacks.push(() => {
//           try {
//             let x = onFulfilled(this.promiseResult);
//             resolvePromsie(promise2, x, resolve, reject);
//           } catch (error) {
//             reject(error);
//           }
//         });
//         this.onRejectedCallbacks.push(() => {
//           try {
//             let x = onRejected(this.promiseResult);
//             resolvePromsie(promise2, x, resolve, reject);
//           } catch (error) {
//             reject(error);
//           }
//         });
//       }
//     });
//     return promise2;
//   }
// }

// function resolvePromsie(promise2, x, resolve, reject) {
//   if (x === promise2) {
//     return reject(new TypeError(""));
//   }
//   if (x instanceof myPromise) {
//     if (x.promiseState === myPromise.PENDING) {
//       x.then((y) => {
//         resolvePromsie(promise2, x, resolve, reject);
//       }, reject);
//     } else if (x.promiseState === myPromise.FULFILLED) {
//       resolve(x.promiseResult);
//     } else if (x.promiseState === myPromise.REJECTED) {
//       reject(x.promiseResult);
//     }
//   } else if (x !== null && (typeof x === "object" || typeof x === "function")) {
//     try {
//       var then = x.then;
//     } catch (error) {
//       return reject(error);
//     }
//     if (typeof then === "function") {
//       let called = false;
//       try {
//         then.call(
//           x,
//           (y) => {
//             if (called) return;
//             called = true;
//             resolvePromsie(promise2, y, resolve, reject);
//           },
//           (r) => {
//             if (called) {
//               return;
//             }
//             called = true;
//             reject(r);
//           }
//         );
//       } catch (e) {
//         if (called) {
//           return;
//         }
//         called = true;
//         reject(e);
//       }
//     } else {
//       resolve(x);
//     }
//   } else {
//     return resolve(x);
//   }
// }

// class myPromise {
//   promiseState: string;
//   promiseResult: null;
//   onFulfilledCallbacks: any[];
//   onRejectedCallbacks: any[];
//   static PENDING = "pending";
//   static FULFILLED = "fulfilled";
//   static REJECTED = "rejected";
//   constructor(func) {
//     this.promiseState = myPromise.PENDING;
//     this.promiseResult = null;
//     this.onFulfilledCallbacks = [];
//     this.onRejectedCallbacks = [];
//     try {
//       func(this.resolve.bind(this), this.reject.bind(this));
//     } catch (error) {
//       this.reject(error);
//     }
//   }
//   resolve(result) {
//     setTimeout(() => {
//       if (this.promiseState === myPromise.PENDING) {
//         this.promiseState = myPromise.FULFILLED;
//         this.promiseResult = result;
//         this.onFulfilledCallbacks.forEach((cb) => {
//           cb(result);
//         });
//       }
//     });
//   }
//   reject(reason) {
//     setTimeout(() => {
//       if (this.promiseState === myPromise.PENDING) {
//         this.promiseState = myPromise.REJECTED;
//         this.promiseResult = reason;
//         this.onRejectedCallbacks.forEach((cb) => {
//           cb(reason);
//         });
//       }
//     });
//   }
//   then(onFulfilled, onRejected) {
//     onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
//     onRejected =
//       typeof onRejected === "function"
//         ? onRejected
//         : (reason) => {
//             throw reason;
//           };
//     if (this.promiseState === myPromise.FULFILLED) {
//       setTimeout(() => {
//         onFulfilled(this.promiseResult);
//       });
//     }
//     if (this.promiseState === myPromise.REJECTED) {
//       setTimeout(() => {
//         onRejected(this.promiseResult);
//       });
//     }
//     if (this.promiseState === myPromise.PENDING) {
//       this.onFulfilledCallbacks.push(() => {
//         setTimeout(() => {
//           onFulfilled(this.promiseResult);
//         });
//       });
//       this.onRejectedCallbacks.push(() => {
//         setTimeout(() => {
//           onRejected(this.promiseResult);
//         });
//       });
//     }
//   }
// }

class Promise1 {
  static PENDING = "pending";
  status: string;
  result: null;
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  onRejectedCallbacks: any[];
  onFulfilledCallbacks: any[];
  constructor(func) {
    this.status = Promise1.PENDING;
    this.result = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(result) {
    setTimeout(() => {
      this.status = Promise1.FULFILLED;
      this.result = result;
      this.onFulfilledCallbacks.forEach((cb) => cb(result));
    });
  }
  reject(reason) {
    setTimeout(() => {
      this.status = Promise1.REJECTED;
      this.result = reason;
      this.onRejectedCallbacks.forEach((cb) => cb(reason));
    });
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (e) => {
            throw e;
          };
    const promise2 = new Promise1((resolve, reject) => {
      if (this.status === Promise1.FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.result);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.status === Promise1.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.result);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.status === Promise1.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            setTimeout(() => {
              let x = onFulfilled(this.result);
              resolvePromise(promise2, x, resolve, reject);
            });
          } catch (error) {
            reject(error);
          }
        });
        this.onRejectedCallbacks.push(() => {
          try {
            setTimeout(() => {
              let x = onRejected(this.result);
              resolvePromise(promise2, x, resolve, reject);
            });
          } catch (error) {
            reject(error);
          }
        });
      }
    });
    return promise2;
  }
  static all(promiseArr) {
    let n = 0;
    let result: any = [];
    return new Promise((resolve, reject) => {
      promiseArr.forEach((p) => {
        Promise.resolve(p).then(
          (res) => {
            n++;
            result.push(res);
            if (n === promiseArr.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }
  static race(promiseArr) {
    return new Promise((resolve, reject) => {
      promiseArr.forEach((p) => {
        Promise.resolve(p).then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }
  static allSet(promiseArr) {
    let result: any = [];
    let n = 0;
    return new Promise((resolve, reject) => {
      promiseArr.forEach((p) => {
        Promise.resolve(p)
          .then(
            (res) => {
              result.push(res);
              n++;
            },
            (err) => {
              result.push(err);
              n++;
            }
          )
          .finally(() => {
            if (n === promiseArr.length) {
              resolve(result);
            }
          });
      });
    });
  }
  static resolve(value) {
    if (value instanceof Promise1) {
      return value;
    } else if (value instanceof Object && "then" in value) {
      return new Promise1((resolve, reject) => {
        value.then(resolve, reject);
      });
    }
    return new Promise1((resolve, reject) => {
      resolve(value);
    });
  }
  static reject(reason) {
    return new Promise1((resolve, reject) => {
      reject(reason);
    });
  }
  static finally(cb) {
    return this.then(cb, cb);
  }
  // static then(cb: any, cb1: any) {
  //   throw new Error("Method not implemented.");
  // }
}
function resolvePromise(
  promise2: Promise1,
  x: any,
  resolve: any,
  reject: any
) {}
// Promise1.resolve = function (value) {
//   if (value instanceof Promise1) {
//     return value;
//   } else if (value instanceof Object && "then" in value) {
//     return new Promise((resolve, reject) => {
//       value.then(resolve, reject);
//     });
//   }
//   return new Promise((resolve, reject) => {
//     resolve(value);
//   });
// };
