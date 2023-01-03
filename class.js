// class Car3 {
//     // 클래스 프로퍼티를 선언해야한다.
//     // color: string;
//     // 클래스 프로퍼티를 선언하지 않으려면
//     // constructor 인자에 readonly, public 추가
//     constructor(public color: string) {
//         this.color = color;
//     }
//     start() {
//         console.log("start");
//     }
// }
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
// const audi = new Car3("black");
// 접근 제한자(public, private, protected)
// public : 자식 클래스, 클래스 인스턴스 모두 접근가능
// protected : 자식 클래스에서 접근 가능
// private : 해당 클래스 내부에서만 접근 가능
var Car4 = /** @class */ (function () {
    function Car4(color) {
        this.name = "car";
        this.color = color;
    }
    Car4.prototype.start = function () {
        console.log("start");
        console.log(this.name);
    };
    return Car4;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(color) {
        return _super.call(this, color) || this;
    }
    Audi.prototype.showName = function () {
        console.log(this.name);
    };
    return Audi;
}(Car4));
var z1 = new Audi("black");
console.log(z1.name);
z1.name = "zzzz";
console.log(z1.name);
