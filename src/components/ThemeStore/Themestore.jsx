import { useState } from "react";

import {ThemeContext,themes} from "../contexts/theme";

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
