import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    border: 2px solid red;
    max-width: 1500px;
    width: 100%;
    margin: auto;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
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
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: margin-right 1s;
    /* width: 15%; */
  /* transition: transform 5s; */

  }

  .page-with-navbar {
    margin-right: 15%;


  }

  @media screen and (max-width: 768px) {
    .page-with-navbar {
      width: 100%;
      margin-right: 0;
    }
  }

  nav {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction:column;
    width: 15%;
    min-height: 100vh;
    background-color: #753ffd;
    padding: 2rem 1rem 1rem 1rem;
    transition: transform 1s;
  }

  .navbar {
     transform: translateX(-100%);
  }

  .nav-btn {
    position: absolute;
    transform: translateX(38px);
    top: 20px;
    left: 0;
    width: 40px;
    height: 60px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #753ffd;
    outline: none;
    border: none;
    font-size: 1rem;
    padding: 5px 10px;
    cursor: pointer;
    color: #fff;
  }
`;
