// type 지정해주기
let age:number = 30; // number
let isAdult:boolean = true; // boolean
let a:number[] = [1, 2, 3]; // array
let a2:Array<number> = [1, 2, 3]; // array

// 배열
let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];

// 튜플 (Tuple)
let b:[string, number];
b = ['z', 1];
// b = [1, 'z'] => 불가능

b[0].toLowerCase(); // 소문자로 바꾸기

// void = 함수에서 아무것도 반환하지 않을 때
function sayHello():void {
    console.log('hello');
    // console만 찍고 아무것도 반환하지 않기 때문에
    // void 사용
}

// never
function showError():never {
    throw new Error(); // 항상 에러를 반환할 때
}

function infLoop():never {
    while (true) { // 영원히 끝나지 않는 함수
        // do something...
    }
}

// enum = 비슷한 값들끼리 묶는 것, 자동으로 숫자가 할당됨
// enum Os {
//     Window = 3,
//     Ios,
//     Android
// }

// 특정 값만 입력하도록 강제하고 싶을 때
enum Os {
    Window = 'win',
    Ios = 'ios',
    Android = 'and'
}
// 변수에 타입을 담음(선언)
let myOs:Os;
myOs = Os.Window;

// null, undefined
let c:null = null;
let d:undefined = undefined;


console.log(c);