type Tu = [string, number];
let arr: Tu = ["1", 1];

interface Ip {
  name: string;
  age: number;
}
const obj: Ip = {
  name: "name",
  age: 1,
};
class Person implements Ip {
  name: string = "";
  age: number = 1;
}
interface say {
  (name: string): string;
}
const fun: say = (name1: string) => {
  return name1;
};

interface Ip1 {
  age: number;
  name: string;
  [prop: string]: string | number;
}
const o: Ip1 = {
  age: 1,
  name: "",
};
o.dd = 1;

let un: unknown;
let a = un;

type res<T> = T extends 1 ? number : string;
type t = res<2>;

type ob = { a: number } & { c: string };
let ab: ob = {
  a: 1,
  c: "",
};

type MapType<T> = {
  [key in keyof T]: [T[key]];
};
type oo = {
  a: string;
  b: number;
};
type oo1 = MapType<oo>;

let ob: oo1 = {
  a: [""],
  b: [1],
};

let str = "abc";
let s = str.replace(/a(b)c/, "$1,$2,$3");
console.log(str, s);

class Dong {
  name: string;
  constructor() {
    this.name = "dong";
  }
  hello(this: Dong) {
    return this.name;
  }
}
const d = new Dong();
d.hello();
d.hello.call({ ccc: 1 });
