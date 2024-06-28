// p.37 함수 표현식
const sum1 = function (a, b) {
	console.log(a + b);
	return a + b;
};

sum1(10, 24); // 34

const sum2 = function add(a, b) {
	// 함수 몸통에서 현재 실행 중인 함수를 참조하는 데 사용할 수 있음.
	// 실제 프로덕션 코드에서는 절대로 사용 X
	console.log(arguments.callee.name);
	return a + b;
};

sum2(10, 24);
add(10, 24); // Uncaught ReferenceError: add is not defined
