import "./App.css";
import TodoItem from "./components/TodoItem";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		axios("https://631b54b2dc236c0b1ef4242b.mockapi.io")
			.then((data) => setData(data))
			.catch((e) => console.log(e))
			.finally(() => setIsLoading(false));
	});

	return (
		<div className="App">
			<div className="Header">TODO APP</div>
			<div className="Todolist">
				<TodoItem />
				{JSON.stringify(data)}
				{isLoading}
			</div>
		</div>
	);
}

export default App;
