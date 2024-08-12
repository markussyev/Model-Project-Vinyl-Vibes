import React, {createContext, useState, useContext, useEffect} from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const themeStyles = {
    background: darkMode ? 'bg-darkgray-default' : 'bg-white',
    cardBackgroundColor: darkMode ? 'bg-darkgray-default' : 'bg-white',
    textColor: darkMode ? 'text-lightgray-default' : 'text-darkgray-default',
    likeIcon: darkMode ? 'LikeIconDarkMode' : 'LikeIconRegular',
    likeIconActive: darkMode ? 'LikeIconActiveDarkMode' : 'LikeIconActive',
   classActive: darkMode ? 'active:text-lightgray-default active:line-through active:decoration-4 active:decoration-lightcoral-default' : 'active:text-darkgray-default active:line-through active:decoration-4 active:decoration-lightcoral-default',
  };


  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
}