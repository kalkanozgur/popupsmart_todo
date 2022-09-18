import React, { useState } from "react";
// import FilterTodo from "../FilterTodo";
import TodoItem from "../TodoItem";
import styles from "./styles.module.css";

function TodoList({ todos, isLoading }) {
	const [filteredText, setFilteredText] = useState("");
	const FilterText = (e) => {
		setFilteredText(e.target.value.toLowerCase());
	};
	return (
		<div>
			{/* //TODO */}
			{/* <FilterTodo /> */}
			<input
				className={styles.FilterTodo}
				type="text"
				name="filter-todos"
				placeholder="Filter ToDo"
				value={filteredText}
				onChange={FilterText}
			/>
			{!isLoading ? (
				<ul className={styles.TodoList}>
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
			) : (
				<div className={styles.Loading}>Loading</div>
			)}
		</div>
	);
}

export default TodoList;
