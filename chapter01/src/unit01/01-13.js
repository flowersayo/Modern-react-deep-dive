// p.32 리액트에서의 객체 간 얕은 비교
import { shallowEqual } from 'react-redux';

// 참조가 다른 객체에 대해 비교가 불가능
console.log(Object.is({ hello: 'world' }, { hello: 'world' })); // false

// 반면, shallowEqual은 객체의 1depth까지는 비교 가능
console.log(shallowEqual({ hello: 'world' }, { hello: 'world' })); // true

// 그러나 2 depth까지 가면 이를 비교할 방법이 없으므로 false 반환
console.log(
	shallowEqual({ hello: { hi: 'world' } }, { hello: { hi: 'world' } })
); // false
