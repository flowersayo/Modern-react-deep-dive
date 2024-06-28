// p.27 값을 저장하는 방식의 차이

// 원시 타입
// 값을 전달하는 방식
let hello = 'hello world';
let hi = hello; // hello world값이 hi에 복사되어 전달됨

console.log(hello === hi); // true

// 값을 각각 선언하는 방식
hello = 'hello world';
hi = 'hello world';

console.log(hello === hi); // true

// 객체 타입
// 다음 객체는 완벽하게 동일한 내용을 가지고 있음
var helloObj = {
	greet: 'hello, world',
};

var hiObj = {
	greet: 'hello, world',
};

// 그러나 동등 비교를 하면 false
console.log(helloObj === hiObj); // false

// 원시값인 내부 속성값을 비교하면 동일함
console.log(helloObj.greet === hiObj.greet); // true
