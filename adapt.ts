class Socket {
  output() {
    return "220V";
  }
}
abstract class Power {
  abstract change(): string;
}
class PowerAdaptor extends Power {
  socket: any;
  constructor(socket: Socket) {
    super();
    this.socket = socket;
  }
  change(): string {
    return this.socket.output() + " ---> 24V";
  }
}
let adaptor = new PowerAdaptor(new Socket());
console.log("The power conversion ", adaptor.change());
