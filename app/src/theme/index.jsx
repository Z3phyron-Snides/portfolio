import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
   font-family: 'Quicksand', sans-serif;
    
 
    }

    :root {
      --black: #000000ff;
      --oxford-blue: #14213dff;
      --orange-web: #fca311ff;
      --platinum: #e5e5e5ff;
      --white: #ffffffff;
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
        color: ${(props) => props.theme.green};
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
  green: "#fca311ff",
  body: "var(--black)",
  text: "var(--platinum)",
  content: "rgba(229, 229, 229, 0.373)",
  transition: "all .3s ease",
};

export const lightTheme = {
  green: "#fca311ff",
  body: "var(--white)",
  text: "var(--oxford-blue)",
  content: "rgba(20, 33, 61, 0.712)",
  transition: "all .3s ease",
};
