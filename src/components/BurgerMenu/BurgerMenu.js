import React, { useState } from "react";


import {StyledBurgerLinkList,StyledBurgerLink,StyledBurgerButton} from "./BurgerMenu.jsx"


function BurgerMenu() {
    const [menuVisible, setmenuVisible] = useState(false);

    //обработчик по клику
    const handleClick = () => {
        setmenuVisible(!menuVisible)
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
                </StyledBurgerLinkList>
          
}
        
        </div>
    );
}

export default BurgerMenu;
