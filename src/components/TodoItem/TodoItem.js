import React from "react";
import styles from "./styles.module.css";
import { Button } from "@mui/material";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

import { useState } from "react";

import { useTodos } from "./../../context/TodoContext";

function TodoItem({ item }) {
	const { editTodo } = useTodos();
	// console.log("item", item);
	const [isCompleted, setIsCompleted] = useState(item.isCompleted);

	const EditTodo = () => {
		editTodo(item.id, "değişti", item.isCompleted);
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
				<p>{item.content}</p>
			</div>
			<div className={styles.TodoButtonGroup}>
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
