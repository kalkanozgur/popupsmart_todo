import React from "react";
import { TextField } from "@mui/material";

function FilterTodo() {
	return (
		<div>
			<TextField
				type="text"
				name="filterTodo"
				id=""
				placeholder="Filter Todo"
			/>
		</div>
	);
}

export default FilterTodo;
