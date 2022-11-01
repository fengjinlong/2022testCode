"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// 适配器
var Socket = /** @class */ (function () {
    function Socket() {
    }
    Socket.prototype.output = function () {
        return "240";
    };
    return Socket;
}());
var Power = /** @class */ (function () {
    function Power() {
    }
    return Power;
}());
var P = /** @class */ (function (_super) {
    __extends(P, _super);
    function P(s) {
        var _this = _super.call(this) || this;
        _this.rocket = s;
        return _this;
    }
    P.prototype.change = function () {
        return this.rocket.output() + " ---> 24V";
    };
    return P;
}(Power));
var a = new P(new Socket());
console.log("a", a.change());
// single
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstace = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
console.log("sss", Singleton.getInstace());
