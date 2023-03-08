import React, { useState } from "react";
import {BurgerMenuDiv,StyledBurgerLinkList,StyledBurgerLink,StyledBurgerButton,StyledBurgerTheme} from "./BurgerMenu.styled"
import { useThemeContext } from "../ThemeStore/Themestore";
import { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { logOut } from "../../store/reducers/auth";
import { Link } from 'react-router-dom';
function BurgerMenu() {
    const [menuVisible, setmenuVisible] = useState(false);

    //обработчик по клику
    const handleClick = () => {
        setmenuVisible(!menuVisible)
    }
   
    const { toggleTheme, theme } = useThemeContext()


    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch(logOut())
    }
    
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
              
                 <StyledBurgerLink>
                 <Link exact to = "/main" >Главное     </Link>
                 </StyledBurgerLink>   
                <StyledBurgerLink>
                  <Link exact to = "/main/favtrack/"> Мой плейлист   </Link>
                  </StyledBurgerLink>
                <StyledBurgerLink>
                    <Link onClick={handleLogout}
                 exact to = "/">Выйти    </Link>
                 </StyledBurgerLink>
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