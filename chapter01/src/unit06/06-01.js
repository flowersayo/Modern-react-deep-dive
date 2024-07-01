// 전개 구문

const arr1 = ['a', 'b'];
const arr2 = [...arr1, 'c', 'd', 'e'];
console.log(arr2); // ['a', 'b', 'c', 'd', 'e']

const arr3 = arr1;
console.log(arr3 === arr1); // 내용이 아닌 참조를 복사하므로 true

// 기존 배열에 영향을 미치지 않고 배열을 복사
const arr4 = [...arr4];
console.log(arr4 === arr1); // 값만 복사됐을 뿐, 참조가 다르므로 false

const obj1 = {
	a: 1,
	b: 2,
};

const obj2 = {
	c: 3,
	d: 4,
};

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
