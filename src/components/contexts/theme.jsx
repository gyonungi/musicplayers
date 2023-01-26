import React from "react";
import { useContext } from "react";

export const themes =  {
    dark: {
        color:"#FFFFFF",
        background:"#000000",
    },
    light:{    
        color:"#000000",
        background:"#FFFFFF",   
    },
}
 export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () =>{}
});

export const useThemeContext = () =>{
    const theme = useContext(ThemeContext);
    if(!theme) return theme.dark;
    return theme;
}
export default ThemeContext