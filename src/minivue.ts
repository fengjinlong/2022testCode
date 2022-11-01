import { triggerRef } from "@vue/runtime-core";

const reactive = function (raw) {
  return new Proxy(raw, {
    get(target, key) {
      track(target, key);
      return Reflect.get(target, key);
    },
    set(target, key, value): any {
      const res = Reflect.set(target, key, value);
      trigger(target, key, value);
      return res;
    },
  });
};

function trigger(target: any, key: any, value: any) {
  let depsMap = targetMap.get(target);
  let dep = depsMap.get(key);

  for (const e of dep) {
    e.run();
  }
}

const targetMap = new Map();
let activeEffect;
function track(target: any, key: any) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Set();
    depsMap.set(key, dep);
  }
  trackEffect(dep);
}

function trackEffect(dep: any) {
  if (dep.has(activeEffect)) return;
  dep.add(activeEffect);
}

class Effect {
  private _fn: any;
  constructor(fn) {
    this._fn = fn;
    this.run();
  }
  run() {
    activeEffect = this;
    let res = this._fn();
    return res;
  }
}

const effect = function (fn) {
  return new Effect(fn);
};
export { reactive, effect };
