import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppRoutes } from './Routes.jsx';

/* 
const burgeritem = document.querySelector(".menu__list");
const burgerMenu = document.querySelector(".nav__burger");


burgerMenu.addEventListener("click",burgerHandler);

function burgerHandler () {
 burgeritem.classList.toggle("open");
}

 */













const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
);


