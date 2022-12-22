import React from "react";
import { navigationMenu,NavigationMenuLinkDailyPlayList,NavigationMenuLinkTop100,NavigationMenuLinkIndy } from "./NagivationMenu"; 



function NavigationMenu() {
    return (
        <navigationMenu>
            <NavigationMenuLinkDailyPlayList></NavigationMenuLinkDailyPlayList>
            <NavigationMenuLinkTop100 ></NavigationMenuLinkTop100>
            <NavigationMenuLinkIndy ></NavigationMenuLinkIndy>
        </navigationMenu>
    );
}

export default NavigationMenu;
