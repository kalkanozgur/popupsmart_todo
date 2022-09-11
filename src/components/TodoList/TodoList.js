import React from "react";
import FilterTodo from "../FilterTodo";
import TodoItem from "../TodoItem";
import styles from "./styles.module.css";

import { Box } from "@mui/material";

function TodoList({ data }) {
	// console.log(data);
	if (data)
		return (
			<div className={styles.TodoList}>
				<FilterTodo />
				<ul>
					{data.map((item) => (
						<TodoItem item={item} key={item.id} />
					))}
				</ul>
			</div>
		);
	if (!data) return <div className={styles.Loading}>Loading</div>;
}

export default TodoList;
