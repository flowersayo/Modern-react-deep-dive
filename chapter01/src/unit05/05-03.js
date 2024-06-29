// p.91 객체 전개 구문
const obj3 = {
	a: 1,
	b: 1,
	c: 1,
	d: 1,
	e: 1,
};

const aObj3 = {
	...obj3,
	c: 10,
};
console.log(aObj3);

const bObj3 = {
	c: 10,
	...obj3,
};
console.log(bObj3);
