// p.43 클래스 컴포넌트에서 일반 함수와 화살표 함수로 state를 갱신하기
import React from 'react';

class Component extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 1,
		};
	}

	functionCountUp() {
		console.log(this); // undefined
		this.setState(prev => ({ counter: prev.counter + 1 }));
	}

	// 화살표 함수를 사용하면 별도의 작업을 추가로 하지 않고 this에 접근할 수 있음
	ArrowFunctionCountUp = () => {
		console.log(this); // class Component
		this.setState(prev => ({ counter: prev.counter + 1 }));
	};

	render() {
		return (
			<div>
				{/* Cannot read properties of undefined (reading 'setState') */}
				<button onClick={this.functionCountUp}>일반 함수</button>

				{/* 정상적으로 작동 */}
				<button onClick={this.ArrowFunctionCountUp}>화살표 함수</button>
			</div>
		);
	}
}

export default Component;
