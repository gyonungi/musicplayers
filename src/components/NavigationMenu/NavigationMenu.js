import React from "react";
import { navigationMenuDiv,NavigationMenuLinkDailyPlayList,NavigationMenuLinkTop100,NavigationMenuLinkIndy } from "./NagivationMenu"; 



function NavigationMenu() {
    return (
        <navigationMenuDiv>
            <NavigationMenuLinkDailyPlayList></NavigationMenuLinkDailyPlayList>
            <NavigationMenuLinkTop100 ></NavigationMenuLinkTop100>
            <NavigationMenuLinkIndy ></NavigationMenuLinkIndy>
        </navigationMenuDiv>
    );
}

export default NavigationMenu;
