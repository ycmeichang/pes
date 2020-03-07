import 'sanitize.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    max-width: 1080px;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  button,
  a {
    cursor: pointer;
  }
`
export default GlobalStyles
