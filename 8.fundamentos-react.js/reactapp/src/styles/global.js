import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: powderblue;
    width: 100vw;
    height: 100vh;

    font-family: 'Roboto Slab', serif;

    -webkit-font-smoothing: antialiased;
  }
  
`
