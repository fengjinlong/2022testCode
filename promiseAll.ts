class P1 {
  static all(promiseAll) {
    let result: any = [];
    let count = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        let p = promiseAll[i];
        Promise.resolve(p).then(
          (res) => {
            result[i] = res;
            count++;
            if (count === promiseAll.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  static race(promiseAll) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        const p = promiseAll[i];
        Promise.resolve(p).then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
}

class P {
  static all1(promiseAll) {
    let result: any = [];
    let count = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        let p = promiseAll[i];
        Promise.resolve(p).then(
          (res) => {
            result[i] = res;
            count++;
            if (count === promiseAll.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  static all(promiseAll) {
    let result: any = [];
    let count = 0;
    // 返回 promise
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        const p = promiseAll[i];
        Promise.resolve(p).then(
          (res) => {
            result[i] = res;
            count++;
            if (count === promiseAll.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  static race(promiseAll) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        const p = promiseAll[i];
        Promise.resolve(p).then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  static race1(promiseAll) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        const p = promiseAll[i];
        Promise.resolve(p).then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
}
class P2 {
  static all(promiseAll) {
    let result: any = [];
    let count = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        const p = promiseAll[i];
        Promise.resolve(p).then(
          (res) => {
            result[i] = res;
            count++;
            if (count === promiseAll.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  static race(promiseAll) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        Promise.resolve(promiseAll[i]).then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  static allSet(promiseAll) {
    let result: any = [];
    let count = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        let p = promiseAll[i];
        Promise.resolve(p)
          .then(
            (res) => {
              result[i] = { status: "fulfilled", value: res };
              count++;
            },
            (err) => {
              result[i] = { status: "rejected", value: err };
              count++;
            }
          )
          .finally(() => {
            if (count === promiseAll.length) {
              resolve(result);
            }
          });
      }
    });
  }
}

class P3 {
  static all(promiseAll) {
    let result: any = [];
    let count = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        let p = promiseAll[i];
        Promise.resolve(p).then(
          (res) => {
            result[i] = res;
            count++;
            if (count === promiseAll.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  static all2(promiseAll) {
    let result: any = [];
    let count = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        const p = promiseAll[i];
        Promise.resolve(p).then(
          (res) => {
            result.push(res);
            count++;
            if (count === promiseAll.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  static race(promiseAll) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        let p = promiseAll[i];
        Promise.resolve(p).then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  static race2(promiseAll) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        const p = promiseAll[i];
        Promise.resolve(p).then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  static allSet(promiseAll) {
    let result: any = [];
    let count = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        let p = promiseAll[i];
        Promise.resolve(p)
          .then(
            (res) => {
              result[i] = res;
              count++;
            },
            (err) => {
              result[i] = err;
              count++;
            }
          )
          .finally(() => {
            if (count === promiseAll.length) {
              resolve(result);
            }
          });
      }
    });
  }
}
