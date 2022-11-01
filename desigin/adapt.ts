// 适配器
class Socket {
  output() {
    return "240";
  }
}
abstract class Power {
  abstract change(): any;
}
class P extends Power {
  rocket: any;
  constructor(s: any) {
    super();
    this.rocket = s;
  }
  change(): any {
    return this.rocket.output() + " ---> 24V";
  }
}
let a = new P(new Socket());

console.log("a", a.change());
// single
class Singleton {
  private static instance: Singleton;
  public static getInstace(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}
console.log("sss", Singleton.getInstace());

export {};
