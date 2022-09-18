import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, rgbToHex, TextField } from "@mui/material";

import { useTodos } from "./../../context/TodoContext";

function TodoItem({ item }) {
	const { editTodo, deleteTodo } = useTodos();

	const [isCompleted, setIsCompleted] = useState(item.isCompleted);
	const [editingText, setEditingText] = useState(item.content);

	const [isTextFocused, setIsTextFocused] = useState(false);

	const EditTodo = (content, isComplated) => {
		editTodo(item.id, content, isComplated);
	};
	const DeleteTodo = () => {
		deleteTodo(item.id);
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
						EditTodo(item.content, !isCompleted);
						// EditTodo(item.id, item.content, isCompleted);
					}}
				/>
				{!isTextFocused ? (
					<p
						className={styles.Text}
						onClick={() => {
							setIsTextFocused(true);
						}}
					>
						{editingText}
					</p>
				) : (
					<TextField
						value={editingText}
						onChange={(e) => setEditingText(e.target.value)}
						onMouseOut={(e) => {
							// EditTodo(editingText);
							setIsTextFocused(false);
						}}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								EditTodo(editingText, item.isCompleted);
								e.preventDefault();
							}
						}}
					/>
				)}
			</div>
			<div className={styles.TodoButtonGroup}>
				<span />
				<div className="DeleteButton">
					<Button
						variant="contained"
						onClick={DeleteTodo}
						sx={{ bgcolor: "#757575" }}
					>
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
}

export default TodoItem;
