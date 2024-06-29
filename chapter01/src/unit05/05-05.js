// p.93-96 array 프로토타입의 메서드들

// array.prototype.map
const arr = [1, 2, 3, 4, 5];
const doubledArr = arr.map(item => item * 2);
console.log(doubledArr);

// array.prototype.filter
const evenArr = arr.filter(item => item % 2 === 0);
console.log(evenArr);

// array.prototype.reduce
const sum = arr.reduce((result, item) => {
	return result + item;
}, 0); // 0은 결과를 누적할 초깃값
console.log(sum);

// result1 방식이 훨씬 가독성이 좋지만 같은 배열에 대해 두 번 순환하는 문제가 있으므로
// 상황에 맞게 선택하기
const result1 = arr.filter(item => item % 2 === 0).map(item => item * 100);
const result2 = arr.reduce((result, item) => {
	if (item % 2 === 0) {
		result.push(item * 100);
	}
	return result;
}, []);
console.log(result1);
console.log(result2);

// array.prototype.forEach
arr.forEach(item => console.log(item));

function run() {
	const arr = [1, 2, 3];
	arr.forEach(item => {
		console.log(item);
		if (item === 1) {
			console.log('finished');
			// 함수의 return이 아닌 콜백 함수의 return으로 간주되므로,
			// 계속해서 forEach 콜백이 실행됨
			return;
		}
	});
}

run();
