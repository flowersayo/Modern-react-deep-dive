// p.61 함수 스코프

if (true) {
	var global = 'global scope';
}

console.log(global); // 'global scope'
console.log(global === window.global); // true

function hello() {
	var local = 'local variable';
	console.log(local); // local variable
}

hello();
console.log(local); // ReferenceError: local is not defined
