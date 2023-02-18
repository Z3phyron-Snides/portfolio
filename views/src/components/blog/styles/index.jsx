import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 250px;
  /* max-height: 200px; */
  height: auto;
  position: relative;
  backdrop-filter: blur(7px) saturate(180%);
  -webkit-backdrop-filter: blur(7px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.53);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  transition: all 0.5s ease;
  padding: 5%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  height: 80%;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Title = styled.div`
  padding-top: 10px;
  color: ${(p) => p.theme.text};
`;
export const Description = styled.div`
  color: ${(p) => p.theme.content};
`;
export const Tags = styled.div`
  display: flex;
  gap: 5px;

  .tag {
    font-size: 12px;
    padding: 7px 10px;
    background: ${(p) => p.theme.green};
    border-radius: 10px;
  }
`;

export const Url = styled(Link)`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${(p) => p.theme.green};
  transition: all 0.3s ease;

  &:hover {
    background: ${(p) => p.theme.green};
    color: ${(p) => p.theme.text};
  }
`;

export const Options = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  display: ${(p) => (p.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: -10px;
  color: ${(p) => p.theme.content};
  transition: all 0.3s ease;
  background: ${(p) => p.theme.green};

  &:hover {
    background: ${(p) => p.theme.green};
    color: ${(p) => p.theme.text};
  }
`;

export const OptionList = styled.div`
  position: absolute;
  top: 25px;
  overflow: hidden;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background: ${(p) => p.theme.body};
  display: ${(p) => (p.open ? "grid" : "none")};

  border-radius: 8px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  .option {
    padding: 5px;
    display: flex;
    gap: 5px;
    font-size: 12px;
    align-items: center;
    color: ${(p) => p.theme.content};
    transition: all 0.3s ease;
    &:hover {
      background: ${(p) => p.theme.green};
      color: ${(p) => p.theme.text};
    }
  }
`;
