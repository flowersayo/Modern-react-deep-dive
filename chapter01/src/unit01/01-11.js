// p.28 객체 타입의 변수 할당
var hello = {
	greet: 'hello, world',
};

var hi = hello;

// 객체 자체를 복사한 것이기 때문에 새로운 객체가 생성되지 않는다.
// 따라서 변수명 및 각 변수명의 주소가 다르지만 value가 가리키는 주소가 동일함
console.log(hi === hello); // true

// 따라서, hello.greet의 값을 바꾸더라도 hi === hello는 항상 true
hello.greet = 'something';
console.log(hi === hello); // true
