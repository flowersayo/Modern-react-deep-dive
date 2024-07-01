// p.105 typeof를 활용한 타입가드 예제
function logging(value: string | undefined) {
	if (typeof value === 'string') {
		console.log(value);
	}

	if (typeof value === 'undefined') {
		return;
	}
}
