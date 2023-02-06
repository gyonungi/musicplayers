import React from 'react';
import ReactDOM from 'react-dom/client';
import Contex from "./contex/Contex.jsx"
import { Provider } from "react-redux";
import { store } from "./Store/store";
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
      <Provider store={store}>
    <Contex/>
    </Provider>
  </React.StrictMode>
);


