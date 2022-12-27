// 함수
// type 지정
// function plus(num1:number, num2:number):number {
//     return num1 + num2; // number를 return
// }
function plus(num1, num2) {
    console.log(num1 + num2); // 아무것도 return하지 않을 때
}
plus(1, 2);
function isAdult2(age) {
    return age > 19;
}
// name? => 선택적 매개변수
// 있어도 되고 없어도 되는 optional parameter
function hello(name) {
    return "Hello, ".concat(name || "world");
    // name이 있으면 name을 넣고 없으면 world를 넣어라
}
// 자바스크립트처럼 매개변수에 default값을 줄 때
// 이것도 가능
function hello2(name) {
    if (name === void 0) { name = "world"; }
    return "Hello, ".concat(name);
}
var result = hello();
console.log(result);
var result2 = hello("sera");
console.log(result2);
// 인자에서 선택적 매개변수가 앞에 오면 코드 성립X
function hi(name, age) {
    if (age !== undefined) {
        return "Hello, ".concat(name, ". You are ").concat(age, ".");
    }
    else {
        return "Hello, ".concat(name);
    }
}
console.log(hi("sera", 20));
// 나머지 매개변수는 배열 형태로 type 지정
function plus2() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (result, num) { return result + num; }, 0);
}
plus2(1, 2, 3);
console.log(plus2(1, 2, 3));
