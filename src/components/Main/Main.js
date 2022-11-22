import React from "react"; 
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Header from "../Header/Header"
import Track from "../Track/Track";
import CenterBlock from "../CenterBlock/CenterBlock";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Playerbar from "../Player/Player";
import "./Main.css"; 


function Main() { 
    return ( 
       <div>  <Header/>
            <section className="main">
                <BurgerMenu/>
                <CenterBlock/>
                <NavigationMenu/>
            </section>
            <Track/>
            <Playerbar/>
        </div>
    )
} 
 
export default Main; 