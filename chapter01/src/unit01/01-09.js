// p.26 객체 타입에서 나타나는 자바스크립트 동등 비교 특징

console.log(typeof [] === 'object'); // true
console.log(typeof {} === 'object'); // true

function hello() {}
console.log(typeof hello === 'function'); // true

const hello1 = function () {};
const hello2 = function () {};

// 객체인 함수의 내용이 육안으로는 같아 보여도 참조가 다르기 때문에 false가 반환됨
console.log(Boolean(hello1 === hello2)); // false
