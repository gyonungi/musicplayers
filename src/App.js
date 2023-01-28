import React, { useState,useContext  } from "react";
import styled, { ThemeContext } from 'styled-components'
import './App.css';
import Header from './components/Header/Header';
import CenterBlock from "./components/CenterBlock/CenterBlock";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Playerbar from "./components/Player/Player"
import './components/Player/Player.css'
import { StyledDivApp } from "./App.jsx";
import { themes,ThemeContexts } from "./components/ThemeStore/Themestore";




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
    dark: themes.dark,
  };

  const {currentTheme,setCurrentTheme} = useState(themes.light);
  const toggleTheme = () => {
      if(currentTheme === themes.dark){
          setCurrentTheme(themes.light);
          return;
      }
      setCurrentTheme(themes.dark);
  }

  return (
    <ThemeContexts.Provider value={{theme: currentTheme, toggleTheme }}>
    <StyledDivApp theme={theme}>  
      <Header/>
      <section className="main">          
        <BurgerMenu/>
        <CenterBlock/>
        <NavigationMenu/>        
      </section>
      <Playerbar/>
    </StyledDivApp>
    </ThemeContexts.Provider>
  );
}
export default App;

