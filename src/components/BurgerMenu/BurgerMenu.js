import React, { useContext, useState } from "react";
import useThemeContext from "../contexts/theme.jsx";
import toggleTheme from "../../App"
import {StyledBurgerLinkList,StyledBurgerLink,StyledBurgerButton,StyledBurgerTheme} from "./BurgerMenu.jsx"


function BurgerMenu() {
    
    const [menuVisible, setmenuVisible] = useState(false);

    //обработчик по клику
    const handleClick = () => {
        setmenuVisible(!menuVisible)
    }

    const ThemeSwitcher = () =>{
        toggleTheme = useThemeContext();
    }
    return (
        <div className={`burger-menu`}>
           <StyledBurgerButton onClick={handleClick}> </StyledBurgerButton>
        {
        menuVisible &&
           
               <StyledBurgerLinkList>
                 <StyledBurgerLink exact to = "/">Главное </StyledBurgerLink>
                <StyledBurgerLink exact to = "/user-playlist">Фильмы </StyledBurgerLink>
                <StyledBurgerLink exact to = "/signing">Войти </StyledBurgerLink>
                <StyledBurgerTheme onClick={toggleTheme} ></StyledBurgerTheme>
                </StyledBurgerLinkList>
          
}
        
        </div>
    );
}

export default BurgerMenu;
