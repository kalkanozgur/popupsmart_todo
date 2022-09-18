import React, { useState, useContext, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
	const initialUsername = localStorage.getItem("username");
	const initalLog = localStorage.getItem("loggedIn");
	const [loggedIn, setLoggedin] = useState(initalLog);
	const [user, setUser] = useState({
		username: initialUsername,
		loggedIn: loggedIn,
	});

	const login = (data) => {
		setLoggedin(true);
		setUser({ username: data, loggedIn: true });
		localStorage.setItem("username", data);
		localStorage.setItem("loggedIn", true);
	};

	const values = {
		user,
		loggedIn,
		login,
	};
	return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
