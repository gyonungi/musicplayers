import React from "react";

import "./BurgerMenu.css";

function BurgerMenu() {
    return (
        <div className={`burger-menu`}>
            <button className="burger-menu__close-btn" type="button"  />

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

        
        </div>
    );
}

export default BurgerMenu;
