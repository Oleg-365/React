import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
    themt: 'light',
    toogleTheme: {toggleTheme}
});

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme =() => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
           {children} 
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;
export const usetheme = () => useContext(useContext);