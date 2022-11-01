function getUrlParams(url) {
  let reg = /([^?&=]+)=([^?&=]+)/g
  
  let obj = {};
  url.replace(reg, function () {
    
    obj[arguments[1]] = arguments[2]
  });
  return obj;
}
let url = "https://www.junjin.cn?a=1&b=2";
console.log(getUrlParams(url)); // { a: 1, b: 2 }
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy? dog';

// console.log(p.replace('dog', 'monkey'));

const regex = /dog/g;
console.log(p.replace(regex, 'ferret'));
function querystring(querystr) {
  const [, query] = querystr.split("?")
  if (query) {
    return query.split("&").reduce((pre, cur) => {
      const [key ,val] = cur.split("=")
      if (pre[key]) {
        pre[key] = [...pre[key], decodeURIComponent(val)]
      } else {
        pre[key] = [decodeURIComponent(val)]
      }
      return pre
    }, {});
  }
  return {}
}
console.log('dd', querystring(url));
