import { createGlobalStyle } from 'styled-components';
import { COLOR_BLACK } from './Constants';
import image from './assets/background.png';
 
const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    margin:0;
    padding:0;
  }
  body {
    font-family: "Arial";
    font-weight: 1000;
    overflow-x: hidden;
    background-color: ${COLOR_BLACK};
  }
  h1,h2,h3,h4,h5,h6 {
    margin:0;
    padding:0;
  }
  a{
    color:inherit;
    text-decoration:none;
  }
  
  .preloader {
    background-color: ${COLOR_BLACK};
  }
`;
 
export default GlobalStyles;