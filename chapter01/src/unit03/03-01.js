// p.48 클래스 예제
// Car 클래스 선언
class Car {
	// constructor : 생성자
	// 최초에 생성할 때 어떤 인수를 받을지 결정할 수 있으며,
	// 객체를 초기화하는 용도로도 사용
	constructor(name) {
		this.name = name;
	}

	// 인스턴스 메서드
	honk() {
		console.log(`${this.name}가 경적을 울립니다!`);
	}

	// 정적 메서드
	static hello() {
		console.log('저는 자동차입니다.');
	}

	// setter
	set age(value) {
		this.carAge = value;
	}

	// getter
	get age() {
		return this.carAge;
	}
}

// Car 클래스를 활용하여 car 객체 만들기
const myCar = new Car('자동차');

// 메서드 호출
myCar.honk();

// 메서드가 prototype에 선언되었는지 확인
console.log(Object.getPrototypeOf(myCar)); // {constructor: f, hello: f}
console.log(Object.getPrototypeOf(myCar) === Car.prototype); // true
// __proto__는 Object.getPrototypeOf와 동일하게 작동하지만, 가급적 사용해서는 안 됨.
// 원래 의도한 표준은 아니지만 호환성을 지키기 위해서만 존재하는 기능이기 때문
console.log(myCar.__proto__ === Car.prototype); // true

// 정적 메서드는 클래스에서 직접 호출하고,
// 클래스로 만든 객체에서는 호출 불가능
Car.hello();

// setter를 만들면 값 할당하기
myCar.age = 32;

// getter로 값 가져오기
console.log(myCar.age, myCar.name); // 32 자동차
