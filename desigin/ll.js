async function runParallel(maxConcurrency, source, iteratorFn) {
  const ret = [];
  const executing = [];
  for (const item of source) {
    const p = Promise.resolve().then(() => iteratorFn(item));
    ret.push(p);

    if (maxConcurrency <= source.length) {
      const e = p.then(() => {
        executing.splice(executing.indexOf(e), 1);
      });
      executing.push(e);
      // console.log("22");
      if (executing.length >= maxConcurrency) {
        // console.log("11");
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(ret);
}
let targets = [5555, 1111, 2222, 3333, 4444, 6666];
const build = async (res) => {
  console.log("一次执行", res);

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("开始 build", res);
      resolve("ok");
    }, res);
  });
};
runParallel(2, targets, build).then((res) => console.log("ppppp"));

/**
 * 简单工厂，目的就是，实现无脑传参
 */

// 太多的构造函数
function Factory(name, age, career) {
  switch (career) {
    case "coder":
      return new Coder(name, age);
      break;
    case "product manager":
      return new ProductManager(name, age);
      break;
  }
}

//简单工厂
function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}

function Factory(name, age, career) {
  let work;
  switch (career) {
    case "coder":
      work = ["写代码", "写系分", "修Bug"];
      break;
    case "product manager":
      work = ["订会议室", "写PRD", "催更"];
      break;
    case "boss":
      work = ["喝茶", "看报", "见客户"];
      break;
    // case 'xxx':
    //     // 其它工种的职责分配
    //     ...
  }
  return new User(name, age, career, work);
}
