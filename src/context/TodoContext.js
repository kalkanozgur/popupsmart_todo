import React, { useState, useContext, createContext, useEffect } from "react";
import { fetchTodos, apiReq } from "./../api";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	let todoList;
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	console.log("Todos initialized");

	useEffect(() => {
		refreshTodos();
	}, []);

	const refreshTodos = async () => {
		try {
			todoList = await fetchTodos();
			setIsLoading(true);
			setTodos(todoList);
			setIsLoading(false);
		} catch (e) {
			console.log(e);
			setIsLoading(true);
		}
	};

	const addTodo = async (content) => {
		try {
			setIsLoading(true);
			apiReq("post", "", { content: content }).then(() => {
				refreshTodos();
			});
		} catch (e) {
			setIsLoading(true);
			console.log(e);
		}
	};

	const editTodo = async (content, isComplated) => {};

	const values = { todos, isLoading, refreshTodos, addTodo, editTodo };
	return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

const useTodos = () => useContext(TodoContext);
export { TodoProvider, useTodos };
