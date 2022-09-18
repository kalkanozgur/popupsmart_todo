import React, { useState } from "react";
import styles from "./styles.module.css";

import { useUser } from "./../../context/UserContext";

function Login() {
	const { login } = useUser();
	const [formData, setFormData] = useState("");
	const onChangeForm = (e) => {
		setFormData(e.target.value);
	};
	const LoginForm = () => {
		console.log(formData);
		login(formData);
	};
	return (
		<div className={styles.LoginForm}>
			<form onSubmit={LoginForm}>
				<input
					type="text"
					placeholder="enter a username"
					value={formData}
					onChange={onChangeForm}
				/>
			</form>
		</div>
	);
}

export default Login;
