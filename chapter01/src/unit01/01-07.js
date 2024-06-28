// p.25 문자열 생성 후 변경 불가

const foo = 'bar';

console.log(foo[0]); // 'b

// 앞 글자를 다른 글자로 변경해보기
foo[0] = 'a';

// 반영되지 않음
console.log(foo);
