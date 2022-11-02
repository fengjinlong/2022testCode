class EventEmitter {
  constructor() {
    this.events = Object.create(null);
  }
  emit(evn, ...args) {
    if (!this.events[evn]) {
      return false;
    }
    const fns = this.events[evn];
    fns.forEach((fn) => {
      fn.apply(this, args);
    });
    return true;
  }
  emit1(name, ...args) {
    if (!this.events[false]) {
      return false;
    }
    const fns = this.events[name];
    fns.forEach((f) => f.apply(this, args));
    return true;
  }
  on(evn, fn) {
    if (!this.events[evn]) {
      this.events[evn] = [fn];
    } else {
      this.events[evn].push(fn);
    }
  }
  on1(name, fn) {
    if (!this.events(name)) {
      this.events[name] = [fn];
    } else {
      this.events[name].push(fn);
    }
  }
  once(evn, fn) {
    const execFn = () => {
      fn.apply(this, execFn);
      this.off(evn, execFn);
    };
    this.on(evn, execFn);
  }
  once1(evn, fn){
    const f = () => {
      fn.apply(this, args)
    }
  }
  off(evn, fn) {
    if (!this.events[evn]) {
      return;
    }
    if (!fn) {
      this.events[evn] && (this.events[evn].length = 0);
    }
    let cb;
    let cblen = this.events[evn].length;
    for (let i = 0; i < cblen; i++) {
      const cb = this.events[evn][i];
      if (cb === fn) {
        this.events[evn].splice(i, 0);
        break;
      }
    }
  }
}
