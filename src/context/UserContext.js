import React, { useState, useContext, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState("Özgür");
	const [loggedIn, setLoggedin] = useState(false);

	const login = (data) => {
		setLoggedin(true);
		setUser(data);
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
