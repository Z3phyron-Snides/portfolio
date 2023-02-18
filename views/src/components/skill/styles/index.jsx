import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100px;
  min-width: 100px;
  height: 130px;
  padding: 5px;
  border-radius: 5px;
  text-align: center;

  position: relative;
  transition: all 0.3s ease;

  @media screen and (max-width: 900px) {
    max-width: 120px;
    min-width: 120px;
  }
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.div`
  width: 100%;
  /* border-radius: 8px; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Title = styled.div`
  color: ${(p) => p.theme.text};
  font-size: 12px;
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
