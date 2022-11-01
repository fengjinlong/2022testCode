// 应用
axios({
  url: "xxx",
  method: "GET",
}).then((res) => console.log("res", res));

function axios(config): any {
  let adaptor = getDefaultAdaptor();
  return adaptor(config);
}
function getDefaultAdaptor() {
  let adaptor;
  if (typeof XMLHttpRequest != "undefined") {
    adaptor = xhr;
  }
  if (typeof process != "undefined") {
    adaptor = http;
  }
  return adaptor;
}
function xhr(config: any) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open(config.method, config.url, true);
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        if (request.status === 200) {
          resolve(request.responseText);
        } else {
          reject("error");
        }
      }
    };
    request.send();
  });
}
function http(config) {
  let http = require("http");
  return new Promise(function (resolve, reject) {
    const options = {};
    let req = http.request();
    // 省略部分代码
    req.on("error", function (error) {
      reject(error);
    });
    req.end();
  });
}
