// p.29 Object.js vs. === 비교

console.log(-0 === +0); // true
console.log(Object.is(-0, +0)); // false

console.log(Number.NaN === NaN); // false
console.log(Object.is(Number.NaN, NaN)); // true

console.log(NaN === 0); // false
console.log(Object.is(NaN, 0 / 0)); // true

// 객체 비교는 앞서 살펴본 객체 비교 원리와 동등함
console.log(Object.is({}, {})); // false

const a = {
	hello: 'hi',
};

const b = a;

console.log(Object.is(a, b)); // true
console.log(a === b); // true
