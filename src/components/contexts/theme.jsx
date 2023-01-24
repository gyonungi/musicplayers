import React from "react";
import { useContext } from "react";

export const themes =  {
    dark: {
        background:{backgroundColor:"black"},
        text:{backgroundColor:"white"},
    },
    light:{    
        background:{backgroundColor:"white"},
        text:{backgroundColor:"black"},
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