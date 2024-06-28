// p.61 스코프가 중첩돼 있을 경우
var x = 10;

function foo() {
	var x = 100;
	console.log(x); // 100

	function bar() {
		var x = 1000;
		console.log(x); // 1000
	}

	bar();
}

console.log(x); // 10
foo();
