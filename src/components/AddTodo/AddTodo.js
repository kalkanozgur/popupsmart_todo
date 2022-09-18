import React, { useState } from "react";
import styles from "./styles.module.css";

import { useTodos } from "./../../context/TodoContext";

function AddTodoForm() {
	const [formData, setFormData] = useState("");
	const { addTodo } = useTodos();
	const OnChange = (e) => {
		setFormData(e.target.value);
	};
	const OnSubmit = (e) => {
		e.preventDefault();
		addTodo(formData);
		setFormData("");
	};
	return (
		<div>
			<form onSubmit={OnSubmit}>
				<label htmlFor="addTodo">
					<input
						type="text"
						placeholder="Add ToDo"
						className={styles.input}
						value={formData}
						onChange={OnChange}
					/>
				</label>
			</form>
		</div>
	);
}

export default AddTodoForm;
