// p.24 BigInt

// 기존 number의 한계: 마지막 숫자가 다르지만 더 이상 다룰 수 없는 크기이므로 true가 나옴
console.log(9007199254740992 === 9007199254740993);

const maxInteger = Number.MAX_SAFE_INTEGER;
console.log(maxInteger + 5 === maxInteger + 6); // true

// BigInt 표현 방법
const bigInt1 = 9007199254740995n; // 1. 숫자 뒤에 n 붙이기
const bigInt2 = BigInt('9007199254740995'); // 2. BigInt 함수 사용하기

const number = 9007199254740992;
const bigint = 9007199254740992n;

console.log(typeof number); // number
console.log(typeof bigint); // bigint

console.log(Boolean(number == bigint)); // true
console.log(Boolean(number === bigint)); // false
