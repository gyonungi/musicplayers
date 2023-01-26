import React, { useState,useContext  } from "react";
import styled from 'styled-components'
import './App.css';
import Header from './components/Header/Header';
import CenterBlock from "./components/CenterBlock/CenterBlock";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Playerbar from "./components/Player/Player"
import './components/Player/Player.css'
import { StyledDivApp } from "./App.jsx";




function App(props) {
  const StyledDivApp = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: scroll;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: ${props => props.theme.dark};
  `;
  const theme = {
    dark: 'rgba(0, 0, 0, 0.85)',
  };


  return (
  
    <StyledDivApp theme={theme}>  
      <Header/>
      <section className="main">          
        <BurgerMenu/>
        <CenterBlock/>
        <NavigationMenu/>        
      </section>
      <Playerbar/>
    </StyledDivApp>
  );
}
export default App;

