// p.77 동기 코드, 태스크 큐, 마이크로 태스크 큐와 렌더링과의 관계를 확인할 수 있는 코드
import { useEffect } from 'react';

function Component() {
	useEffect(() => {
		const button = document.getElementById('run');
		const sync = document.getElementById('sync');
		const macrotask = document.getElementById('macrotask');
		const microtask = document.getElementById('microtask');

		const macro_micro = document.getElementById('macro_micro');

		if (sync) {
			// 동기 코드로 버튼에 1부터 렌더링
			sync.addEventListener('click', function () {
				for (let i = 0; i <= 100000; i++) {
					sync.innerHTML = i;
				}
			});
		}

		if (macrotask) {
			// setTimeout으로 태스크 큐에 작업을 넣어서 1부터 렌더링
			macrotask.addEventListener('click', function () {
				for (let i = 0; i <= 100000; i++) {
					setTimeout(() => {
						macrotask.innerHTML = i;
					}, 0);
				}
			});
		}

		if (microtask) {
			// queueMicrotask로 마이크로 태스크 큐에 넣어서 1부터 렌더링
			microtask.addEventListener('click', function () {
				for (let i = 0; i <= 100000; i++) {
					queueMicrotask(() => {
						microtask.innerHTML = i;
					});
				}
			});
		}

		if (macro_micro) {
			macro_micro.addEventListener('click', function () {
				for (let i = 0; i <= 100000; i++) {
					if (sync) {
						sync.innerHTML = i;
					}

					if (macrotask) {
						setTimeout(() => {
							macrotask.innerHTML = i;
						}, 0);
					}

					if (microtask) {
						queueMicrotask(() => {
							microtask.innerHTML = i;
						});
					}
				}
			});
		}
	}, []);

	return (
		<>
			<ul>
				<li>
					동기 코드: <button id="sync">동기</button>
				</li>
				<li>
					태스크: <button id="macrotask">태스크</button>
				</li>
				<li>
					마이크로 태스크: <button id="microtask">마이크로 태스크</button>
				</li>
			</ul>

			<button id="macro_micro">모두 동시 실행</button>
		</>
	);
}

export default Component;
