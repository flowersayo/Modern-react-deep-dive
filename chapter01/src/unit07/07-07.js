// p.113 JSDock, ts-check 사용 예시

// @ts-check

/**
 * @type {string}
 */
const str = true;

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function sum(a, b) {
	return a + b;
}

/**
 * Function lacks ending return statement and return type does not include 'undefined'
 * @return {JSX.Element}
 */
export function SampleComponent() {
	// Argument of type 'string' is not assignable to parameter of type 'number'.ts
	const result1 = sum('a', 'b');
	// Argument of type 'string' is not assignable to parameter of type 'number'.ts
	const result2 = sum(10, str);

	if (result1 && result2) {
		return <>{result1 && result2}</>;
	}
}
