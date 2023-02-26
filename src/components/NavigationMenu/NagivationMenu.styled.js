import styled from "styled-components";
import DailyPlayListImg from "../../images/playlist01.png"
import Top100Img from "../../images/playlist02.png"
import IndyImg from "../../images/playlist03.png"

export const NavigationMenuDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    max-width: 418px;
    padding: 210px 0 0 0;
`;

export const  NavigationMenuLinkDailyPlayList = styled.button`
width: 250px;
height: 150px;
background-image: url(${DailyPlayListImg});
`;

export const  NavigationMenuLinkTop100 = styled.button`
width: 250px;
height: 150px;
background-image: url(${Top100Img});
`;

export const  NavigationMenuLinkIndy = styled.button`
width: 250px;
height: 150px;
background-image: url(${IndyImg});
`;