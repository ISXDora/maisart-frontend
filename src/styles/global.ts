import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: Honeydew;;
  }  

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  // font-size 16px (default)

  html{
    @media (max-width: 1080px){
      font-size: 93.75%; //16px
    }

    @media (max-width: 720px){
      font-size: 87.5%; //15px
    }
  }

 body{
   background: var(--background);
   -webkit-font-smoothing: antialiased;
 }

 button {
   cursor: pointer;
 }

 [disabled]{
   opacity: 0.6;
   cursor: not-allowed;
 }

`