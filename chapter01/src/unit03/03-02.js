// p.54 상속

// Car 클래스 선언
class Car {
	constructor(name) {
		this.name = name;
	}

	honk() {
		console.log(`${this.name} 경적을 울립니다!`);
	}
}

class Truck extends Car {
	constructor(name) {
		// 부모 클래스인 Car의 constructor를 호출
		super(name);
	}

	load() {
		console.log('짐을 싣습니다.');
	}
}

const myCar = new Car('자동차');
myCar.honk(); // 자동차 경적을 울립니다!

const truck = new Truck('트럭');
truck.honk(); // 트럭 경적을 울립니다!
truck.load(); // 짐을 싣습니다.
