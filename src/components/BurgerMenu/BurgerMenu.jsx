import React, { useState } from "react";
import {BurgerMenuDiv,StyledBurgerLinkList,StyledBurgerLink,StyledBurgerButton,StyledBurgerTheme} from "./BurgerMenu.styled"
import { useThemeContext } from "../ThemeStore/Themestore";
import { Fragment } from 'react'
function BurgerMenu() {
    const [menuVisible, setmenuVisible] = useState(false);

    //обработчик по клику
    const handleClick = () => {
        setmenuVisible(!menuVisible)
    }
   
    const { toggleTheme, theme } = useThemeContext()
    
    return (
        <BurgerMenuDiv>
           <StyledBurgerButton 
            $IsTheme={theme}
            type="button"
           onClick={handleClick}/> 
          
        {
        menuVisible &&(
            <Fragment>
               <StyledBurgerLinkList $IsTheme={theme}>
                 <StyledBurgerLink exact to = "/" >Главное  </StyledBurgerLink>
                <StyledBurgerLink exact to = "/user-playlist">Фильмы </StyledBurgerLink>
                <StyledBurgerLink exact to = "/signing">Войти </StyledBurgerLink>
                <StyledBurgerTheme 
                 $IsTheme={theme}
                 type="button"
                 onClick={toggleTheme}></StyledBurgerTheme>
                </StyledBurgerLinkList>
                  </Fragment>
)}
        
        </BurgerMenuDiv>
    );
}

export default BurgerMenu;