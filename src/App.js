import "./App.css";
import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";

import { useTodos } from "./context/TodoContext";

function App() {
	const { todos, isLoading } = useTodos();
	return (
		<div className="App">
			<Header />
			<AddTodo />
			<TodoList todos={todos} isLoading={isLoading} />
		</div>
	);
}

export default App;
