// p.22 undefined

let foo;

console.log(typeof foo === 'undefined'); // true

function bar(hello) {
	return hello;
}

console.log(typeof bar() === 'undefined'); // true
