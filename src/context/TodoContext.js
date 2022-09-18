import React, { useState, useContext, createContext, useEffect } from "react";
import { fetchTodos, apiReq } from "./../api";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	let todoList;
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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

	const editTodo = async (id, content, isCompleted = false) => {
		console.log("id", id);
		console.log("content", content);
		console.log("isComplated", isCompleted);
		try {
			setIsLoading(true);
			apiReq("put", `${id}`, {
				content: content,
				isCompleted: isCompleted,
			}).then(() => {
				refreshTodos();
			});
		} catch (e) {
			setIsLoading(true);
			console.log(e);
		}
	};

	const deleteTodo = async (id) => {
		try {
			setIsLoading(true);
			apiReq("delete", `${id}`, "").then(() => {
				refreshTodos();
			});
		} catch (e) {
			setIsLoading(true);
			console.log(e);
		}
	};

	const values = {
		todos,
		isLoading,
		refreshTodos,
		addTodo,
		editTodo,
		deleteTodo,
	};
	return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

const useTodos = () => useContext(TodoContext);
export { TodoProvider, useTodos };
