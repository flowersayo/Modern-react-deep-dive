// 타입을 사용한 인덱스 시그니처
type Hello = { [key in 'hello' | 'hi']: string };

const hello: Hello = {
	hello: 'hello',
	hi: 'hi',
};

Object.keys(hello).map(key => {
	// Element implicitly has an 'any' type because expression of type 'string'
	// can't be used to index type 'Hello'.
	// No index signature with a parameter of type 'string' was found on 'Hello'
	const value = hello[key];
	return value;
});

// Object.keys(hello)가 반환하는 타입 확인
const result = Object.keys(hello);
console.log(result); // string[]

// 해결 방법: type assertion으로 반환 타입을 string[]으로 강제하기
(Object.keys(hello) as Array<keyof Hello>).map(key => {
	const value = hello[key];
	return value;
});
