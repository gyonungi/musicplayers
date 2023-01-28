import React from "react";
import { useContext,useState  } from "react"


export const DynamicThemeContext = () =>{
    const {currentTheme,setCurrentTheme} = useState(themes.light);
    const toggleTheme = () => {
        if(currentTheme === themes.dark){
            setCurrentTheme(themes.light);
            return;
        }
        setCurrentTheme(themes.dark);
    }
}; 

export const themes = {
    light: {
        color: '#000000',
        background: '#F5F5F5',
        light: true,
    },
    dark: {
        color: '#FFFFFF',
        background: '#1C1C1C',
        dark: true,
    },
}

export const ThemeContexts = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
})

export const useThemeContext = () => {
    const theme = useContext(ThemeContexts)

    if (!theme) return theme.dark

    return theme
}
