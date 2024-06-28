// p.23 truthy, falsy 구분

// 조건문에서 확인하기
if (1) {
	console.log(Boolean(1)); // true
}

if (0) {
	console.log('');
} else {
	console.log(Boolean(0)); // false
}

if (NaN) {
	console.log('');
} else {
	console.log(Boolean(NaN)); // false
}

// Boolean을 통해 확인하기
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(true)); // true
