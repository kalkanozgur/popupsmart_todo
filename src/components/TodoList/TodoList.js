import React, { useState } from "react";
import FilterTodo from "../FilterTodo";
import TodoItem from "../TodoItem";
import styles from "./styles.module.css";

function TodoList({ todos }) {
	// console.log(todos);
	const [filteredText, setFilteredText] = useState("");
	const FilterText = (e) => {
		setFilteredText(e.target.value.toLowerCase());
	};
	if (todos)
		return (
			<div className={styles.TodoList}>
				{/* //TODO */}
				{/* <FilterTodo /> */}
				<input
					type="text"
					name="filter-todos"
					placeholder="Filter ToDo"
					value={filteredText}
					onChange={FilterText}
				/>
				<ul>
					{todos
						.filter((todo) =>
							todo.content
								.toLowerCase()
								.toString()
								.includes(filteredText)
						)

						.map((item) => (
							<TodoItem item={item} key={item.id} />
						))}
				</ul>
			</div>
		);
	if (!todos) return <div className={styles.Loading}>Loading</div>;
}

export default TodoList;
