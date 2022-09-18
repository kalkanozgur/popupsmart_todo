import "./App.css";
import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Login from "./components/Login";

import { useTodos } from "./context/TodoContext";
import { useUser } from "./context/UserContext";

function App() {
	const { todos, isLoading } = useTodos();
	const { loggedIn } = useUser();
	console.log(loggedIn);
	return (
		<div className="App">
			<Header />
			{loggedIn ? (
				<>
					<AddTodo />
					<TodoList todos={todos} isLoading={isLoading} />
				</>
			) : (
				<>
					<Login />
				</>
			)}
		</div>
	);
}

export default App;
