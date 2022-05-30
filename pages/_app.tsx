import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import { GlobalStyle } from '../styles/globalStyle'
import { theme } from '../styles/theme'





export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
