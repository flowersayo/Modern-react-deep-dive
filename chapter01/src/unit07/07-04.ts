// p.105-106 in을 활용한 타입가드 예제
interface Student {
	age: number;
	score: number;
}

interface Teacher {
	name: string;
}

function doSchool(person: Student | Teacher) {
	// 조건문으로 두 객체에 겹치지 않는 프로퍼티를 확인하는 것만으로
	// 해당 변수가 어떤 타입으로부터 내려오는지 확인 가능
	if ('age' in person) {
		// person은 Student
		person.age;
		person.score;
	}

	if ('name' in person) {
		// person은 Teacher
		person.name;
	}
}
