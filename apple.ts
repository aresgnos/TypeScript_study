
// title
let title = document.querySelector('#title');
// #title이 null일수도 있기 때문에
// narrowing

// 1.
// if (title != null) { // type을 하나로 확정
//     title.innerHTML = '반가워요';
// }

// 2.
if (title instanceof Element) {
    title.innerHTML = '반가워요';
}

// 3.
// if (title?.innerHTML != undefined) {
    // innerHTML이 있으면 출력해주고, 없으면 undefined 출력
//     title.innerHTML = '반가워요';
// }

// a 태그
let link = document.querySelector('.link');
// link.href = 'https://kakao.com'
// 상단 코드는 안됨, union type이기 때문
// a 태그는 HTMLAnchorElement라고 정확히 타입을 지정해줘야함
// object type 정의 정확하게 해줘야함
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com';
}

// button 태그
let button = document.querySelector('#button');
button?.addEventListener('click', function() {
    if(button instanceof HTMLButtonElement) {
        button.innerHTML = '클릭';
    }
});