// p.104 instanceof를 활용한 타입가드 예제
class UnAuthorizedError extends Error {
	constructor() {
		super();
	}

	get message() {
		return '인증에 실패했습니다.';
	}
}

class UnExpectedError extends Error {
	constructor() {
		super();
	}

	get message() {
		return '예상치 못한 에러가 발생했습니다.';
	}
}

async function fetchSomething() {
	try {
		const response = await fetch('/api/something');
		return response.json;
	} catch (e) {
		// e는 unknown

		// UnAuthorizedError를 위한 타입 가드 조건문
		if (e instanceof UnAuthorizedError) {
			// do something ...
		}

		// UnAuthorizedError를 위한 타입 가드 조건문
		if (e instanceof UnExpectedError) {
			// do something ...
		}

		throw e;
	}
}
