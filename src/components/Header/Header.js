import React from "react";
import { useTheme } from "./../../context/ThemeContext";
import { useUser } from "./../../context/UserContext";

import styles from "./styles.module.css";

function Header() {
	const theme = useTheme();
	const { user } = useUser();
	return (
		<div className={styles.Header}>
			<div>TODO App</div>
			<div>
				Hi! {user.username}
				Get ToDo
			</div>
			<div>{JSON.stringify(theme)}</div>
		</div>
	);
}

export default Header;
