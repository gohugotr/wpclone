import { useContext } from "react"
import { ThemeContext } from "../context/theme"

const ToggleTheme = () => {

    const [theme, setTheme] = useContext(ThemeContext) // theme değerini yakalıyoruz

    return (
      <>
        {theme === 'light' ? (
          <span onClick={() => {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
          }} style={{ fontSize: '2em' }}>
            🌓
          </span>
        ) : (
          <span onClick={() => {
            setTheme('light')
            localStorage.setItem('theme','light')
          }} style={{ fontSize: '2em ' }}>
            🌞
          </span>
        )}
      </>
    )
}

export default ToggleTheme