import styled from "styled-components";

export const Container = styled.div`
  padding: 0 8%;
  padding-top: 15vh;
  letter-spacing: 1px;
`;

export const Title = styled.div`
  color: ${(p) => p.theme.text};
  overflow: hidden;
`;
export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding-top: 5vh;
  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
`;
