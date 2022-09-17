import "./App.css";
import React, { useState } from "react";
import { getTodos } from "./api";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";

function App() {
	const todos = getTodos();
	// const data = [
	// 	{ content: "content 0", isCompleted: false, id: "0" },
	// 	{ content: "content 4", isCompleted: false, id: "4" },
	// 	{ content: "content 6", isCompleted: false, id: "6" },
	// 	{ content: "content 7", isCompleted: false, id: "7" },
	// 	{ content: "content 8", isCompleted: false, id: "8" },
	// 	{ content: "content 9", isCompleted: false, id: "9" },
	// 	{ content: "content 10", isCompleted: false, id: "10" },
	// 	{ content: "content 11", isCompleted: false, id: "11" },
	// 	{ content: "content 12", isCompleted: false, id: "12" },
	// 	{ content: "content 13", isCompleted: false, id: "13" },
	// 	{ content: "content 14", isCompleted: false, id: "14" },
	// 	{ content: "content 15", isCompleted: false, id: "15" },
	// 	{ content: "content 16", isCompleted: false, id: "16" },
	// 	{ content: "content 17", isCompleted: false, id: "17" },
	// 	{ content: "content 18", isCompleted: false, id: "18" },
	// 	{ content: "content 19", isCompleted: false, id: "19" },
	// 	{ content: "content 20", isCompleted: false, id: "20" },
	// 	{ content: "content 21", isCompleted: false, id: "21" },
	// 	{ content: "content 22", isCompleted: false, id: "22" },
	// 	{ content: "content 23", isCompleted: false, id: "23" },
	// 	{ content: "content 24", isCompleted: false, id: "24" },
	// 	{ content: "content 25", isCompleted: false, id: "25" },
	// 	{ content: "content 26", isCompleted: false, id: "26" },
	// 	{ content: "content 27", isCompleted: false, id: "27" },
	// 	{ content: "content 28", isCompleted: false, id: "28" },
	// 	{ content: "content 29", isCompleted: false, id: "29" },
	// 	{ content: "content 30", isCompleted: false, id: "30" },
	// 	{ content: "content 31", isCompleted: false, id: "31" },
	// 	{ content: "content 32", isCompleted: false, id: "32" },
	// 	{ content: "content 33", isCompleted: false, id: "33" },
	// 	{ content: "content 34", isCompleted: false, id: "34" },
	// 	{ content: "content 35", isCompleted: false, id: "35" },
	// 	{ content: "content 36", isCompleted: false, id: "36" },
	// 	{ content: "content 37", isCompleted: false, id: "37" },
	// 	{ content: "content 38", isCompleted: false, id: "38" },
	// 	{ content: "content 39", isCompleted: false, id: "39" },
	// 	{ content: "content 40", isCompleted: false, id: "40" },
	// 	{ content: "content 41", isCompleted: false, id: "41" },
	// 	{ content: "content 42", isCompleted: false, id: "42" },
	// 	{ content: "content 43", isCompleted: false, id: "43" },
	// 	{ content: "content 44", isCompleted: false, id: "44" },
	// 	{ content: "content 45", isCompleted: false, id: "45" },
	// 	{ content: "content 46", isCompleted: false, id: "46" },
	// 	{ content: "content 47", isCompleted: false, id: "47" },
	// 	{ content: "content 48", isCompleted: false, id: "48" },
	// 	{ content: "content 49", isCompleted: false, id: "49" },
	// 	{ content: "content 50", isCompleted: false, id: "50" },
	// 	{ content: "content 51", isCompleted: false, id: "51" },
	// 	{ content: "content 52", isCompleted: false, id: "52" },
	// 	{ content: "content 53", isCompleted: false, id: "53" },
	// ];

	return (
		<div className="App">
			<Header />
			<AddTodo />
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
