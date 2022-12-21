import styled from "styled-components";

export const  StyledBurgenLinkList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 18px 0 10px 0;
    gap: 16px;
    margin-left: 40px;
    `;


    export const StyledBurgenLink = styled.a`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 5px 0;
   text-decoration: none;
    min-width: 208px;
    `;

    export const StyledBurgenButton = styled.button`
    border: none;
    background-color: transparent;
    background-image: url(../../images/icon/hamburger_icon_153362.svg);
    background-position: center;
    background-repeat: no-repeat;
    width: 20px;
    height: 10px;
    margin-left: 40px;
    color: #FFFFFF;
    `;