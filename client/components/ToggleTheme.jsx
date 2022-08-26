import { useContext } from "react"
import { ThemeContext } from "../context/theme"

const ToggleTheme = () => {
    return (
      <>
        <span style={{ fontSize: '2em' }}>🌞</span>
        <span style={{ fontSize: '2em ' }}>🌓</span>
      </>
    )
}

export default ToggleTheme