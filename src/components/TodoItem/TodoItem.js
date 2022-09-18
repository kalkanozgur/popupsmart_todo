import React from "react";
import styles from "./styles.module.css";
import { Button } from "@mui/material";

import { useState } from "react";

// import { editTodo } from "./../../api";

function TodoItem({ item }) {
	// console.log("item", item);
	const [isCompleted, setIsCompleted] = useState(item.isCompleted);
	const EditTodo = () => {
		// editTodo(item.id, "değişti");
	};
	const DeleteTodo = () => {
		console.log("item.id: ", item);
	};

	//TODO edit/delete

	return (
		<div className={styles.TodoCard}>
			<div
				className={`${styles.TodoContent} ${isCompleted ? styles.Done : ""}`}
			>
				<input
					type="checkbox"
					checked={isCompleted}
					onChange={() => {
						setIsCompleted(!isCompleted);
					}}
				/>
				<p
					onDoubleClick={() => {
						console.log("double clicked to :", item.content);
					}}
				>
					{item.content}
				</p>
			</div>
			<div className={styles.TodoButtonGroup}>
				<div className="EditButton">
					<Button variant="contained" onClick={EditTodo}>
						Edit
					</Button>
				</div>
				<span />
				<div className="DeleteButton">
					<Button variant="contained" onClick={DeleteTodo}>
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
}

export default TodoItem;
