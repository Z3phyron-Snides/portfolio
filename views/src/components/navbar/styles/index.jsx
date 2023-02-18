import { Switch } from "@nextui-org/react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }

`;

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  width: 100%;
  animation: ${fadeIn} 4.5s ease;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  z-index: 999;

  .text {
    display: none;
  }

  @media (width >= 440px) {
    .text {
      display: block;
    }

    .icon {
      display: none;
    }
  }

  @media (width >= 440px) {
    .tabs {
      scale: 0.8;
      width: 200px;
    }

    .navbar h1 {
      display: block;
    }
  }

  .tabs {
    flex: 1 1 auto;
  }

  .tabs > input {
    display: none;
    outline: none;
  }

  h2 {
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 400;
  }

  label {
    position: relative;
    z-index: 2;
    padding: 20px;
    font-size: 18px;
    flex: 1 1 auto;
    min-width: 58px;
    opacity: 0.35;
    cursor: pointer;
    text-align: center;
    transition: 0.3s;
    outline: none;

    a {
      color: ${(p) => p.theme.text};
      position: relative;
      &.active {
        color: ${(p) => p.theme.green};
        font-size: 20px;

        &::after {
          content: "";
          display: block;
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50px;
          background: ${(p) => p.theme.green};
          bottom: -15px;
          left: -5px;

          @media screen and (max-width: 1200px) {
            left: 0px;
          }
          @media screen and (max-width: 900px) {
            left: 6px;
          }
        }
      }

      &.pending {
        color: ${(p) => p.theme.green};
      }
    }
  }

  .buttons {
    position: relative;
    display: flex;
  }

  .underline {
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: -3px;
    width: 25%;
    display: grid;
    place-items: center;
    transition: 0.3s;
    outline: none;
  }

  .underline::after {
    content: "";
    display: block;
    translate: 0 -15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${(p) => p.theme.green};
    outline: none;

    @media (width >= 440px) {
      display: none;
    }
  }

  .tabs input:nth-child(1):checked ~ .buttons .underline {
    translate: -10% 0;
  }

  .tabs input:nth-child(2):checked ~ .buttons .underline {
    translate: 70% 0;
  }

  .tabs input:nth-child(3):checked ~ .buttons .underline {
    translate: 150% 0;
  }

  .tabs input:nth-child(4):checked ~ .buttons .underline {
    translate: 230% 0;
  }
  .tabs input:nth-child(5):checked ~ .buttons .underline {
    translate: 310% 0;
  }

  .tabs input:nth-child(1):checked ~ .buttons label:nth-child(1),
  .tabs input:nth-child(2):checked ~ .buttons label:nth-child(2),
  .tabs input:nth-child(3):checked ~ .buttons label:nth-child(3),
  .tabs input:nth-child(5):checked ~ .buttons label:nth-child(5),
  .tabs input:nth-child(4):checked ~ .buttons label:nth-child(4) {
    opacity: 1;
    color: #0af2c0;
    outline: none;
    /* background: ; */
  }
`;

export const Logo = styled(Link)`
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;

export const Toggle = styled.div`
  font-size: 25px;
  display: none;
  margin-left: auto;
  color: ${(props) => props.theme.text};
  @media screen and (max-width: 900px) {
    display: block;
    margin-bottom: -10px;
  }
`;

export const Menu = styled.div``;
export const LinkEl = styled(Link)`
  color: ${(props) => props.theme.text};
`;
export const SwitchEl = styled(Switch)`
  /* margin-left: 100%; */
`;
export const Tools = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  grid-gap: 20px;
`;
