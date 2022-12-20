import styled from "styled-components";

const  StyledBurgenLinkList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 18px 0 10px 0;
    gap: 16px;
    margin-left: 40px;
    `;

    export const StyledBurgenLinkListDiv = () =>{
        return <StyledBurgenLinkList></StyledBurgenLinkList>
    }

    const StyledBurgenLink = styled.a`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 5px 0;
   text-decoration: none;
    min-width: 208px;
    `;

    export const StyledBurgenLinka = () =>{
        return <StyledBurgenLink></StyledBurgenLink>
    }