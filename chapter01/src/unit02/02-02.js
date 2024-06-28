// p.39 함수 호이스팅

hello1(); // hello

function hello1() {
	console.log('hello');
}

hello1(); // hello

console.log(typeof hello2 === 'undefined'); // true

hello2(); // Uncaught TypeError: hello2 is not a function

var hello2 = function () {
	console.log('hello');
};
