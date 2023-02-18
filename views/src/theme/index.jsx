import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Fira Code';
    
 
    }

    body {
      background: ${(props) => props.theme.body};
    }

    .top__bar {
      display: flex;
      justify-content: space-between;
      padding: 3% 8%;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 999;
      

      a {
        color: #00ff9d;
        font-size: 25px;
      }
      
    } 

     &.isActive {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border: none;
    outline: none;
    height: 15vh;
  }

  @media (max-width: 420px) {
    
    &.isActive {
      height: 10vh;
    }
  }

    
`;

export const darkTheme = {
  green: "#ad4cfc",
  body: "#333",
  text: "#ffffff",
  content: "rgba(255, 255, 255, 0.373)",
  transition: "all .3s ease",
};

export const lightTheme = {
  green: "#9c27fc",
  body: "#ffffff",
  text: "#000",
  content: "rgba(31, 31, 31, 0.712)",
  transition: "all .3s ease",
};
