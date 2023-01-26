import styled from "styled-components";
import BurgerImage from "../../images/icon/hamburger_icon_153362.svg"
import BurgerImageTheme from "../../images/topic.png"

export const  StyledBurgerLinkList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 18px 0 10px 0;
    gap: 16px;
    margin-left: 40px;
    `;


    export const StyledBurgerLink = styled.a`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 5px 0;
   text-decoration: none;
    min-width: 208px;
    `;

    export const StyledBurgerButton = styled.button`
    border: none;
    background-color: transparent;
    background-image: url(${BurgerImage});
    background-position: center;
    background-repeat: no-repeat;
    width: 20px;
    height: 10px;
    margin-left: 40px;
    color: #FFFFFF;
    `;

    export const StyledBurgerTheme = styled.button`
    border: none;
    background-color: transparent;
    background-image: url(${BurgerImageTheme});
    background-position: center;
    background-repeat: no-repeat;
    width: 17px;
    height: 17px;
    cursor:pointer;
    `;