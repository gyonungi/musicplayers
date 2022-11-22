import React, { useState } from "react";

import "./BurgerMenu.css";

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
                <a exact to="/" className="burger-menu__link" >
                    Главное
                </a>

                <a to="/user-playlist" className="burger-menu__link" >
                    Фильмы
                </a>

                <a to="/signin" className="burger-menu__link" >
                    Войти
                </a>
            </div>
}
        
        </div>
    );
}

export default BurgerMenu;
