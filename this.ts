interface Name {
    name: string;
}

const Sam :Name = { name: 'Sam'}

// this의 type 지정해주기 (함수의 첫번째 매개변수 자리에)
// function showName(this:Name) {
//     console.log(this.name)
// }

// 다른 매개변수가 있을 때
function showName(this :Name, age:number, gender:'m'|'f') {
    console.log(this.name, age, gender)
}

const showSam = showName.bind(Sam);
// 두번째, 세번째 매개변수를 전달
showSam(20, 'm');

interface Name2 {
    name: string;
    age: number;
}

// 함수 오버로드
// : 전달받은 매개변수의 갯수나 타입에 따라 다르게 동작
function join(name: string, age: number): Name2;
function join(name: string, age: string): string;

function join(name: string, age: number | string): Name2 | string {
    if(typeof age === "number") {
        return {
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력해주세요.";
    }
}

const ham: Name2 = join("Ham", 30);
const jane: string = join("Jane", "30");
console.log(ham);
console.log(jane);