import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.127);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  /* background-color: rgba(255, 255, 255, 0.75); */
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.content};
  padding: 20px;
  position: relative;
  display: grid;
  grid-gap: 20px;

  transition: all 0.5s ease;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.div`
  color: ${(p) => p.theme.text};
`;
export const Description = styled.div`
  color: ${(p) => p.theme.content};
  font-size: 12px;
`;
export const Subtitle = styled.div`
  color: ${(p) => p.theme.content};
  font-size: 12px;
`;
export const Dates = styled.div`
display: flex;
gap: 10px;
  color: ${(p) => p.theme.content};
  font-size: 12px;
`;
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  .tag {
    font-size: 10px;
    padding: 4px 7px;
    background: rgba(121, 121, 121, 0.494);
    border-radius: 10px;
    color: ${(p) => p.theme.text};
    max-height: 20px;
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
