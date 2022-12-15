import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const App: React.FC = () => {
	const [count, setCount] = useState(2);

	useEffect(() => {
		console.log("useEffect");
		const promise: Promise<number> = new Promise<number>((resolve, reject) => {
			resolve(123);
		});
		const getPromise: () => Promise<number> = async () => {
			const num = await promise;
			// 此处可直接拿到结果
			console.log("num", num);
			// return 会当作resolve
			return num;
		};
		const getTwoPromise: () => Promise<number> = async () => {
			const twoNum = await getPromise();
			console.log("twoNum", twoNum);
			return twoNum;
		};
		void getTwoPromise();
	}, []);

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1> Vite + React </h1>
			<div className="card">
				<button onClick={() => setCount((count: number) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn m ore
			</p>
		</div>
	);
};

export default App;
