import styled from "styled-components";
import hamburgerIconWhite from '../../images/icon/hamburger_icon_153362.svg'
import hamburgerIconDark from '../../images/icon/hamburgerIconDark.svg'

import btnThemeLight from '../../images/icon/btnThemeLight.svg'
import btnThemeDark from '../../images/icon/btnThemeDark.svg'

export const BurgerMenuDiv = styled.div`
  min-width: 208px;
`;


export const  StyledBurgerLinkList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 18px 0 10px 0;
    gap: 16px;
    margin-left: 40px;
    `;


    export const StyledBurgerLink = styled.a`
    cursor: pointer;
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
    cursor: pointer;
    color: inherit;
    background-color: transparent;
    background-image: url(${(props) =>
      props.$IsTheme.dark ? hamburgerIconWhite : hamburgerIconDark});
    background-position: center;
    background-repeat: no-repeat;
    width: 20px;
    height: 10px;
    padding-right: 98px;
    `;

    export const StyledBurgerTheme = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    background-image: url(${(props) =>
      props.$IsTheme.dark ? btnThemeDark : btnThemeLight});
    background-position: center;
    background-repeat: no-repeat;
    width: 39px;
    height: 39px;
    `;