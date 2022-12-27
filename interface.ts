// property로 객체를 만들 때

// let user:object;
// user = {
//     name: 'sera',
//     age: 20
// }
// console.log(user.name); // 에러


// 문자열 literal type 지정
type Score = 'A' | 'B' | 'C' | 'F' ; // 지정된 문자만 입력 가능

// property로 객체를 만들 때
// interface를 사용
interface User {
    name: string;
    age: number;
    gender? :string; // optional (항목이 있어도 되고 없어도 되고)
    readonly birthYear :number; // 읽기 전용 속성
    [grade:number] :string; // 학년은 숫자, 학점은 string인 property를 여러개 받을 수 있다.
                            // string에 들어갈 수 있는 것이 광범위하므로 문자열 literal type을 지정
}

let user :User = {
    name: 'sera',
    age: 20,
    birthYear :1992, // 최초에 생성할 때만 할당 가능, 이후 수정 불가능 (read only)
    1 :'A',
}

// 수정 가능
user.age = 10;
user.gender = "female" // string이어야 함.

console.log(user.age);

// interface로 함수 정의하기
interface Add {
    (num1:number, num2:number) :number;
    // 더한 숫자를 리턴해야하므로 :void가 아닌 :number로 지정,
    // console.log만 찍고 return하지 않을 떄는 :void
}
const add: Add = function(x, y) { // num1:x, num2:y 이렇게 바꿀 수 있음.
    return x + y;
}
add(1, 20);
console.log(add(1,20));

// 다른 예
interface isAdult {
    (age:number):boolean;
}
const adult: isAdult = (age) => {
    return age > 19;
}
// 상단과 같음
// const adult: isAdult = function(age) {
//     return age > 19;
// }
adult(30);
console.log(adult(30));

// interface로 class 정의
// implements 사용
// Car interface 정의
interface Car {
    color: string;
    wheels: number;
    start(): void;
}

// class 만들기
class Bmw implements Car {
    color;
    // constructor을 이용해 생성될 때 색상을 받음
    constructor(c:string) {
        this.color = c;
    }
    wheels = 4;
    start() {
        console.log('go!');
    }
}
const bmw = new Bmw("red");
console.log(bmw);
bmw.start();

// interface의 확장
// extends
interface Benz extends Car {
    // Car의 속성들을 그대로 받고
    door: number;
    stop(): void; // 추가 정의 가능
}

const benz :Benz = {
    door: 5,
    stop() {
        console.log('stop!');
    },
    color: 'green',
    wheels: 4,
    start() {
        console.log('go!');
    },
}

benz.stop();
console.log(benz.color);

// 확장은 여러개도 가능함
interface Toy {
    name: string;
}
interface ToyCar extends Car, Toy {
    price: number;
}

const toycar :ToyCar = {
    name: "abc",
    price: 2000,
    color: "blue",
    wheels: 6,
    start() {
        console.log("go! go!");
    }
}
toycar.start();
console.log(toycar.name);