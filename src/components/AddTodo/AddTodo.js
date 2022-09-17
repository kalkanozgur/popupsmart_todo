import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { createTodo } from "./../../api";

function AddTodoForm() {
	const [formData, setFormData] = useState("");
	const OnChange = (e) => {
		setFormData(e.target.value);
	};
	const OnSubmit = (e) => {
		e.preventDefault();
		createTodo(formData);
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
