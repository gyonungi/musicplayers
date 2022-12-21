import React, { useState } from "react";

import "./BurgerMenu.css";
import {StyledBurgenLinkList,StyledBurgenLink} from "./BurgerMenu.jsx"


function BurgerMenu() {
    const [menuVisible, setmenuVisible] = useState(false);

    //обработчик по клику
    const handleClick = () => {
        setmenuVisible(!menuVisible)
    }
    return (
        <div className={`burger-menu`}>
            <button className="burger-menu__close-btn" type="button" onClick={handleClick} />
        {
        menuVisible &&
           
               <StyledBurgenLinkList>
                 <StyledBurgenLink exact to = "/">Главное </StyledBurgenLink>
                <StyledBurgenLink exact to = "/user-playlist">Фильмы </StyledBurgenLink>
                <StyledBurgenLink exact to = "/signing">Войти </StyledBurgenLink>
                </StyledBurgenLinkList>
          
}
        
        </div>
    );
}

export default BurgerMenu;
