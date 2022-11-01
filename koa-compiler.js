/**
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */

function compose(middleware) {
  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function (context, next) {
    // last called middleware #
    let index = -1;
    return dispatch(0);
    function dispatch(i) {
      if (i <= index)
        return Promise.reject(new Error("next() called multiple times"));
      index = i;
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
    }
  };
}

function myFreeze(obj) {
  // 判断参数是否为Object类型
  if (obj instanceof Object) {
    Object.seal(obj);
    let p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        Object.defineProperty(obj, p, { writable: false });
        myFreeze(obj[p]);
      }
    }
  }
}
