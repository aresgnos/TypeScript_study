// Literal Types
// const는 변할 수 없으므로 "Bob"으로 지정됨.
var userName1 = "Bob";
// let은 변할 수 있으므로 type string인 변수
var userName2 = "Tom";
var user2 = {
    name: "Bob",
    // 상단에 명시한 세개의 항목만 사용할 수 있음
    job: "developer"
};
function getGift(gift) {
    console.log(gift.color); // 공통으로 가지고 있는 속성
    if (gift.name === "car") {
        gift.start();
    }
    else {
        gift.call();
    }
}
// 모든 속성을 다 적어야 함.
var toyShip = {
    name: "배",
    start: function () { },
    color: "blue",
    price: 1000
};
