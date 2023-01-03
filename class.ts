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

// const audi = new Car3("black");

// 접근 제한자(public, private, protected)

// public : 자식 클래스, 클래스 인스턴스 모두 접근가능
// protected : 자식 클래스에서 접근 가능
// private : 해당 클래스 내부에서만 접근 가능

class Car4 {
    // readonly : 읽기전용
    readonly name: string = "car";
    color: string;
    static wheels = 4; // 정적 변수
    constructor(color: string, name) { // 읽기전용에서 name을 바꾸려면
        this.color = color;
        this.name = name;
    }
    start() {
        console.log("start");
        console.log(this.name);
        // 정적 변수를 쓰려면 class 이름을 넣어야함.
        console.log(Car4.wheels);
    }
}

class Audi extends Car4 {
    constructor(color: string, name) {
        super(color, name);
    }
    showName() {
        console.log(this.name);
    }
}

const z1 = new Audi("black", "zzzz");
console.log(z1.name);
console.log(Car4.wheels);
// z1.name = "zzzz";
// console.log(z1.name);

// 추상 class
// 추상 class는 상속받는 쪽에서 구체적으록 구현해야함.
abstract class Car5 {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
    abstract doSomething(): void;
}

// const A = new Car5("red") 불가능

class A extends Car5 {
    constructor(color: string) {
        super(color);
    }
    doSomething(): void { // 상속받은 쪽에서 구체적인 기능 구현
        alert(3);
    }
}