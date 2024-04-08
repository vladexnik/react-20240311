import { createContext, useState,useMemo } from 'react'

export const ThemeContext=createContext('light');
 
export function ThemeContextProviderComponent({children}) {
    const [theme, setTheme]=useState('light');

    return(
        <ThemeContext.Provider value={useMemo(() => ({theme, setTheme}), [theme])}>
            {children}
        </ThemeContext.Provider>
    )
}