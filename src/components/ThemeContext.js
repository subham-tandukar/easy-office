import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState({
    background: "#fff",
    color: "000",
  });
  const [sideMenu, setSideMenu]=useState(false);
  return (
    <ThemeContext.Provider value={{ theme, setTheme ,sideMenu, setSideMenu}}>
      {props.children}
    </ThemeContext.Provider>
  );
};
