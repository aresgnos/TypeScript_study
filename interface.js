// property로 객체를 만들 때
var user = {
    name: 'sera',
    age: 20,
    birthYear: 1992,
    1: 'A',
};
// 수정 가능
user.age = 10;
user.gender = "female"; // string이어야 함.
console.log(user.age);
var add = function (x, y) {
    return x + y;
};
add(1, 20);
console.log(add(1, 20));
var adult = function (age) {
    return age > 19;
};
// 상단과 같음
// const adult: isAdult = function(age) {
//     return age > 19;
// }
adult(30);
console.log(adult(30));
// class 만들기
var Bmw = /** @class */ (function () {
    // constructor을 이용해 생성될 때 색상을 받음
    function Bmw(c) {
        this.wheels = 4;
        this.color = c;
    }
    Bmw.prototype.start = function () {
        console.log('go!');
    };
    return Bmw;
}());
var bmw = new Bmw("red");
console.log(bmw);
bmw.start();
var benz = {
    door: 5,
    stop: function () {
        console.log('stop!');
    },
    color: 'green',
    wheels: 4,
    start: function () {
        console.log('go!');
    },
};
benz.stop();
console.log(benz.color);
var toycar = {
    name: "abc",
    price: 2000,
    color: "blue",
    wheels: 6,
    start: function () {
        console.log("go! go!");
    }
};
toycar.start();
console.log(toycar.name);
