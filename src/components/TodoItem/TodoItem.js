import React from "react";
import styles from "./styles.module.css";
import { Button } from "@mui/material";

import { useState } from "react";

function TodoItem({ item }) {
	// console.log(item);
	const [isCompleted, setIsCompleted] = useState(item.isCompleted);
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
						console.log("double clicked");
					}}
				>
					{item.content}
				</p>
			</div>
			<div className={styles.TodoButtonGroup}>
				<div className="EditButton">
					<Button variant="contained">Edit</Button>
				</div>
				<span />
				<div className="DeleteButton">
					<Button variant="contained">Delete</Button>
				</div>
			</div>
		</div>
	);
}

export default TodoItem;
