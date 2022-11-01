function getData() {
  let p = new Promise((resolve, reject) => {
    setTimeout((params) => {
      let num = Math.ceil(Math.random() * 20);
      if (num < 10) {
        resolve(num);
      } else {
        reject(num);
      }
    });
  });
  return p;
}

function loadToResolve(onError) {
  function again() {
    let p = getData();
    return p.catch((err) => {
      return new Promise((resolve, reject) => {
        const re = () => resolve(again());
        onError(re);
      });
    });
  }
  again();
}
loadToResolve((re) => {
  re();
}).then(
  (res) => {
    console.log("res", res);
  },
  (err) => {
    console.log("err", err);
  }
);
