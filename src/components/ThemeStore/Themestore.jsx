import React, { useContext } from 'react'

export const themes = {
  light: {
    color: '#000000',
    background: '#F6F5F3',
    light: true,
  },
  dark: {
    color: '#fff',
    background: '#1C1C1C',
    dark: true,
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (!theme) return theme.dark

  return theme
}
