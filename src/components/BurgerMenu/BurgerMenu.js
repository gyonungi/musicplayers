import React, { useState } from "react";
import { StyledBurgenLinkListDiv} from "./BurgerMenu.jsx";
import "./BurgerMenu.css";
import * as StyledBurgenLinka from "./BurgerMenu.jsx"


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
            <div className="burger-menu__link-list">
                <StyledBurgenLinkListDiv/>
                <a exact to="/" className="burger-menu__link" >
                   <StyledBurgenLinka/>Главное
                </a>

                <a to="/user-playlist" className="burger-menu__link" >
                <StyledBurgenLinka/>  Фильмы
                </a>

                <a to="/signin" className="burger-menu__link" >
                <StyledBurgenLinka/>  Войти
                </a>
            </div>
}
        
        </div>
    );
}

export default BurgerMenu;
