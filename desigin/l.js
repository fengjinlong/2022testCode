function send() {
  // 初始化数组
  let list = Array.from({ length: 100 }).map((k, i) => i);
  // 最大并发次数
  const limit = 5;

  //定义异步函数
  const asyncGet = async (item) => {
    return item;
  };
  // 初始化100个异步请求函数，当闭包被执行的时候会执行一个请求，当请求执行完后，会获取下一个并执行
  const arr = [];
  const handlers = () => {
    list = list.map((item) => {
      return () => {
        return asyncGet(item).then((res) => {
          console.log("res:" + res);
          let next = list.shift();
          if (next) {
            next();
          } else {
            console.log("全部执行完成");
          }
        });
      };
    });
  };

  handlers();
  // console.log("list", list[0]());

  // 一次性取出最大并发数并执行
  for (let i = 0; i < limit; i++) {
    let fn = list.shift();
    arr.push(fn());
  }

  Promise.all(arr).then((res) => {
    console.log("res", res);
  });
}

send();
