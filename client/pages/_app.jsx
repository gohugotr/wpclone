import { ThemeProvider } from '../context/theme'
import React from 'react'
import TopNav from '../components/TopNav'
import '../public/css/styles.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '../context/auth'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TopNav />
        <Toaster />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
