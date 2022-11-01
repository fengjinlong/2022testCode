function d(fn, wait) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(null, [...arguments]);
    }, wait);
  };
}

function debounce(fn, wait) {
  let timer = null;
  return new Proxy(fn, {
    apply(target, content, args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        target.apply(this, args);
      }, wait);
    },
  });
}

function throttle(fn, wait) {
  let time1 = new Date().getTime();
  return function () {
    let arg = arguments;
    let time2 = new Date().getTime();
    if (time2 - time1 > wait) {
      fn.apply(this, arg);
      time1 = new Date().getTime();
    }
  };
}
const limit1 = function (fn, timer) {
  let firstTime = new Date();
  return new Proxy(fn, {
    // apply 拦截函数
    apply(target, content, args) {
      let lastTime = new Date();
      if (lastTime - firstTime > timer) {
        // fn.bind(content)(args)
        // fn.bind(target)(args)
        target(args);
        firstTime = new Date();
      } else {
        console.log("limit");
      }
    },
  });
};

const fun = () => {
  console.log("执行666666666666666666666666666666666");
};
const targetFun = limit1(fun, 1000);

setInterval(() => {
  console.log(111);
  targetFun();
}, 200);

// 节流
const limit = function (fn, waiter) {
  let time1 = new Date();
  return new Proxy(fn, {
    apply(target, content, args) {
      let time2 = new Date();
      if (time2 - time1 > waiter) {
        target(args);
        time1 = new Date();
      }
    },
  });
};
const li = function (fn, waiter) {
  let time1 = new Date();
  return new Proxy(fn, {
    apply(target, content, args) {
      let time2 = new Date();
      if (time2 - time1 > waiter) {
        target(args);
        time1 = new Date();
      }
    },
  });
};
let li2 = function (fn, wa) {
  let time1 = new Date();
  return new Proxy(fn, {
    apply(target, content, args) {
      let time2 = new Date();
      if (time2 - time1 > wa) {
        target(args);
        time1 = new Date();
      }
    },
  });
};
let d2 = function (fn, w) {
  let time1;
  return new Proxy(fn, {
    apply(target, content, args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        target(args);
      }, w);
    },
  });
};
let lii = function (fn, w) {
  let time1 = new Date();
  return new Proxy(fn, {
    apply(target, content, args) {
      let time2 = new Date();
      if (time2 - time1 > w) {
        target(args);
        time1 = new Date();
      }
    },
  });
};
function debounce(fn, wait) {
  let timer = null;
  return new Proxy(fn, {
    apply(target, content, args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        target.apply(this, args);
      }, wait);
    },
  });
}
function d(fn, wait) {
  let timer = null;
  return new Proxy(fn, {
    apply(target, content, args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        target.apply(this, args);
      }, wait);
    },
  });
}
