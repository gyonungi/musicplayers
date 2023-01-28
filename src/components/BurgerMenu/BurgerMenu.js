import React, { useContext, useState } from "react";
import styled from 'styled-components'
import BurgerImageTheme from "../../images/topic.png"
import {StyledBurgerLinkList,StyledBurgerLink,StyledBurgerButton} from "./BurgerMenu.jsx"
import { useThemeContext } from "../ThemeStore/Themestore";

function BurgerMenu() {

    const StyledBurgerTheme = styled.button`
    border: none;
    background-color: transparent;
    background-image: url(${BurgerImageTheme});
    background-position: center;
    background-repeat: no-repeat;
    width: 17px;
    height: 17px;
    cursor:pointer;
    `;

    const [menuVisible, setmenuVisible] = useState(false);

    //обработчик по клику
    const handleClick = () => {
        setmenuVisible(!menuVisible)
    }
   
    const { toggleTheme, theme } = useThemeContext()

    return (
        <div className={`burger-menu`}>
           <StyledBurgerButton onClick={handleClick}> </StyledBurgerButton>
        {
        menuVisible &&
           
               <StyledBurgerLinkList>
                 <StyledBurgerLink exact to = "/">Главное </StyledBurgerLink>
                <StyledBurgerLink exact to = "/user-playlist">Фильмы </StyledBurgerLink>
                <StyledBurgerLink exact to = "/signing">Войти </StyledBurgerLink>
                <StyledBurgerTheme $IsTheme={theme}
                   onClick={toggleTheme}></StyledBurgerTheme>
                </StyledBurgerLinkList>
          
}
        
        </div>
    );
}

export default BurgerMenu;
