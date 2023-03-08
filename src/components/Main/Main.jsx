import React from "react"; 
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Header from "../Header/Header"
import Track from "../Track/Track";
import CenterBlock from "../CenterBlock/CenterBlock";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Playerbar from "../Player/Player";
import { MainSelect } from "./Main.styled";




function Main() { 
    return ( 
       <div>  <Header/>
            <MainSelect>
                <BurgerMenu/>   
                <CenterBlock/>
                <NavigationMenu/>
            </MainSelect>
            <Track/>
            
            <Playerbar/>
        </div>
    )
} 
 
export default Main; 
