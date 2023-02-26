import React from "react";
import { NavigationMenuDiv,NavigationMenuLinkDailyPlayList,NavigationMenuLinkTop100,NavigationMenuLinkIndy } from "./NagivationMenu.styled"; 



function NavigationMenu() {
    return (
        <NavigationMenuDiv>
            <NavigationMenuLinkDailyPlayList></NavigationMenuLinkDailyPlayList>
            <NavigationMenuLinkTop100 ></NavigationMenuLinkTop100>
            <NavigationMenuLinkIndy ></NavigationMenuLinkIndy>
        </NavigationMenuDiv>
    );
}

export default NavigationMenu;
