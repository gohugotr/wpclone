import { useState, useEffect, createContext } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(
    (theme) => {
      if (localStorage.getItem('theme')) {
        setTheme(localStorage.getItem('theme'))
      }
    },
    [theme]
  )

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
