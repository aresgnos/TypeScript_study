var Sam = { name: 'Sam' };
// this의 type 지정해주기 (함수의 첫번째 매개변수 자리에)
// function showName(this:Name) {
//     console.log(this.name)
// }
// 다른 매개변수가 있을 때
function showName(age, gender) {
    console.log(this.name, age, gender);
}
var showSam = showName.bind(Sam);
// 두번째, 세번째 매개변수를 전달
showSam(20, 'm');
function join(name, age) {
    if (typeof age === "number") {
        return {
            name: name,
            age: age,
        };
    }
    else {
        return "나이는 숫자로 입력해주세요.";
    }
}
var ham = join("Ham", 30);
var jane = join("Jane", "30");
console.log(ham);
console.log(jane);
