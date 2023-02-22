import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import { AppRoutes } from './Routes.jsx';
import {store} from './store/store'
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
  <BrowserRouter>
     <Provider store={store}>
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
  </Provider>
  </BrowserRouter>   
);


