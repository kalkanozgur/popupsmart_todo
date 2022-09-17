import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	console.log("Theme initializing");
	const [isDark, setIsDark] = useState(true);

	const changeTheme = (data) => setIsDark(data);

	const values = {
		isDark,
		changeTheme,
	};
	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
