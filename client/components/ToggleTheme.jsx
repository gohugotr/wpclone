import { useContext } from 'react'
import { ThemeContext } from '../context/theme'
//import Head from 'next/head'
import {Helmet} from 'react-helmet'

const ToggleTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext) // theme değerini yakalıyoruz

  return (
    <>
      <Helmet>
        <link rel='stylesheet' href={`/css/${theme}.css`} />
      </Helmet>
      {theme === 'light' ? (
        <span
          onClick={() => {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
          }}
          style={{ fontSize: '2em' }}
        >
          🌓
        </span>
      ) : (
        <span
          onClick={() => {
            setTheme('light')
            localStorage.setItem('theme', 'light')
          }}
          style={{ fontSize: '2em ' }}
        >
          🌞
        </span>
      )}
    </>
  )
}

export default ToggleTheme
