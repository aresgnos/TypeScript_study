// Literal Types

// const는 변할 수 없으므로 "Bob"으로 지정됨.
const userName1 = "Bob";

// let은 변할 수 있으므로 type string인 변수
let userName2 = "Tom";
// 숫자도 넣으려면
// let userName2: string | number = "Tom";

// Job이라는 type을 만듦
type Job = "police" | "developer" | "teacher";

// User interface를 만듦
interface User2 {
    name: string;
    // Job이라는 type을 사용
    job: Job;
}

const user2: User2 = {
    name: "Bob",
    // 상단에 명시한 세개의 항목만 사용할 수 있음
    job: "developer"
}

// Union Types ( | = or )
// 식별 가능한 union types

interface Car2 {
    name: "car";
    color: string;
    start(): void;
}

interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(gift: Car2 | Mobile) {
    console.log(gift.color); // 공통으로 가지고 있는 속성
    if(gift.name === "car") {
        gift.start();
    } else {
        gift.call();
    }
}

// Intersection Types ( & = and )
// 교차타입
// 여러개의 타입을 하나로 합쳐서 필요한 모든 기능을 가진 하나의 타입이 됨.

interface Ship {
    name: string;
    start(): void;
}

interface Toy {
    name: string;
    color: string;
    price: number;
}

// 모든 속성을 다 적어야 함.
const toyShip: Toy & Ship = {
    name: "배",
    start(){},
    color: "blue",
    price: 1000
}