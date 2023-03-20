import { createGlobalStyle } from 'styled-components';

// interface IProps {
//   colors: DefaultTheme;
// }

export const GlobalStyle = createGlobalStyle`
  /* *************** FONTS *************************** */

  /* ************** GLOBAL STYLE ******************* */
/* ********** DEFINE CUSTOM CSS VARIABLES ********************* */
  :root {
    --text-color: #000;
    --bg-color: #fff;
     --bg-black-50: #2b2c2f;
     --bg-opacity: rgba(255, 255, 255, 0.5);
     --outer-shadow: 3px 3px 3px #363636, -2px -3px 3px #0042ff;
  --outer-shadow-0: 0 0 0 #363636, 0 0 0 #0042ff;
  --inner-shadow: inset 3px 3px 3px #363636, inset -3px -3px 3px #0042ff;
  --inner-shadow-0: inset 0px 0px 0px #363636, inset 0px 0px 0px #0042ff;
  }

  /* ********** OVERRIDE CUSTOM CSS VARIABLES FOR DARK THEME ********************* */
  body.dark {
    --text-color: #fff;
    --bg-color: #000;
    --bg-black-50: #2b2c2f;
     --bg-opacity: rgba(43, 44, 47, 0.5);
    --outer-shadow: 3px 3px 3px #0042ff, -2px -3px 3px #363636;
  --outer-shadow-0: 0 0 0 #1c4edf, 0 0 0 #363636;
 --inner-shadow: inset 3px 3px 3px #0042ff, inset -3px -3px 3px #363636;
  --inner-shadow-0: inset 0px 0px 0px #0042ff, inset 0px 0px 0px #363636;
  }



/*************** GLOBAL GENERAL STYLES ****************** */
 html{
  font-size: 15px;
}
@media (max-width:600px){
  html{
    font-size: 10px;
  }
}

  body {
  line-height: 1.5;
  overflow-x: hidden;
 border: 2px solid red;
    max-width: 1500px;
    width: 100%;
    margin: auto;
    -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg-color);
  ::-webkit-scrollbar {
		display: none;
	}
}

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
:before, :after{
   box-sizing: border-box;
}
  h1, h2, h3, h4, h5, h6, p {
    color: var(--text-color);
  }


  button {
    border: none;
    outline: none;
    :focus{
      border: none;
    }
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .page {
    /* flex-basis: 100%; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    transition: margin-left 1s;
    /* width: 15%; */
  /* transition: transform 5s; */

  }

  .page-with-navbar {
    /* margin-left: 15%; */
  }

  @media screen and (max-width: 768px) {
    .page-with-navbar {
      width: 100%;
      margin-left: 0;
    }
  }

  .navbar {
     transform: translateX(-100%);
  }

  .mobile-nav {
    background-color: #753ffd;
    width: 100%;
    height: 40px;
    display: none;
  }

  .mobile-nav-btn {
    color: #fff;
    background: transparent;
    outline: none;
    border: none;
    margin: 0 1rem;
  }



  @media only screen and (max-width: 450px) {
    .mobile-nav{
      display: flex;
      align-items: center;
    }
  }

  .outer-shadow{
  box-shadow: var(--outer-shadow);
}
.inner-shadow{
  box-shadow: var(--inner-shadow);
}
.hover-in-shadow{
  position: relative;
  z-index: 1;
}
.hover-in-shadow:hover{
  box-shadow: var(--outer-shadow-0);
}
.hover-in-shadow:after{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  z-index: -1;
}
.hover-in-shadow:hover:after{
  box-shadow: var(--inner-shadow);
}


`;
