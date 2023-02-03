import { React, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { ThemeContext, themes } from '../components/ThemeStore/Themestore'
import App from '../App'; 
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a{
  textDecoration: none;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
 
}
`;

const StyledApp = styled.div`
width: 100%;
min-height: 100%;
overflow: hidden;
max-width: 100%;
height: 100vh;
margin: 0 auto;
position: relative;
background: ${(props) => props.$IsTheme.background};
color: ${(props) => props.$IsTheme.color};
`;

function Apps() {


  const [currentTheme, setCurrentTheme] = useState(themes.dark)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
  }
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <StyledApp $IsTheme={currentTheme}>
        <GlobalStyle/>
        <App/>
      </StyledApp>
    </ThemeContext.Provider>
  )
}

export default Apps
