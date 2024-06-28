// p.24 Number

const a = 1;

const maxInteger = Math.pow(2, 53);
console.log(maxInteger - 1 === Number.MAX_SAFE_INTEGER); // true

const minInteger = -(Math.pow(2, 53) - 1);
console.log(minInteger === Number.MIN_SAFE_INTEGER); // true

// 2진수, 8진수, 16진수 등으로 각각 표현하더라도 모두 10진수로 해석되어 동일한 값으로 취급
const binary_2 = 0b10; // 2진수 2
console.log(binary_2 == 2); // true

const octal_8 = 0o10; // 8진수 8
console.log(octal_8 == 8); // true

const hexadecimal_16 = 0x10; // 16진수 16
console.log(hexadecimal_16 == 16); // true
