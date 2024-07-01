// p.106 제네릭
function getFirstAndLast1(list: unknown[]) {
	return [list[0], list[list.length - 1]];
}

const [first1, last1] = getFirstAndLast1([1, 2, 3, 4, 5]);

// 다양한 타입을 받아들이기 위해 unknown을 썼지만
// 결과물도 unknwon이 나와서 타입을 좁혀야 함
console.log(first1); // unknown
console.log(last1); // unknown

// 특정 타입의 배열이기 때문에 그 타입 또한 배열에 선언돼 있으므로 반환 값도 같은 타입으로 선언해도 됨
// 이때 제네릭을 사용
function getFirstAndLast2<T>(list: T[]): [T, T] {
	return [list[0], list[list.length - 1]];
}

const [first2, second2] = getFirstAndLast2(['a', 'b', 'c', 'd', 'e']);

console.log(first2);
console.log(second2);
