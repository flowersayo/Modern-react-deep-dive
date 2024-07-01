// p.26 Symbol 함수 생성하기

// Symbol 함수에 같은 인수를 넘겨주더라도 동일한 값으로 인정되지 않음
// 심벌 함수 내부에 넘겨주는 값은 Symbol 생성에 영향을 미치지 않음(Symbol.for 제외)
const key = Symbol('key');
const key2 = Symbol('key');

console.log(Boolean(key === key2)); // false

// 동일한 값을 사용하기 위해서 Symbol.for를 활용
console.log(Symbol.for('hello') === Symbol.for('hello')); // true
