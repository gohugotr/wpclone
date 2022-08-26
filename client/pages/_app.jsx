import 'antd/dist/antd.css'
import { ThemeProvider } from '../context/theme'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
